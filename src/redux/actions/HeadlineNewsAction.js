import { headlineNewsTypes } from './HeadlineNewsTypes'

export const categoryAction = payload => {
  return { type: headlineNewsTypes.HEADLINE_NEWS_REQUEST, payload }
}
