import axios from 'axios'
import { createStore } from 'vuex'
import { httpService } from '../services/httpService'

export const store = createStore({
    state() {
        return {
            city_id: '',
        }
    },
    mutations: {
        clearCity(state) {
            state.city_id = ''
        },
        updateCity(state, cityId) {
            state.city_id = cityId
        },
    },
    actions: {
        async sendData({ commit }, callData) {
            try {
                await httpService.postData(callData)
                commit('clearCity')
            } catch (error) {
                throw error
            }
        },
    },
    getters: {
        getCity(state) {
            return state.city_id
        },
    },
})
