import CategoryTypes from './CategoryTypes'

export const categoryAction = payload => {
  return { type: CategoryTypes.CATEGORY_REQUEST, payload }
}
