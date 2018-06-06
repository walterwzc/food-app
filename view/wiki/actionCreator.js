import { SET_CATEGORIES } from './actionTypes'

export const getSetCategoriesAction = data => {
    return {
        type: SET_CATEGORIES,
        data: data
    }
}

export const getWikiInfo = () => {
    return dispatch => {
        fetch('https://www.easy-mock.com/mock/5ad41f22cdecd20f04088941/dataGetTest/foodapp/index')
            .then(res => res.json())
            .then(res => {
                if (res.ret && res.data) {
                    const action = getSetCategoriesAction(res.data.categories)
                    dispatch(action)
                }
            })
            .catch(() => {
                alert('请求异常')
            })
    }
}
