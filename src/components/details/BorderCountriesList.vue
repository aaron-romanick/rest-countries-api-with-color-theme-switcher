<template>
    <nav class="details__border-countries border-countries">
        <h3 class="border-countries__heading">Border Countries</h3>
        <slot></slot>
    </nav>
</template>

<script>

export default {
    name: 'BorderCountriesList',
}
</script>

<style lang="scss">
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
}
</style>
