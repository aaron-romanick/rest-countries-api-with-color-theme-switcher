<template>
    <nav class="navigation">
        <Search />
        <Filter />
    </nav>
</template>

<script>
import Filter from './Filter.vue'
import Search from './Search.vue'

export default {
    name: 'Navigation',
    components: {
        Filter,
        Search,
    },
}
</script>
