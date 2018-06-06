import { SET_SWITCH_VALUE } from './actionTypes'

const defaultState = {
    isSwitched: false
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case SET_SWITCH_VALUE:
            return Object.assign({}, state, { isSwitched: action.value })
        default:
            return state
    }
}
