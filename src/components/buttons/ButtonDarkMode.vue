<template>
    <button
        class="button header__button--dark-mode"
        @click.stop="toggleDarkMode"
    >
        <span class="button__icon" aria-hidden="true"></span>
        <span class="button__copy">Dark Mode</span>
    </button>
</template>

<script>
import { toRefs, watchEffect } from 'vue'
import { useStore } from '@/store'

const html = document.documentElement
const DARK_MODE_CLASS = 'html--dark-mode'

export default {
    name: 'ButtonDarkMode',
    setup() {
        const {
            state,
            setModeToAgentPref,
            toggleDarkMode,
        } = useStore()
        const { isDarkMode } = toRefs(state)

        setModeToAgentPref()

        watchEffect(() => {
            isDarkMode.value
                ? html.classList.add(DARK_MODE_CLASS)
                : html.classList.remove(DARK_MODE_CLASS)
        })

        return {
            toggleDarkMode,
        }
    },
}
</script>
