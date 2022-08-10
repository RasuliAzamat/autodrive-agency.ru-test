<template>
    <main class="max-w-7xl p-2 md:px-4 mx-auto">
        <div>
            <UiButton @click="(modalVisible = true), store.commit('updateCity', '1')"
                class="w-full mb-2 sm:w-auto sm:mr-5 sm:mb-0 bg-primary">
                Заказать в Москву
            </UiButton>
            <UiButton @click="(modalVisible = true), store.commit('updateCity', '2')"
                class="w-full sm:w-auto bg-secondary">
                Заказать в Санкт-Петербург
            </UiButton>
        </div>
        <teleport to="body">
            <UiModal :isVisible="modalVisible" @hideModal="modalVisible = false">
                <div v-if="formSended" class="text-center">
                    <h3 v-if="sendSuccessfully">Успешно отправлено</h3>
                    <h3 v-else>Что-то пошло не так, повторите попытку позже</h3>

                    <a href="/" class="font-medium underline text-primary"
                        @click.prevent="modalVisible = formSended = false">
                        Вернуться на главную
                    </a>
                </div>
                <AppForm v-else @formSended="formSended = true" @sendedStatus="sendSuccessfully = false" />
            </UiModal>
        </teleport>
    </main>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

import UiButton from "@/components/ui/Button.vue";
import UiModal from "@/components/ui/Modal.vue";
import AppForm from "@/components/AppForm.vue";

const store = useStore();

const modalVisible = ref(false)
const formSended = ref(false)
const sendSuccessfully = ref(true)
</script>

<style lang="postcss" scoped>
</style>;
