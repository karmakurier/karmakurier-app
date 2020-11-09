import axios from 'axios'

const rootUrl = 'http://localhost:3001/'
const defaultHeaders = {
  Authorization: '',
}

/**
 * Function to be loaded at each call - makes sure the used token is up to date
 */
const loadHeaders = () => {
  defaultHeaders.Authorization = sessionStorage.getItem('token')
}

const ApiFunctions = {
  loginUser: async (email, password) => {
    loadHeaders()
    const loginObject = {
      email,
      password,
    }
    const response = await axios.post(`${rootUrl}login`, loginObject)
    return response
  },
}

export default ApiFunctions
