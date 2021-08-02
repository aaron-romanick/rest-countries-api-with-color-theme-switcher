<template>
    <section
        aria-label="Country List"
        class="list"
        role="region"
    >
        <Card
            v-for="(country, i) in countries"
            :key="i"
            :code="country.alpha3Code"
        >
            <img
                alt="Columbian Flag"
                class="card__image image"
                :src="country.flag"
            >
            <section>
                <h2 class="card__heading">{{ country.name }}</h2>
                <dl class="card__description-list">
                    <dt class="card__description-term">Population</dt>
                    <dd class="card__description-details">{{ formatNumber(country.population) }}</dd>
                    <dt class="card__description-term">Region</dt>
                    <dd class="card__description-details">{{ country.region }}</dd>
                    <dt class="card__description-term">Capital</dt>
                    <dd class="card__description-details">{{ country.capital }}</dd>
                </dl>
            </section>
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
    name: 'List',
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
        
        const limitedCountries = computed(() => {
            return filteredByRegion.value
                .filter(({ alpha3Code: byRegionCode }) => {
                    return filteredBySearch.value
                        .find(({ alpha3Code: bySearchCode }) => {
                            return bySearchCode === byRegionCode
                        })
                })
                .slice(0, limit.value - 1)
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
            sentinel,
            formatNumber,
        }
    },
}
</script>

<style lang="scss">
.list {
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    justify-content: center;
    margin-bottom: 4.5rem;

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
</style>
