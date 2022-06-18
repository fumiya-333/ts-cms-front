import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { httpGet, httpPost } from '@/libs/api-util'

export const state = () => ({
  users: [],
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  users: (state) => state.users,
}

export const mutations: MutationTree<RootState> = {
  SET_USERS: (state, users: []) => (state.users = users),
}

export const actions: ActionTree<RootState, RootState> = {
  async login({ commit }, { email, password }) {
    return await httpPost('/users/login', { email, password })
      .then(({ data }) => {
        console.log(data)
        commit('SET_USERS', { success: data.success, response: data.response })
        return true
      })
      .catch(() => {
        return false
      })
  },
  async createPre({ commit }, { name, email }) {
    return await httpPost('/users/createPre', { name, email })
      .then(({ data }) => {
        commit('SET_USERS', { success: data.success, response: data.response })
        return true
      })
      .catch(() => {
        return false
      })
  },
  async emailVerifyTokenFindUser({ commit }, { emailVerifyToken }) {
    return await httpGet(`/users/create/${emailVerifyToken}`, {})
      .then(({ data }) => {
        commit('SET_USERS', { success: data.success, response: data.response })
        return true
      })
      .catch(() => {
        return false
      })
  },
  async create({ commit }, { email, password }) {
    return await httpPost('/users/create', { email, password })
      .then(({ data }) => {
        commit('SET_USERS', { success: data.success, response: data.response })
        return true
      })
      .catch(() => {
        return false
      })
  },
}
