import axios from 'axios'
import { url } from '../../helper/env'
const state = () => {
  return {
    booking: {
      getAllData: [],
      getDetail: []
    }
  }
}

const getters = {
  getAllBooking: state => state.booking.getAllData,
  getDetailBooking: state => state.booking.getDetail
}

const mutations = {
  SET_ALL_BOOKING (state, payload) {
    state.booking.getAllData = payload
  },
  SET_DETAIL_BOOKING (state, payload) {
    state.booking.getDetail = payload
  }
}

const actions = {
  insertBooking (context, payload) {
    return new Promise((resolve, reject) => {
      axios.post(`${url}/api/booking/insert`, payload)
        .then((result) => {
          resolve(result.data.message)
        }).catch((err) => {
          reject(err.message)
        })
    })
  },
  AllBooking (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(`${url}/api/booking/getAll/${payload}`)
        .then((result) => {
          context.commit('SET_ALL_BOOKING', result.data)
          resolve()
        }).catch((err) => {
          reject(err.message)
        })
    })
  },
  detailBooking (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(`${url}/api/booking/getDetail/${payload}`)
        .then((result) => {
          context.commit('SET_DETAIL_BOOKING', result.data.data)
          resolve()
        }).catch((err) => {
          reject(err.message)
        })
    })
  },
  updateBooking (context, payload) {
    return new Promise((resolve, reject) => {
      axios.put(`${url}/api/booking/payment/${payload.id}`, payload.formData)
        .then((result) => {
          resolve(result.data)
        }).catch((err) => {
          reject(err.message)
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
