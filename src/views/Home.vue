<template>
    <Navigation />
    <List />
</template>

<script>
import List from '@/components/list/List.vue'
import Navigation from '@/components/navigation/Navigation.vue'

export default {
    name: 'Home',
    components: {
        List,
        Navigation,
    },
}
</script>
