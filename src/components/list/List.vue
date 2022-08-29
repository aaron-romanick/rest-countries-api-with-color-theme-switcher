<template>
    <section
        aria-label="Country List"
        class="list"
    >
        <p
            v-if="isCountriesEmpty"
            class="list__empty"
        >
            There are no countries that match these criteria.
        </p>
        <Card
            v-for="(country, i) in countries"
            :key="i"
            :code="country.cca3"
            :ariaLabelledBy="`country-card-${i}`"
        >
            <h2
                class="card__heading"
                :id="`country-card-${i}`"
            >
                {{ country.name.common }}
            </h2>
            <picture class="card__image">
                <source
                    :srcset="country.flags.svg"
                    type="image/svg+xml"
                >
                <img
                    :alt="`Flag of ${country.name.common}`"
                    class="image"
                    :src="country.flags.png"
                >
            </picture>
            <dl class="card__description-list">
                <dt class="card__description-term">Population</dt>
                <dd class="card__description-details">{{ formatNumber(country.population) }}</dd>
                <dt class="card__description-term">Region</dt>
                <dd class="card__description-details">{{ valueOrNA(country.region) }}</dd>
                <dt class="card__description-term">Capital</dt>
                <dd class="card__description-details">{{ valueOrNA(country.capital) }}</dd>
            </dl>
        </Card>
        <div
            ref="sentinel"
            class="list__sentinel"
            aria-hidden="true"
        ></div>
    </section>
</template>

<script>
import { computed, onMounted, onUnmounted, ref, toRefs, watch } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import { useStore } from '@/store'
import Card from './Card.vue'

export default {
    name: 'BaseList',
    components: {
        Card,
    },
    setup() {
        const {
            state,
            filteredByRegion,
            filteredBySearch,
            formatNumber,
            increaseListLimit,
            requestAllCountries,
            resetListLimit,
            setCurrentRegion,
            setCurrentSearch,
            valueOrNA,
        } = useStore()
        const {
            currentRegion,
            currentSearch,
            countries,
            listLimit: limit,
        } = toRefs(state)
        
        if(countries.value.length === 0) {
            requestAllCountries()
        }
        setCurrentRegion(null)
        setCurrentSearch('')
        
        const limitedCountries = computed(() => {
            return filteredByRegion.value
                .filter(({ cca3: byRegionCode }) => {
                    return filteredBySearch.value
                        .find(({ cca3: bySearchCode }) => {
                            return bySearchCode === byRegionCode
                        })
                })
                .slice(0, limit.value - 1)
        })

        const isCountriesEmpty = computed(() => {
            return limitedCountries.value.length === 0
        })

        watch([currentRegion, currentSearch], () => {
            resetListLimit(limit.value)
        })

        const sentinel = ref(null)
        onMounted(() => {
            const limitStep = 10
            const rootMargin = '250px'
            useIntersectionObserver(
                sentinel,
                ([{ isIntersecting }]) => {
                    if(isIntersecting) increaseListLimit(limitStep)
                },
                {
                    rootMargin: rootMargin,
                }
            )

        })

        onUnmounted(() => {
            resetListLimit()
        })

        return {
            countries: limitedCountries,
            isCountriesEmpty,
            sentinel,
            formatNumber,
            valueOrNA,
        }
    },
}
</script>
