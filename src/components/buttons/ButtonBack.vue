<template>
    <button
        class="button button--back"
        @click="changeToHomeView"
    >
        <span class="button__icon" aria-hidden="true"></span>
        <span class="button__copy">Back</span>
    </button>
</template>

<script>
import { useStore } from '@/store'
import Home from '@/views/Home.vue'

export default {
    name: 'ButtonBack',
    setup() {
        const { changeCurrentView } = useStore()

        const changeToHomeView = () => {
            changeCurrentView(Home)
        }

        return {
            changeToHomeView,
        }
    },
}
</script>

<style lang="scss">
.button--back {
    align-items: center;
    background-color: var(--button--back--background-color);
    border-radius: 0.2em;
    box-shadow: 0 0 0.33em 0.1em var(--button--back--box-shadow);
    display: inline-flex;
    font-size: var(--font-size-16);
    padding: 0.5em 2em;
    transition: background-color var(--transition-time);

    &:hover,
    &:focus {
        background-color: var(--button--back--hover--background-color);
    }

    & .button__icon {
        background: url("../../assets/arrow-back-solid.svg") no-repeat center;
        filter: var(--button__icon--back--filter);
        height: 1.5em;
        margin-right: 1ch;
        transition: filter var(--transition-time);
        width: 1.5em;
    }
}
</style>
