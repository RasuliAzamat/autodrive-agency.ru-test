<template>
    <button :type="type">
        <slot />
    </button>
</template>

<script setup>
const { type } = defineProps({
    type: {
        type: String,
        default: 'submit'
    }
})
</script>

<style lang="postcss" scoped>
button {
    @apply px-5 pt-3 pb-2 rounded-md transition-all hover:bg-opacity-90 font-medium text-white;
}
</style>
