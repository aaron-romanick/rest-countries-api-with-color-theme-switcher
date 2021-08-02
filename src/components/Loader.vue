<template>
    <div class="loader"></div>
</template>

<script>
export default {
    name: 'Loader',
}
</script>

<style lang="scss">
.loader {
    align-items: center;
    display: flex;
    height: 50vh;
    justify-content: center;

    &:after {
        animation: loading 1s ease infinite;
        border: 0.8rem solid var(--loader--border-all--color);
        border-radius: 50%;
        border-top-color: var(--loader--border-top--color);
        content: "";
        height: 5rem;
        transition: border-color var(--transition-time);
        width: 5rem;
    }
}

@keyframes loading {
    to {
        transform: rotate(1turn);
    }
}
</style>