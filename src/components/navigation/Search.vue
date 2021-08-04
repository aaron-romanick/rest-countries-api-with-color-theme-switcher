<template>
    <div class="navigation__search search" @click="addFocusWithin">
        <span class="search__icon" aria-hidden="true"></span>
        <input
            aria-label="Search for a country"
            class="search__input"
            placeholder="Search for a country&hellip;"
            type="text"
            @input.stop="search"
        />
    </div>
</template>

<script>
import { useStore } from '@/store'

export default {
    name: 'Search',
    setup() {
        const { setCurrentSearch } = useStore()
        const addFocusWithin = evt => {
            const focusableEl = evt.target.querySelector('input')
            if(focusableEl) focusableEl.focus()
        }

        const search = evt => {
            setCurrentSearch(evt.target.value)
        }

        return {
            addFocusWithin,
            search,
        }
    },
}
</script>

<style lang="scss">
.search {
    align-items: center;
    background-color: var(--search--background-color);
    border: none;
    border-radius: 0.4em;
    box-shadow: 0 0 1.25em -0.25em var(--search--box-shadow);
    display: flex;
    flex-basis: 40rem;
    justify-content: center;
    margin-bottom: 3.5em;
    padding: 1.25em 1.75em;
    transition: background-color var(--transition-time);

    @at-root &:focus-within {
        outline: 0.25rem auto highlight;
        outline: 0.25rem auto -webkit-focus-ring-color;
    }

    @at-root &__icon {
        background: url("../../assets/search-solid.svg") no-repeat center;
        filter: var(--search__icon--filter);
        height: 1.5em;
        transition: filter var(--transition-time);
        width: 1.5em;
    }

    @at-root &__input {
        border: none;
        background-color: inherit;
        color: var(--search__input--color);
        flex: auto;
        font-size: var(--font-size-16);
        margin-left: 1.75em;
        outline: none;
        transition: inherit;

        &::placeholder {
            color: var(--search__input--placeholder);
            opacity: 0.75;
        }
    }

    @media only screen and (min-width: 768px) {
        & {
            margin-right: 1.5rem;
        }
    }
}
</style>
