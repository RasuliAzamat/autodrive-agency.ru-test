<template>
    <main class="max-w-7xl p-2 md:px-4 mx-auto">
        <div>
            <UiButton class="w-full mb-2 sm:w-auto sm:mr-5 sm:mb-0 bg-primary">
                Заказать в Москву
            </UiButton>
            <UiButton class="w-full sm:w-auto bg-secondary">
                Заказать в Санкт-Петербург
            </UiButton>
        </div>
        <teleport to="body">
            <UiModal :isVisible="modalVisible">
                <AppForm />
            </UiModal>
        </teleport>
    </main>
</template>

<script setup>
import { ref } from 'vue'
import UiButton from "@/components/ui/Button.vue";
import UiModal from "@/components/ui/Modal.vue";
import AppForm from "@/components/AppForm.vue";

const modalVisible = ref(false);
</script>

<style lang="postcss" scoped></style>;
