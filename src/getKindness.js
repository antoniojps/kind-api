import { getSentiment } from './services/textAnalyticsAPI'
import { getInsult } from './services/insultAPI'

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

const computeIsKind = (sentiment, insult) => {
  if (sentiment < 0.5 && insult === '1') return false
  return true
}

/**
 * Returns if a message is kind or not from 0(negative) to 1(positive)
 * @param {String} message the message being sent
 * @returns {Object} kind
 */
const getKindness = async message => {
  try {
    const insultData = await getInsult(message)
    const insult = insultData.data.Results.kindness.value.Values[0][3]
    const sentimentData = await getSentiment(message)
    const sentiment = sentimentData.data.documents[0].score
    const isKind = computeIsKind(sentiment, insult)

    return {
      isKind,
      kindness: isKind ? 1 : 0,
      sentiment,
      insult,
      message: computeKindnessMessage(sentiment),
    }
  } catch (err) {
    console.log(err)
  }
}

export default getKindness
