<template>
    <header class="header">
        <h1 class="header__heading">Where in the world?</h1>
        <ButtonDarkMode />
    </header>
    <main>
        <div
             v-if="isLoading"
             class="loader"
        ></div>
        <component
            v-else
            :is="currentView"
        />
    </main>
</template>

<script>
import { toRefs } from 'vue'
import { useStore } from '@/store'
import ButtonDarkMode from './buttons/ButtonDarkMode.vue'

export default {
    name: 'App',
    components: {
        ButtonDarkMode,
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
html {
    &.html--dark-mode {

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
}

/**
 * Body
 */
body {
    background-color: var(--body--background-color);
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
    
    &__heading {
        font-size: var(--font-size-14);
        font-weight: var(--font-weight-800);

        @media only screen and (min-width: 768px) {
            & {
                font-size: var(--font-size-20);
            }
        }
    }
}

/**
 * Main
 */
main {
    margin: clamp(1.75rem, 6vh, 4rem) 1.5rem 1.75rem;
}

/**
 * Button
 */
.button {
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
.image {
    display: block;
    height: auto;
    margin: 0 auto;
    max-width: 100%;
}

/**
 * Link
 */
.link {
    color: currentColor;
    text-decoration: none;
    transition: color var(--transition-time);
}

/**
 * Loader
 */
.loader {
    align-items: center;
    display: flex;
    height: 50vh;
    justify-content: center;

    &:after {
        animation: loading 1s ease infinite;
        border: 0.8rem solid var(--loader--border-all--color);
        border-radius: 50%;
        border-top-color: var(--loader--border-top--color);
        content: "";
        height: 5rem;
        transition: border-color var(--transition-time);
        width: 5rem;
    }
}

/*
 * Back Button
 */
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
        background: url("../assets/arrow-back-solid.svg") no-repeat center;
        filter: var(--button__icon--back--filter);
        height: 1.5em;
        margin-right: 1ch;
        transition: filter var(--transition-time);
        width: 1.5em;
    }
}

/**
 * Dark Mode Button
 */
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
        background: url("../assets/dark-mode-regular.svg") no-repeat center;
        filter: var(--button__icon--dark-mode--filter);
        height: 1.25em;
        transition: filter var(--transition-time);
        width: 1.25em;

        @at-root html.html--dark-mode & {
            background-image: url("../assets/dark-mode-solid.svg");
        }
    }

    & .button__copy {
        margin-left: 0.5em;
    }
}

/**
 * Navigation
 */
.navigation {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 2rem;
}

/*
 * Country Filter Menu
 */
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
            background: url("../assets/chevron-down-solid.svg") no-repeat center;
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
        &:focus {
            background-color: var(--filter__item--hover--background-color);
        }
    }
}

/**
 * Country Search Field
 */
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
        background: url("../assets/search-solid.svg") no-repeat center;
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

/**
 * Country List
 */
.list {
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    justify-content: center;
    margin-bottom: 4.5rem;

    &__empty {
        color: var(--list__empty--color);
        margin-top: 3rem;
        text-align: center;
    }

    &__sentinel {
        flex-basis: 100%;
        height: 1px;
        width: 1px;
    }

    @media only screen and (min-width: 644px) {
        & {
            row-gap: 5rem;
        }
    }
}

/**
 * Country List Card
 */
.list__link {
    flex-basis: 20rem;
}

.card {
    background-color: var(--list__card--background-color);
    border-radius: 0.4em;
    box-shadow: 0 0 1em -0.25em var(--card--box-shadow);
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
    transition: background-color var(--transition-time), box-shadow var(--transition-time), transform var(--transition-time);

    &:hover {
        box-shadow: 0 0 1em -0.25em var(--card--hover--box-shadow);
        transform: scale(1.05);
    }

    &:focus-within {
        outline: 0.25rem auto highlight;
        outline: 0.25rem auto -webkit-focus-ring-color;
    }

    &__image {
        order: 1;
        object-fit: cover;

        @media only screen and (min-width: 1279px) {
            height: 14.5rem;
        }
    }

    &__heading {
        font-size: var(--font-size-16);
        font-weight: var(--font-weight-800);
        margin: 1.5rem 1.5rem 1rem;
        order: 2;
    }

    &__description-list {
        display: flow-root;
        margin: 0 1.5rem 3rem;
        order: 3;
    }

    &__description-term {
        clear: left;
        float: left;
        font-weight: var(--font-weight-600);
        margin-right: 1ch;

        &::after {
            content: ":"
        }
    }
}

/**
 * Country Card Details
 */
.details {
    display: grid;
    font-size: var(--font-size-16);
    grid-template-columns: minmax(auto, 35rem);
    grid-template-areas: "image"
                         "heading"
                         "info-1"
                         "info-2"
                         "border-countries";
    justify-content: center;
    margin: 5rem auto;

    &__image {
        grid-area: image;
        margin-bottom: 3rem;
        max-height: 30rem;
    }

    &__heading {
        font-size: var(--font-size-22);
        grid-area: heading;
        margin-block: 2.5rem 1.25rem;
    }

    &__info-1 {
        grid-area: info-1;
        margin-bottom: 2.5rem;
    }

    &__info-2 {
        grid-area: info-2;
        margin-bottom: 2rem;
    }

    &__border-countries {
        grid-area: border-countries;
    }

    &__description-list {
        line-height: 2;
    }

    &__description-term {
        clear: left;
        float: left;
        font-weight: var(--font-weight-600);
        margin-right: 1ch;

        &::after {
            content: ":"
        }
    }

    @media only screen and (min-width: 1279px) {
        & {
            column-gap: 5rem;
            grid-template-columns: 2fr repeat(2, 1fr);
            grid-template-areas: "image heading heading"
                                 "image info-1 info-2"
                                 "image border-countries border-countries";
            max-width: 110rem;
        }

        &__image {
            margin-bottom: 0;
        }

        &__heading {
            align-self: flex-end;
        }
    }
}

/**
 * Border Country Links
 */
.border-countries {
    align-content: center;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    &__heading {
        flex-basis: 100%;
        font-size: var(--font-size-20);
        font-weight: var(--font-weight-600);

        &::after {
            content: ":"
        }

        @media only screen and (min-width: 1279px) {
            & {
                flex-basis: auto;
            
        }}
    }

    &__link {
        background-color: var(--border-countries__link--background-color);
        border-radius: 0.2em;
        box-shadow: 0 0 0.33em 0.1em var(--border-countries__link--box-shadow);
        display: inline-block;
        font-size: var(--font-size-14);
        max-width: 15ch;
        overflow: hidden;
        padding: 0.25em 1em;
        text-align: center;
        text-overflow: ellipsis;
        transition: background-color var(--transition-time);
        white-space: nowrap;

        &:hover,
        &:focus {
            background-color: var(--border-countries__link--hover--background-color);
            outline: 0.25rem auto highlight;
            outline: 0.25rem auto -webkit-focus-ring-color;
        }
    }
}

/**
 * Loader Animations
 */
@keyframes loading {
    to {
        transform: rotate(1turn);
    }
}
</style>