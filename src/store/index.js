import Vue from 'vue'
import Vuex from 'vuex'
import findtiket from './findtiket/'
import users from './users/'
import axios from 'axios'
import swal from 'sweetalert2'
import auth from './auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token')
  },
  getters: {
    islogin (state) {
      if (state.token !== null) {
        return true
      } else {
        return false
      }
    }
  },
  mutations: {},
  actions: {
    login ({ commit }, result) {
      return new Promise((resolve, reject) => {
        axios
          .post('http://localhost:3000/api/users/login', result)
          .then(dt => {
            console.log(
              dt.data.status === 'not activated' && !dt.data.tokenLogin
            )
            if (dt.data.status === 'not activated') {
              swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'akun belum teraktifasi, silakan cek gmail',
                footer: '<a href>Why do I have this issue?</a>'
              })
            } else if (!dt.data.tokenLogin) {
              swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'User name atau password salah!',
                footer: '<a href>Why do I have this issue?</a>'
              })
            } else {
              console.log(dt)
              resolve(dt.data.message)
              localStorage.setItem('token', dt.data.tokenLogin)
            }
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  },
  modules: {
    findtiket,
    users,
    auth
  }
})
