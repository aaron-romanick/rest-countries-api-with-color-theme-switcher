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
