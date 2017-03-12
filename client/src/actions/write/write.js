import fetch from 'isomorphic-fetch'
import * as types from '../../constants/ActionTypes'

export const saveArticle = (title, content) => {
    console.log(title)
    console.log(content)
    let article = 'title=' + title + '&content=' + content
    // let jsonData = JSON.stringify(article)
    fetch('http://localhost:8001/api/saveArticle', {
        mode: 'cors',
        method: 'POST',
        cache: 'default',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: article
    }).then((response) => {
        console.log(1)
        console.log(response)
    })
    return {
        type: types.SAVE_ARTICLE
    }
}