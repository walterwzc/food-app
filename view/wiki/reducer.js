import { SET_CATEGORIES } from './actionTypes'

const defaultState = {
    categories: []
}

export default (state = defaultState, action) => {
    if (action.type === SET_CATEGORIES) {
        const newState = {
            categories: [...action.data]
        }
        return newState
    }
    return state
}
