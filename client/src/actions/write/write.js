import fetch from 'isomorphic-fetch'
import * as types from '../../constants/ActionTypes'

export const saveArticle = (title, content, contentText) => (dispatch, getState) => {
    let article = 'title=' + title + '&content=' + content + '&contentText=' + contentText
    // let jsonData = JSON.stringify(article)
    fetch('http://localhost:8001/api/saveArticle', {
        mode: 'cors',
        method: 'POST',
        cache: 'default',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: article
    })
    .then((response) => {
        if (response.ok) {
            dispatch(notice('info', '文章创建成功~'))
        }
    })
}

export const notice = (notificationType, noticeContent) => ({
    type: types.NOTICE,
    notificationType,
    noticeContent
})