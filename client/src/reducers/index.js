import * as types from '../constants/ActionTypes'
import { combineReducers } from 'redux'

const indexState = {
    indexIsActive: true,
    articlesDataArr: [],
    articlesArr: [],
    articleDetail: {}
}

const index = (state = indexState, action) => {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
        case types.IGNORE_LOGIN:
            return {
                ...state,
                indexIsActive: true
            }
        case types.GET_ARTICLES:
            return {
                ...state,
                articlesDataArr: action.articlesDataArr
            }
        case types.GET_ARTICLE_DETAIL:
            return {
                ...state,
                articleDetail: action.articleData[0]
            }
        default:
            return state
    }
}

export default combineReducers({
    index
})