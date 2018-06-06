import { changeSelectedType } from './actionTypes'

const defaultState = {
	selectedTab: 'wiki'
}

// 每次 selectTab 切换的时候， 让新的值替换在旧的值上面。
export default (state = defaultState, action) => {
	if (action.type === changeSelectedType) {
		return Object.assign({}, state, {
			selectedTab: action.value
		})
	}
	return state
}