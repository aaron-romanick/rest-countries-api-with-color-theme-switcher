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
    name: 'NavigationSearch',
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
