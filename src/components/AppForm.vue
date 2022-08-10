<template>
    <form @submit.prevent="formSubmit">
        <h1 class="mb-5 font-medium">Заказать звонок</h1>

        <div class="form-container">
            <div class="field-1">
                <label for="name">Имя*</label>
                <UiInput id="name" placeholder="Иван Иванов" required />
            </div>

            <div class="field-2">
                <label for="tel">Телефон*</label>
                <UiInput
                    type="tel"
                    id="tel"
                    placeholder="+7 (___) ___-__-__"
                    required
                />
            </div>

            <div class="field-3">
                <label for="email">Email*</label>
                <UiInput
                    type="email"
                    id="email"
                    placeholder="you@example.com"
                    required
                />
            </div>

            <div class="field-4">
                <label for="city">Город*</label>
                <UiSelect id="city" defaultText="Москва" :options="options" />
            </div>

            <div class="button">
                <UiButton class="w-full lg:w-auto px-10 bg-success">
                    Отправить
                </UiButton>
            </div>
        </div>
    </form>
</template>

<script setup>
import { ref } from 'vue'

import UiButton from "@/components/ui/Button.vue";
import UiInput from "@/components/ui/Input.vue";
import UiSelect from "@/components/ui/Select.vue";

const options = ref([
    {
        id: 1,
        name: "Москва",
    },
    {
        id: 2,
        name: "Санкт-Петербург",
    },
    {
        id: 3,
        name: "Казань",
    },
]);
</script>

<style lang="postcss" scoped>
label {
    @apply block;
}

.form-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, max-content);
    gap: 20px 0px;
    grid-template-areas:
        "field-2"
        "field-1"
        "field-3"
        "field-4"
        "button";
}

.field-1 {
    grid-area: field-1;
}

.field-2 {
    grid-area: field-2;
}

.field-3 {
    grid-area: field-3;
}

.field-4 {
    grid-area: field-4;
}

.button {
    grid-area: button;
    @apply flex items-center md:items-end justify-center lg:justify-end;
}

@media (min-width: 768px) {
    .form-container {
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: max-content max-content;
        gap: 25px 20px;
        grid-template-areas:
            "field-2 field-1 field-3"
            "field-4 field-4 button";
    }
}

@media (min-width: 1024px) {
    .form-container {
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: max-content;
        grid-template-areas:
            "field-1 field-2 field-3 field-4"
            "button button button button";
    }
}
</style>
