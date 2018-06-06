import { CHANGE_REFRESHING, CHANGE_LIST } from './actionTypes'

export const getRefreshingAction = (status) => ({
	type: CHANGE_REFRESHING,
	value: status
})

export const getChangeListAction = (list, cover) => ({
	type: CHANGE_LIST,
	list: list,
	refreshing: false,
	cover: cover
})

export const getListDataAction = (cover) => {
	return (dispatch) => {
		let url = "https://www.easy-mock.com/mock/5ad41f22cdecd20f04088941/dataGetTest/foodapp/hotlist"
		fetch(url)
			.then(res => res.json())
			.then((res) => {
				if (res.ret && res.data) {
					const action = getChangeListAction(res.data.list, cover)
					dispatch(action)
				}
			})
	}
}
