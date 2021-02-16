import { categoryNewsTypes } from './CategoryNewsTypes'

export const categoryAction = payload => {
  return { type: categoryNewsTypes.CATEGORY_NEWS_REQUEST, payload }
}
