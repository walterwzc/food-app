import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getListDataAction, getRefreshingAction } from './actionCreator'

// hotlist 和 list 使用 公共组件
import { Ui } from '../../common/list/'

const mapState = (state) => {
	return {
		list: state.hotlist.list,
		refreshing: state.hotlist.refreshing
	}
}

const mapDispatch = (dispatch, ownProps) => {
	return {
		getListData() {
			const action = getListDataAction(true)
			dispatch(action)
		},
		handleListRefresh() {
            // 设置列表是否能够刷新
			let action = getRefreshingAction(true)
            dispatch(action)
            
            // 设置刷新之后的列表数据，是否在原来的基础上叠加
			action = getListDataAction(false)
			dispatch(action)
		}
	}
}

export default connect(mapState, mapDispatch)(Ui)
