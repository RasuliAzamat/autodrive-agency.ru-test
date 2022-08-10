<template>
    <select
        :id="id"
        :value="modelValue"
        @change="$emit('update:modelValue', $event.target.value)"
    >
        <option v-for="{ id, name } in options" :key="id" :value="id">
            {{ name }}
        </option>
    </select>
</template>

<script setup>
defineEmits(["update:modelValue"]);

const { id, options, modelValue } = defineProps({
    id: String,
    modelValue: String,
    options: {
        type: Array,
        required: true,
    },
});
</script>

<style lang="postcss" scoped>
select,
option {
    @apply w-full pt-3 pb-2 px-4 outline-none bg-transparent transition-all border rounded-md border-slate-400 focus:border-slate-600;
}
</style>