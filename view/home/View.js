import { connect } from 'react-redux'
import Home from './Ui'
import { selectedTabAction } from './actionCreator'
import { getSwitchValueChange } from '../setting/actionCreator'

const mapState = state => ({
    selectedTab: state.home.selectedTab,
    isShowNear: state.setting.isSwitched
})

const mapDispatch = dispatch => ({
    changeSelectedTab(type) {
        const action = selectedTabAction(type)
        dispatch(action)
    },

    initSwitchValue(result) {
        const action = getSwitchValueChange(result)
        dispatch(action)
    }
})

export default connect(mapState, mapDispatch)(Home)

