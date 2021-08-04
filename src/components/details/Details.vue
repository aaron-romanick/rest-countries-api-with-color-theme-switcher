<template>
    <section class="details">
        <slot></slot>
        <BorderCountriesList v-if="borders.length > 0">
            <BorderCountryLink
                v-for="(border, i) in borders"
                :key="i"
                :code="border.alpha3Code"
                :title="border.name"
            >
                {{ border.name }}
            </BorderCountryLink>
        </BorderCountriesList>
    </section>
</template>

<script>
import { useStore } from '@/store'
import BorderCountriesList from './BorderCountriesList.vue'
import BorderCountryLink from './BorderCountryLink.vue'

export default {
    name: 'Details',
    components: {
        BorderCountriesList,
        BorderCountryLink,
    },
    setup() {
        const {
            getBorderCountries
        } = useStore()
        const borders = getBorderCountries()
        return {
            borders,
        }
    },
}
</script>

<style lang="scss">
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
        margin-bottom: 1.25rem;
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
</style>
