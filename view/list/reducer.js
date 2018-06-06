import { CHANGE_REFRESHING, CHANGE_LIST } from './actionTypes'

const defaultState = {
	list: [],
	refreshing: false
}

export default (state = defaultState, action) => {
	if(action.type === CHANGE_LIST) {
		let newStaet = {}
		if (action.cover) {
			newState =  {
				list: [...action.list],
				refreshing: false
			}
		} else {
			newState =  {
				list: [...state.list, ...action.list],
				refreshing: false
			}
		}
		return newState
	} else if(action.type === CHANGE_REFRESHING) {
		const newState = {
			list: [...state.list],
			refreshing: action.value
		}
		return newState
	}
	return state
}