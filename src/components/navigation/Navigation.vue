<template>
    <nav class="navigation">
        <NavigationSearch />
        <NavigationFilter />
    </nav>
</template>

<script>
import NavigationFilter from './Filter.vue'
import NavigationSearch from './Search.vue'

export default {
    name: 'BaseNavigation',
    components: {
        NavigationFilter,
        NavigationSearch,
    },
}
</script>
