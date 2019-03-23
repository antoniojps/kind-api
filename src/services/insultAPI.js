import axios from 'axios'
import { INSULT_API } from './../utils/constants'

const handleAxiosError = function (err) {
  if (err.response) {
    const customError = new Error(
      err.response.statusText || 'Internal server error'
    )
    customError.status = err.response.status || 500
    customError.description = err.response.data
      ? err.response.data.message
      : null
    throw customError
  }
  throw new Error(err)
}

// config
const insultAPI = axios.create({
  baseURL: INSULT_API,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${process.env.INSULT_API_KEY}`,
  },
})

insultAPI.interceptors.response.use(r => r, handleAxiosError)

/**
 * Returns insult
 * @param {String} message the message being sent
 * @returns {Object} kind
 */
export const getInsult = async message => {
  const body = {
    Inputs: {
      WebInput: {
        ColumnNames: ['chat'],
        Values: [[message]],
      },
    },
    GlobalParameters: {},
  }
  return insultAPI.post('/execute?api-version=2.0&details=true', body)
}
