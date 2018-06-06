import { combineReducers } from 'redux'
import { reducer as wiki } from '../view/wiki/'
import { reducer as list } from '../view/list/'
import { reducer as hotlist } from '../view/hotlist/'
import { reducer as home } from '../view/home/'
import { reducer as setting } from '../view/setting/'

const reducer = combineReducers({
    wiki,
    list,
    home,
    hotlist,
    setting
})

export default reducer
