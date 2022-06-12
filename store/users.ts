import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { httpPost } from '@/libs/api-util'

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
    return await httpPost('/', { email, password })
      .then(({ data }) => {
        commit('SET_USERS', { success: data.success, response: data.response })
      })
      .catch((e) => {
        commit('SET_USERS', { e })
      })
  },
}
