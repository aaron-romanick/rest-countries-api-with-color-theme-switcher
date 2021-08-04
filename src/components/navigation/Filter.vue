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
    name: 'Filter',
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

<style lang="scss">
.filter {
    position: relative;
    flex-basis: 13rem;

    &__button,
    &__menu {
        width: 100%;
    }

    &__button {
        background-color: var(--filter__button--background-color);
        border-radius: 0.4em;
        display: flex;
        align-items: center;
        padding: 1.25em 1.75em;
        position: relative;
        transition: background-color var(--transition-time);
        z-index: 2;

        & .button__icon {
            background: url("../../assets/chevron-down-solid.svg") no-repeat center;
            filter: var(--filter__icon--filter);
            height: 0.9rem;
            margin-left: auto;
            transition: filter var(--transition-time);
            width: 0.9rem;
        }
        
        &:focus {
            outline: 0.25rem auto highlight;
            outline: 0.25rem auto -webkit-focus-ring-color;
        }

        &::after {
            border-radius: 0.4em;
            box-shadow: 0 0 1em -0.25em var(--filter__button--after--box-shadow);
            content: "";
            height: 100%;
            left: 0;
            position: absolute;
            top: 0;
            width: 100%;
            z-index: -1;
        }
    }

    &__menu {
        background-color: var(--filter__menu--background-color);
        border-radius: 0.4em;
        display: inline-flex;
        flex-direction: column;
        opacity: 0;
        padding: 0.75em 0;
        position: absolute;
        top: 4.5rem;
        transition: background-color var(--transition-time), opacity var(--transition-time), visibility var(--transition-time);
        visibility: hidden;
        z-index: 1;

        &--expanded {
            opacity: 1;
            visibility: visible;
        }

        &::after {
            border-radius: 0.4em;
            box-shadow: 0 0 1em -0.25em var(--filter__menu--after--box-shadow);
            content: "";
            height: 100%;
            left: 0;
            position: absolute;
            top: 0;
            width: 100%;
            z-index: -1;
        }
    }

    &__item {
        color: currentColor;
        padding: 0.5em 1.75em;
        cursor: pointer;
        text-decoration: none;
        transition: background-color var(--transition-time), color var(--transition-time);

        &:hover,
        &:focus, {
            background-color: var(--filter__item--hover--background-color);
        }
    }
}
</style>
