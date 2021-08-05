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
