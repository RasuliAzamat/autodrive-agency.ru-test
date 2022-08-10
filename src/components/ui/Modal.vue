<template>
    <div 
        v-if="isVisible" 
        @click.self="$emit('hideModal')"
        class="fixed top-0 left-0 bottom-0 right-0 bg-black/50 flex items-center justify-center">
        <div class="w-full md:w-max mx-2 md:mx-20 xl:mx-0 p-5 rounded-xl shadow-xl bg-white">
            <slot />
        </div>
    </div>
</template>

<script setup>
const { isVisible } = defineProps({
    isVisible: {
        type: Boolean,
        default: false,
    },
})
</script>

<style lang="postcss" scoped>
</style>
