import fetch from 'isomorphic-fetch'
import * as types from '../../constants/ActionTypes'

export const submitShort = (content) => {
    alert(content)
    return {
        type: types.SUBMIT_SHORT
    }
}

export const receiveArticles = (articlesDataArr) => ({
    type: types.GET_ARTICLES,
    articlesDataArr: articlesDataArr
})

export const receiveArticleDetail = (articleData) => ({
    type: types.GET_ARTICLE_DETAIL,
    articleData: articleData
})

export const getArticles = () => (dispatch, getState) => {
    return fetch('http://127.0.0.1:8001/api/getArticles', {
                mode: 'cors',
                method: 'GET',
                cache: 'default'
            })
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    return 'error' + response.status
                }
            })
            .then(articlesDataArr => {
                dispatch(receiveArticles(articlesDataArr))
            })
            // .then(response => response.json())
            // .then(articlesDataArr => receiveArticles(articlesDataArr))
            // .then(action => dispatch(action))
}

export const getArticleDetail = (id) => (dispatch, getState) => {
    return fetch('http://127.0.0.1:8001/api/getArticleDetail?id=' + id, {
                mode: 'cors',
                method: 'GET',
                cache: 'default',

            })
            .then(response => {
                return response.json()
            })
            .then(articleData => {
                dispatch(receiveArticleDetail(articleData))
            })
}