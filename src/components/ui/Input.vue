<template>
    <input
        :id="id"
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        @input="$emit('update:modelValue', $event.target.value)"
    />
</template>

<script setup>
defineEmits(["update:modelValue"]);

const { id, modelValue, placeholder, type } = defineProps({
    id: String,
    modelValue: String,
    placeholder: String,
    type: {
        type: String,
        default: "text",
    },
});
</script>

<style lang="postcss" scoped>
input {
    @apply w-full py-2 px-4 outline-none bg-transparent transition-all border rounded-md border-slate-400 focus:border-slate-600;
}
</style>