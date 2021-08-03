<template>
    <article
        class="list__card card"
        :aria-labelledby="ariaLabelledBy"
    >
        <a
            class="link card__link"
            href="#"
            @click.prevent="setCountryToView(code)"
        >
            <slot></slot>
        </a>
    </article>
</template>

<script>
import { useStore } from '@/store'

export default {
    name: 'Card',
    props: {
        ariaLabelledBy: {
            type: String,
            required: true,
        },
        code: {
            type: String,
            required: true,
        },
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
.card {
    background-color: var(--list__card--background-color);
    border-radius: 0.4em;
    box-shadow: 0 0 1em -0.25em var(--card--box-shadow);
    flex-basis: 20rem;
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

    &__heading{
        font-size: var(--font-size-16);
        font-weight: var(--font-weight-800);
        margin: 1.5rem 1.5rem 1rem;
    }

    &__description-list {
        display: flow-root;
        margin: 0 1.5rem 3rem;
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
</style>
