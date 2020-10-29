import axios from 'axios'
import { url } from '../../helper/env'
const state = () => {
  return {
    allData: {
      findtiket: [],
      is_loading: false
    },
    airLinesAll: [],
    getDepartureCity: [],
    getDestinationCity: []
  }
}
const getters = {
  getAllAirlines (state) {
    return state.airLinesAll
  },
  getDepartureCity (state) {
    return state.getDepartureCity
  },
  getDestinationCity (state) {
    return state.getDestinationCity
  },
  getAllTiket (state) {
    return state.allData
  },
  getFlightDetail (state) {
    return state.allData
  },
  getSearchTiket (state) {
    return state.allData
  }
}
const mutations = {
  SET_DATA (state, payload) {
    state.airLinesAll = payload
  },
  SET_DEPARTURE (state, payload) {
    state.getDepartureCity = payload
  },
  SET_DESTINATION (state, payload) {
    state.getDestinationCity = payload
  },
  SET_DATA_DETAIL (state, payload) {
    state.allData.findtiket = payload
  },
  SET_SEARCH_TIKET (state, payload) {
    state.allData.findtiket = payload
  }
}
const actions = {
  getAllAirlines (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get('http://localhost:3000/api/airlines/getall')
        .then((result) => {
          context.commit('SET_DATA', result.data)
          console.log(result.data)
        }).catch((err) => {
          console.log(err.message)
        })
    })
  },
  getDeparture (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(`${url}/api/departure_city/getAll`)
        .then((result) => {
          context.commit('SET_DEPARTURE', result.data.data)
        }).catch((err) => {
          reject(err.message)
        })
    })
  },
  getDestination (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(`${url}/api/destination_city/getAll`)
        .then((result) => {
          context.commit('SET_DESTINATION', result.data.data)
        }).catch((err) => {
          reject(err.message)
        })
    })
  },
  getDetailTicket (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(`${url}/api/airlines/detail/${payload}`)
        .then((result) => {
          context.commit('SET_DATA_DETAIL', result.data)
        }).catch((err) => {
          reject(err.message)
        })
    })
  },
  getFlightDetail (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(`${url}/api/airlines/detail/${payload}`)
        .then((result) => {
          context.commit('SET_DATA_DETAIL', result.data)
        }).catch((err) => {
          reject(err.message)
        })
    })
  },
  Search (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(`${url}/api/airlines/getall?from=${payload.from}&to=${payload.to}&trip=${payload.trip}&departure_day=${payload.day}&child=${payload.child}&adult=${payload.adult}&class_airlines=${payload.class_airlines}&transit=${payload.transit}&facilities=${payload.facilities}&departureFrom=${payload.deparFrom}&departureTo=${payload.deparTo}&arrivedFrom=${payload.arrFrom}&arrivedTo=${payload.arrTo}`)
        .then((result) => {
          context.commit('SET_DATA_DETAIL', result.data)
        }).catch((err) => {
          reject(err.message)
        })
    })
  },
  SearchTiket (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(`${url}/api/airlines/getall?from=${payload.from}&to=${payload.to}&trip=${payload.trip}&departure_day=${payload.day}&child=${payload.child}&adult=${payload.adult}&class_airlines=${payload.class_airlines}`)
        .then((result) => {
          context.commit('SET_SEARCH_TIKET', result.data)
          resolve(result.data.data)
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
