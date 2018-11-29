import axios from 'axios'
import config from './config'

export default {
  getUser (username, callback, fail) {
    let userId = encodeURI(username)
    axios.get(config.api.users + userId)
      .then(callback)
      .catch(fail)
  }
}
