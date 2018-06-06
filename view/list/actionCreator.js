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

export const getListDataAction = (navigation, cover) => {
	return (dispatch) => {
		let url = "https://www.easy-mock.com/mock/5ad41f22cdecd20f04088941/dataGetTest/foodapp/hotlist"
		if (navigation) {
			let id = navigation.state.params.id
			url = "https://www.easy-mock.com/mock/5ad41f22cdecd20f04088941/dataGetTest/foodapp/categorylist?id=" + id
		}
		// 如果id = 0 ，显示热门食品列表
		// 如果id ！=0， 显示对应食品类型id的列表内容
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
