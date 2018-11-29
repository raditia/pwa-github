// import axios from 'axios'
import config from './config'

export default {
  getUser (username, callback, fail) {
    let userId = encodeURI(username)
    config().get('users/' + userId)
      .then(callback)
      .catch(fail)
  }
}
