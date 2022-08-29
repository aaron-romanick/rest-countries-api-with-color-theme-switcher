<template>
    <ButtonBack />
    <BaseDetails>
        <picture class="card__image">
            <source
                :srcset="flags.svg"
                type="image/svg+xml"
            >
            <img
                :alt="`Flag of ${commonName}`"
                class="image"
                :src="flags.png"
            >
        </picture>
        <h2 class="details__heading">{{ commonName }}</h2>
        <dl class="details__description-list details__info-1">
            <dt class="details__description-term">Native Name</dt>
            <dd class="details__description-details">{{ valueOrNA(nativeNames) }}</dd>
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
    </BaseDetails>
</template>

<script>
import { computed } from 'vue'
import { useStore } from '@/store'
import ButtonBack from '@/components/buttons/ButtonBack.vue'
import BaseDetails from '@/components/details/Details.vue'

export default {
    name: 'ViewCountry',
    components: {
        ButtonBack,
        BaseDetails,
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
            tld: rawTopLevelDomains,
            flags,
            languages: rawLanguages,
            name: rawNames,
            population,
            region,
            subregion,
        } = currentCountry.value

        const currencies = computed(() => {
            return Object.values(rawCurrencies)
                .map(currency => `${currency.name} (${currency.symbol})`)
                    .sort()
                    .join(', ')
        })

        const domains = computed(() => {
            return rawTopLevelDomains.map(domain => domain)
                .sort()
                .join(', ')
        })

        const languages = computed(() => {
            return Object.values(rawLanguages)
                .sort()
                .join(', ')
        })

        const commonName = computed(() => {
            return rawNames.common
        })

        const nativeNames = computed(() => {
            return Object.values(rawNames.nativeName)
                .map(nativeName => nativeName.common)
                    .sort()
                    .join(', ')
        })

        return {
            capital,
            currencies,
            domains,
            flags,
            languages,
            commonName,
            nativeNames,
            population,
            region,
            subregion,

            formatNumber,
            valueOrNA,
        }
    }
}
</script>
