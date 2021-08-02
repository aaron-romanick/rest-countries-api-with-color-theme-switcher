<template>
    <a
        class="link border-countries__link"
        href="#"
        :title="title"
        @click.prevent="setCountryToView(code)"
    >
        <slot></slot>
    </a>
</template>

<script>
import { useStore } from '@/store'

export default {
    name: 'BorderCountryLink',
    props: {
        code: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        }
    },
    setup() {
        const { setCountryToView } = useStore()
        return {
            setCountryToView,
        }
    },
}
</script>

<style lang="scss">
.border-countries__link {
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
</style>
