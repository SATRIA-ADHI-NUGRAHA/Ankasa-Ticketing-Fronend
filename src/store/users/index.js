import axios from 'axios'
import { url } from '../../helper/env'
const id = localStorage.getItem('id')
const state = () => {
  return {
    allData: {
      users: []
    },
    detail: {}
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
  },
  set_detail_user (state, payload) {
    state.detail = payload
  }
}
const actions = {
  getAllUsers (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(`${url}/api/users/getall/${id}`)
        .then((result) => {
          context.commit('SET_DATA_USERS', result.data)
        }).catch((err) => {
          console.log(err.message)
        })
    })
  },
  getDetail ({ commit }, result) {
    return new Promise((resolve, reject) => {
      axios.get(`${url}/api/users/getDetail/${id}`).then(dt => {
        commit('set_detail_user', dt.data.data[0])
      })
    })
  },
  updateuser ({ commit }, result) {
    return new Promise((resolve, reject) => {
      axios.put(`${url}/api/users/update/${id}`, result).then(dt => {
        resolve(dt.data.message)
      }).catch(err => {
        console.log(err.message)
      })
    })
  },
  getDetailUsers (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(`${url}/api/users/getDetail/${payload}`)
        .then((result) => {
          context.commit('SET_DETAIL_USERS', result.data)
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
