<template>
    <button
        class="button button--back"
        @click="changeToHomeView"
    >
        <span class="button__icon" aria-hidden="true"></span>
        <span class="button__copy">Back</span>
    </button>
</template>

<script>
import { useStore } from '@/store'
import Home from '@/views/Home.vue'

export default {
    name: 'ButtonBack',
    setup() {
        const { changeCurrentView } = useStore()

        const changeToHomeView = () => {
            changeCurrentView(Home)
        }

        return {
            changeToHomeView,
        }
    },
}
</script>