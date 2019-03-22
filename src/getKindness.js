import { getSentiment } from './services/textAnalyticsAPI'

const scale = {
  insult: {
    text: 'insult',
    max: 0.25,
  },
  toxic: {
    text: 'toxic',
    max: 0.5,
  },
  passive: {
    text: 'passive',
    max: 0.7,
  },
}

const computeKindnessMessage = sentiment => {
  const { insult, toxic, passive } = scale
  if (sentiment >= 0 && sentiment <= insult.max) return insult.text
  if (sentiment > insult.max && sentiment <= toxic.max) return toxic.text
  if (sentiment > toxic.max && sentiment <= passive.max) return passive.text
  return 'kind'
}

/**
 * Returns if a message is kind or not from 0(negative) to 1(positive)
 * @param {String} text the message being sent
 * @returns {Object} kind
 */
const getKindness = async message => {
  try {
    const sentimentObj = await getSentiment(message)
    const sentiment = sentimentObj.data.documents[0].score
    return {
      sentiment,
      message: computeKindnessMessage(sentiment),
    }
  } catch (err) {
    console.log(err)
  }
}

export default getKindness
