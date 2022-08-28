<template>
    <div
        ref="filter"
        class="navigation__filter filter"
    >
        <button
            :aria-expanded="isExpanded"
            aria-controls="filter__menu"
            class="button filter__button"
            @click="toggleMenu"
        >
            <span class="button__copy">{{ filterCopy }}</span>
            <span class="button__icon" aria-hidden="true"></span>
        </button>
        <div
            class="filter__menu"
            :class="{ 'filter__menu--expanded': isExpanded }"
            id="filter__menu"
            role="menu"
        >
            <a
                v-for="(region, i) in regions"
                :key="i"
                class="filter__item"
                :data-value="region"
                href="#"
                role="menuitem"
                @click.prevent="setRegionFilter"
            >{{ region }}</a>
        </div>
    </div>
</template>

<script>
import { ref, computed, toRefs } from 'vue'
import { useStore} from '@/store'
import { onClickOutside } from '@vueuse/core'

export default {
    name: 'NavigationFilter',
    setup() {
        const isExpanded = ref(false)
        const filter = ref(null)
        const {
            state,
            setCurrentRegion,
        } = useStore()
        const {
            countries,
            currentRegion,
        } = toRefs(state)

        const filterCopy = computed(() => {
            const defaultCopy = 'Filter by Region'
            return currentRegion.value ?? defaultCopy
        })

        const regions = computed(() => {
            const regionSet = new Set()
            countries.value
                .forEach(country => {
                    if(country.region) regionSet.add(country.region)
                })
            return Array.from(regionSet)
                .sort()
        })

        const addFocusWithin = evt => {
            const focusableEl = evt.target.querySelector('input')
            if(focusableEl) focusableEl.focus()
        }

        const setRegionFilter = evt => {
            setCurrentRegion(evt.target.dataset.value)
            toggleMenu()
        }

        const toggleMenu = () => {
            isExpanded.value = !isExpanded.value
        }

        onClickOutside(filter, () => {
            if(isExpanded.value) toggleMenu()
        })

        return {
            filter,
            filterCopy,
            isExpanded,
            regions,
            
            addFocusWithin,
            setRegionFilter,
            toggleMenu,
        }
    },
}
</script>
