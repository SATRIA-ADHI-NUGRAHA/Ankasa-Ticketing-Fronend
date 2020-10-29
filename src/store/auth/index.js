import axios from 'axios'
import { url } from '../../helper/env'
const actions = {
  register (context, payload) {
    return new Promise((resolve, reject) => {
      axios.post(`${url}/api/users/register`, payload).then((response) => {
        resolve(response.data.message)
      }).catch((err) => {
        reject(err)
      })
    })
  }
}

export default {
  namespaced: true,
  actions
}
