import { SET_SWITCH_VALUE } from './actionTypes'

export const getSwitchValueChange = value => {
    return {
        type: SET_SWITCH_VALUE,
        value
    }
}
