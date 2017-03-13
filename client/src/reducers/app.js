import { combineReducers } from 'redux'
import hello from './hello'
import index from './index'
import common from './common'

//使用redux的combineReducers方法将所有reducer打包起来
const rootReducer = combineReducers({
    hello,
    index,
    common
})

export default rootReducer