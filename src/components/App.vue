<template>
    <ButtonDarkMode />
    <Loader v-if="isLoading" />
    <component
        v-else
        :is="currentView"
    />
</template>

<script>
import { toRefs } from 'vue'
import { useStore } from '@/store'
import ButtonDarkMode from './buttons/ButtonDarkMode.vue'
import Loader from './Loader.vue'

export default {
    name: 'App',
    components: {
        ButtonDarkMode,
        Loader,
    },
    setup() {
        const { state } = useStore()
        const {
            currentView,
            isLoading,
        } = toRefs(state)

        return {
            currentView,
            isLoading,
        }
    },
}
</script>

<style lang="scss">
:root {
    /**
     * Color
     */
    --oxford-blue: hsl(209, 23%, 22%);
    --ebony-clay: hsl(207, 26%, 17%);
    --woodsmoke: hsl(200, 15%, 8%);
    --gray: hsl(0, 0%, 52%);
    --mercury: hsl(0, 0%, 90%);
    --alabaster: hsl(0, 0%, 98%);
    --white: hsl(0, 0%, 100%);
    --black: hsl(0, 0%, 0%);

    /**
     * Shadows
     */
    --shadow-20: hsla(0, 0%, 0%, 0.2);
    --shadow-40: hsla(0, 0%, 0%, 0.4);
    --shadow-60: hsla(0, 0%, 0%, 0.6);
    --shadow-80: hsla(0, 0%, 0%, 0.8);

    /**
     * Font
     */
    --font-family: 'Nunito Sans', sans-serif;
    --font-size-14: 14px;
    --font-size-16: 16px;
    --font-size-20: 20px;
    --font-size-22: 22px;
    --font-weight-300: 300;
    --font-weight-600: 600;
    --font-weight-800: 800;

    /**
     * Filters
     */
    --filter-gray: invert(56%) sepia(24%) saturate(0%) hue-rotate(194deg) brightness(89%) contrast(83%);
    --filter-white: invert(99%) sepia(1%) saturate(109%) hue-rotate(242deg) brightness(115%) contrast(100%);
    --filter-woodsmoke: invert(5%) sepia(6%) saturate(2225%) hue-rotate(156deg) brightness(92%) contrast(92%);

    /*
     * Transitions
     */
    --transition-time: 150ms;

    /**
     * Derived Variable
     */

    /* Background Colors */
    --html--color: var(--woodsmoke);
    --body--background-color: var(--alabaster);
    --header--background-color: var(--white);
    --header__button--dark-mode--hover--background-color: var(--mercury);
    --search--background-color: var(--white);
    --filter__button--background-color: var(--white);
    --filter__menu--background-color: var(--white);
    --filter__item--hover--background-color: var(--mercury);
    --list__empty--color: var(--gray);
    --list__card--background-color: var(--white);
    --border-countries__link--background-color: var(--white);
    --border-countries__link--hover--background-color: var(--mercury);
    --button--back--background-color: var(--white);
    --button--back--hover--background-color: var(--mercury);

    /* Text Colors */
    --search__input--color: var(--gray);
    --loader--border-all--color: var(--oxford-blue);
    --loader--border-top--color: var(--mercury);
    --loader--border-top--color: var(--mercury);
    
    /* Filters */
    --button__icon--dark-mode--filter: var(--filter-woodsmoke);
    --search__icon--filter: var(--filter-gray);
    --filter__icon--filter: var(--filter-woodsmoke);
    --button__icon--back--filter: var(--filter-woodsmoke);

    /* Box Shadows */
    --header--box-shadow: var(--shadow-20);
    --button--back--box-shadow: var(--shadow-20);
    --border-countries__link--box-shadow: var(--shadow-20);
    --card--box-shadow: var(--shadow-20);
    --card--hover--box-shadow: var(--shadow-40);
    --filter__button--after--box-shadow: var(--shadow-20);
    --filter__menu--after--box-shadow: var(--shadow-40);
    --search--box-shadow: var(--shadow-20);
    
    /* Input Placeholders */
    --search__input--placeholder: var(--gray);
    
}
/**
 * All Element Reset
 */
*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

/**
 * General
 */
html {
    color: var(--html--color);
    font-family: var(--font-family);
    font-size: var(--font-size-14);
    font-weight: var(--font-weight-300);
    line-height: 1.5;
}

/**
 * Derived Variable (Dark Mode)
 */
html.html--dark-mode {

    /* Background Colors */
    --body--background-color: var(--ebony-clay);
    --header--background-color: var(--oxford-blue);
    --header__button--dark-mode--hover--background-color: var(--gray);
    --search--background-color: var(--oxford-blue);
    --filter__button--background-color: var(--oxford-blue);
    --filter__menu--background-color: var(--oxford-blue);
    --filter__item--hover--background-color: var(--gray);
    --list__empty--color: var(--alabaster);
    --list__card--background-color: var(--oxford-blue);
    --border-countries__link--background-color: var(--oxford-blue);
    --border-countries__link--hover--background-color: var(--gray);
    --border-countries__link--hover--background-color: var(--gray);
    --button--back--background-color: var(--oxford-blue);
    --button--back--hover--background-color: var(--gray);

    /* Text Colors */
    --html--color: var(--white);
    --search__input--color: var(--white);
    --loader--border-all--color: var(--white);
    --loader--border-top--color: var(--gray);
    
    /* Filters */
    --button__icon--dark-mode--filter: var(--filter-white);
    --search__icon--filter: var(--filter-white);
    --filter__icon--filter: var(--filter-white);
    --button__icon--back--filter: var(--filter-white);

    /* Box Shadows */
    --header--box-shadow: var(--shadow-40);
    --button--back--box-shadow: var(--shadow-40);
    --border-countries__link--box-shadow: var(--shadow-40);
    --card--box-shadow: var(--shadow-40);
    --card--hover--box-shadow: var(--shadow-60);
    --filter__button--after--box-shadow: var(--shadow-40);
    --filter__menu--after--box-shadow: var(--shadow-80);
    --search--box-shadow: var(--shadow-40);
    
    /* Input Placeholders */
    --search__input--placeholder: var(--white);

}

body {
    background-color: var(--body--background-color);
}

main {
    margin: clamp(1.75rem, 6vh, 4rem) 1.5rem 1.75rem;
}

/**
 * Button
 */
:where(.button) {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: transparent;
    border: none;
    cursor: pointer;
    color: currentColor;
    display: inline-block;
    font-family: inherit;
    font-size: var(--font-size-14);
    text-decoration: none;
    transition: color var(--transition-time);
}

/**
 * Image
 */
:where(.image) {
    display: block;
    height: auto;
    margin: 0 auto;
    max-width: 100%;
}

/**
 * Link
 */
:where(.link) {
    color: currentColor;
    text-decoration: none;
    transition: color var(--transition-time);
}

/**
 * Header
 */
.header {
    align-items: center;
    background-color: var(--header--background-color);
    box-shadow: 0 0 0.33em var(--header--box-shadow);
    display: flex;
    justify-content: space-between;
    min-height:  6rem;
    padding: 1.5em;
    transition: background-color var(--transition-time);
}

.header__heading {
    font-size: var(--font-size-14);
    font-weight: var(--font-weight-800);

    @media only screen and (min-width: 768px) {
        & {
            font-size: var(--font-size-20);
        }
    }
}
</style>