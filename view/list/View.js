import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getListDataAction, getRefreshingAction } from './actionCreator'

import { Ui } from '../../common/list/'

const mapState = (state) => {
	return {
		list: state.list.list,
		refreshing: state.list.refreshing
	}
}

const mapDispatch = (dispatch, ownProps) => {
	return {
        // 初始化列表数据
		getListData() {
			const action = getListDataAction(ownProps.navigation, true)
			dispatch(action)
        },
        
        // FlatList onRefresh = handleListRefresh  =>  下拉刷新
		handleListRefresh() {
			let action = getRefreshingAction(true)
			dispatch(action)
			action = getListDataAction(ownProps.navigation, false)
			dispatch(action)
		}
	}
}

export default connect(mapState, mapDispatch)(Ui)
