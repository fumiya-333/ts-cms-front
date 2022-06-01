import { httpPost } from '@/libs/api-util'

export const state = () => ({
  users: []
})

export const mutations = {
  setUsers (state: any, { users }: any) {
    state.users = users
  }
}

export const actions = {
  async login({ commit } : any) {
    const response = await httpPost("https://zipcloud.ibsnet.co.jp/api/search?zipcode=7830060", [])
    commit('setUsers', { users: response.data })
  }
}

export const getters = {
  users: (state: any) => state.users
}
