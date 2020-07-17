import React from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import ArticleDetail from '../article/articleDetail'
import axios from 'axios'
import CONFIG from '../../config'

import { useParams } from 'react-router-dom'

import { loadArticle } from '../../actions'

import { useSelector, useDispatch } from 'react-redux'

function Article () {
    let pageParams = useParams();

    const dispatch = useDispatch()
    const loadedArticles = useSelector( state => state.loadArticles.articles )

    if( loadedArticles.length === 0 ){
        axios.get(CONFIG.API_URL+"/articles/"+pageParams.articleId+"/")
        .then(res => {
            dispatch(loadArticle(res.data.articles.items))
        })
    }

    const articleContent = loadedArticles.map( function(item){
        if(item.id === pageParams.articleId){
            return (
                <ArticleDetail key={item.id} data={item} />
            )
        }
    })

    return (
        <div>
            <Header />
                <div className="web__line">
                    <div className="web__container">
                        {articleContent}
                    </div>
                </div>
            <Footer />
        </div>
    )
}

export default Article;
