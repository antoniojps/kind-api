import axios from 'axios'
import { TEXT_ANALYTICS_API } from './../utils/constants'

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
const textAnalyticsAPI = axios.create({
  baseURL: TEXT_ANALYTICS_API,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Ocp-Apim-Subscription-Key': process.env.TEXT_ANALYTICS_API_KEY,
  },
})

textAnalyticsAPI.interceptors.response.use(r => r, handleAxiosError)

/**
 * Returns a numeric score between 0 and 1. Scores close to 1 indicate positive sentiment, while scores close to 0 indicate negative sentiment.
 * @param {String} text the message being sent
 * @returns {Object} kind
 */
export const getSentiment = async text => {
  const body = {
    documents: [
      {
        language: 'en',
        id: '1',
        text,
      },
    ],
  }
  return textAnalyticsAPI.post('/sentiment', body)
}
