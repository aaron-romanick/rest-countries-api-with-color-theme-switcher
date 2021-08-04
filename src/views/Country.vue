<template>
    <ButtonBack />
    <Details>
        <img
            :alt="`Flag of ${name}`"
            class="details__image image"
            :src="flag"
        >
        <h2 class="details__heading">{{ name }}</h2>
        <dl class="details__description-list details__info-1">
            <dt class="details__description-term">Native Name</dt>
            <dd class="details__description-details">{{ valueOrNA(nativeName) }}</dd>
            <dt class="details__description-term">Population</dt>
            <dd class="details__description-details">{{ formatNumber(population) }}</dd>
            <dt class="details__description-term">Region</dt>
            <dd class="details__description-details">{{ valueOrNA(region) }}</dd>
            <dt class="details__description-term">Sub Region</dt>
            <dd class="details__description-details">{{ valueOrNA(subregion) }}</dd>
            <dt class="details__description-term">Capital</dt>
            <dd class="details__description-details">{{ valueOrNA(capital) }}</dd>
        </dl>
        <dl class="details__description-list details__info-2">
            <dt class="details__description-term">Top Level Domains</dt>
            <dd class="details__description-details">{{ valueOrNA(domains) }}</dd>
            <dt class="details__description-term">Currencies</dt>
            <dd class="details__description-details">{{ valueOrNA(currencies) }}</dd>
            <dt class="details__description-term">Languages</dt>
            <dd class="details__description-details">{{ valueOrNA(languages) }}</dd>
        </dl>
    </Details>
</template>

<script>
import { computed } from 'vue'
import { useStore } from '@/store'
import ButtonBack from '@/components/buttons/ButtonBack.vue'
import Details from '@/components/details/Details.vue'

export default {
    name: 'Country',
    components: {
        ButtonBack,
        Details,
    },
    setup() {
        const {
            currentCountry,
            formatNumber,
            valueOrNA,
        } = useStore()

        const {
            capital,
            currencies: rawCurrencies,
            topLevelDomain: rawTopLevelDomains,
            flag,
            languages: rawLanguages,
            name,
            nativeName,
            population,
            region,
            subregion,
        } = currentCountry.value

        const currencies = computed(() => {
            return rawCurrencies.map(({ name, symbol }) => `${name} (${symbol})`)
                .sort()
                .join(', ')
        })

        const domains = computed(() => {
            return rawTopLevelDomains.map(domain => domain)
                .sort()
                .join(', ')
        })

        const languages = computed(() => {
            return rawLanguages.map(({ name }) => name)
                .sort()
                .join(', ')
        })

        return {
            capital,
            currencies,
            domains,
            flag,
            languages,
            name,
            nativeName,
            population,
            region,
            subregion,

            formatNumber,
            valueOrNA,
        }
    }
}
</script>
