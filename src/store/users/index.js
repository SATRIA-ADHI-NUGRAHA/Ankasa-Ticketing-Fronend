import axios from 'axios'
const state = () => {
  return {
    allData: {
      users: []
    }
  }
}
const getters = {
  getAllusers (state) {
    return state.allData
  },
  getDetailUsers (state) {
    return state.allData
  }
}
const mutations = {
  SET_DATA_USERS (state, payload) {
    state.allData.users = payload
  },
  SET_DETAIL_USERS (state, payload) {
    state.allData.users = payload
  }
}
const actions = {
  getAllUsers (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get('http://localhost:3000/api/users/getall')
        .then((result) => {
          context.commit('SET_DATA_USERS', result.data)
          console.log(result.data)
        }).catch((err) => {
          console.log(err.message)
        })
    })
  },
  getDetailUsers (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(`http://localhost:3000/api/users/getDetail/${payload}`)
        .then((result) => {
          context.commit('SET_DETAIL_USERS', result.data)
          console.log(result.data)
        }).catch((err) => {
          console.log(err.message)
        })
    })
  }
}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
