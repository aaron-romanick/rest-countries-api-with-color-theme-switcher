<template>
    <a
        class="link list__link"
        href="#"
        @click.prevent="setCountryToView(code)"
    >
        <article
            class="list__card card"
            :aria-labelledby="ariaLabelledBy"
        >
                <slot></slot>
        </article>
    </a>
</template>

<script>
import { useStore } from '@/store'

export default {
    name: 'ListCard',
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
