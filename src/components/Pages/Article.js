import React from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'

import { gql, useQuery, ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import Loader from '../Layout/Loader'
import CONFIG from '../../Config'

import { useParams } from 'react-router-dom'


function Article () {

    const client = new ApolloClient({
        uri: CONFIG.FEAPI_URL,
        cache: new InMemoryCache()
    });

    function ArticleContent () {
        let pageParams = useParams();

        const GET_ARTICLE_DETAIL = gql`
            query Article($ArticleId: Uuid!) {
                article (uuid: $ArticleId) {
                    uuid
                    placement
                    name
                    text
                    seoH1
                    seoTitle
                    seoMetaDescription
                }
            }
        `;

        const { loading, error, data } = useQuery(GET_ARTICLE_DETAIL, {
            variables: { ArticleId: pageParams.articleId }
        });

        if (loading) return <Loader />;
        if (error) return <p>Error :( {error.message}</p>;

        console.log(data);

        return (
            <div>
                <h1>{data.article.name}</h1>
                <p>{data.article.text}</p>
            </div>
        )

    }

    return (
        <ApolloProvider client={client}>
            <Header />
                <div className="web__line">
                    <div className="web__container">
                        <ArticleContent />
                    </div>
                </div>
            <Footer />
        </ApolloProvider>
    )
}

export default Article;
