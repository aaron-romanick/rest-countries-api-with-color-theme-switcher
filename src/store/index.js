import axios from 'axios'
import { computed, inject, markRaw, reactive, readonly } from 'vue'
import Country from '@/views/Country.vue'
import Home from '@/views/Home.vue'

const INITIAL_LIST_LIMIT = 20
const LOCAL_STORAGE_KEY = 'restApiCountries_darkMode'

const axiosInstance = axios.create({ baseURL: 'https://restcountries.eu/rest/v2' })

const hasCountryDetails = ({ nativeName = null }) => {
    return nativeName !== null
}
const setModeIntoLocalStorage = darkModeFlag => {
    localStorage.setItem(LOCAL_STORAGE_KEY, darkModeFlag ? 'dark' : 'no-preference')
}

export const storeSymbol = Symbol('store')

export const createStore = () => {

    const state = reactive({
        countries: [],
        currentCode: null,
        currentRegion: null,
        currentSearch: '',
        currentView: markRaw(Home),
        isDarkMode: false,
        isLoading: false,
        listLimit: INITIAL_LIST_LIMIT,
    })

    const currentCountry = computed(() => {
        return state.countries
            .find(({ alpha3Code }) => {
                return alpha3Code === state.currentCode
            })
    })

    const filteredByRegion = computed(() => {
        return state.currentRegion !== null
            ? state.countries
                .filter(({ region }) => {
                    return region === state.currentRegion
                })
            : state.countries
    })
    const filteredBySearch = computed(() => {
        const pattern = new RegExp(
            state.currentSearch
            .split('')
            .join('.*'),
            'i'
        )
        return state.currentSearch.trim() !== ''
            ? state.countries
                .filter(({ name }) => {
                    return pattern.test(name)
                })
            : state.countries
    })

    function changeCurrentView(view) {
        state.currentView = markRaw(view)
    }

    function formatNumber(number) {
        return number.toLocaleString('en-US')
    }

    function getBorderCountries() {
        return state.countries
            .filter(({ alpha3Code }) => {
                return currentCountry.value
                    .borders.includes(alpha3Code)
            })
    }

    function increaseListLimit(amount) {
        state.listLimit = state.listLimit + amount
    }

    async function requestAllCountries () {
        state.isLoading = true
        const fields = [
            'alpha3Code',
            'flag',
            'name',
            'population',
            'region',
            'capital',
        ]
        const { data } = await axiosInstance.get(`/all?fields=${fields.join(';')}`)
        state.isLoading = false
        state.countries = data
    }

    async function requestCountryDetails() {
        if(!hasCountryDetails(currentCountry.value)) {
            const fields = [
                'borders',
                'currencies',
                'topLevelDomain',
                'languages',
                'nativeName',
                'subregion',
            ]
            const { data } = await axiosInstance.get(`/alpha/${state.currentCode.toLowerCase()}?fields=${fields.join(';')}`)
            for(const prop in data) {
                currentCountry.value[prop] = data[prop]
            }
        }
    }

    function resetListLimit() {
        state.listLimit = INITIAL_LIST_LIMIT
    }

    async function setCountryToView(code) {
        state.isLoading = true
        state.currentCode = code
        await requestCountryDetails()
        if(state.currentView !== Country) {
            changeCurrentView(Country)
        }
        state.isLoading = false
    }

    function setCurrentRegion(value) {
        state.currentRegion = value
    }

    function setCurrentSearch(value) {
        state.currentSearch = value
    }

    function setModeToAgentPref() {
        const savedMode = localStorage.getItem(LOCAL_STORAGE_KEY)
        if(
            (
                (
                    savedMode &&
                    savedMode === 'dark'
                ) ||
                (
                    !savedMode &&
                    window.matchMedia &&
                    window.matchMedia(`(prefers-color-scheme: dark)`).matches
                )
            ) && !state.isDarkMode
        ) toggleDarkMode()
        if(!savedMode) setModeIntoLocalStorage(state.isDarkMode)
    }

    function toggleDarkMode() {
        state.isDarkMode = !state.isDarkMode
        setModeIntoLocalStorage(state.isDarkMode)
    }

    return {
        state: readonly(state),
        currentCountry,
        filteredByRegion,
        filteredBySearch,

        changeCurrentView,
        formatNumber,
        getBorderCountries,
        increaseListLimit,
        requestAllCountries,
        requestCountryDetails,
        resetListLimit,
        setCountryToView,
        setCurrentRegion,
        setCurrentSearch,
        setModeToAgentPref,
        toggleDarkMode,
    }
}

export const useStore = () => inject(storeSymbol)
