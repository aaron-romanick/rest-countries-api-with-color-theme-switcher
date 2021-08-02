<template>
    <teleport to="header">
        <button
            class="button header__button--dark-mode"
            @click.stop="toggleDarkMode"
        >
            <span class="button__icon" aria-hidden="true"></span>
            <span class="button__copy">Dark Mode</span>
        </button>
    </teleport>
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

<style lang="scss">

.header__button--dark-mode {
    align-items: center;
    border-radius: 999em;
    display: inline-flex;
    margin-right: 0.4rem;
    padding: 0.4rem;
    transition: background-color var(--transition-time);

    &:hover,
    &:active {
        background-color: var(--header__button--dark-mode--hover--background-color);
    }

    & .button__icon {
        background: url("../../assets/dark-mode-regular.svg") no-repeat center;
        filter: var(--button__icon--dark-mode--filter);
        height: 1.25em;
        transition: filter var(--transition-time);
        width: 1.25em;

        @at-root html.html--dark-mode & {
            background-image: url("../../assets/dark-mode-solid.svg");
        }
    }

    & .button__copy {
        margin-left: 0.5em;
    }
}
</style>
