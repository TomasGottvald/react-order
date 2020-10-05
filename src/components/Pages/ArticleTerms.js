import React from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'

import { gql, useQuery, ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import Loader from '../Layout/Loader'
import CONFIG from '../../Config'

function Article () {

    const client = new ApolloClient({
        uri: CONFIG.FEAPI_URL,
        cache: new InMemoryCache()
    });

    function ArticleTermsContent () {

        const GET_ARTICLE_TERMS = gql`{
                termsAndConditionsArticle {
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

        const { loading, error, data } = useQuery(GET_ARTICLE_TERMS);

        if (loading) return <Loader />;
        if (error) return <p>Error :( {error.message}</p>;

        return (
            <div>
                <h1>{data.termsAndConditionsArticle.name}</h1>
                <p>{data.termsAndConditionsArticle.text}</p>
            </div>
        )

    }

    return (
        <ApolloProvider client={client}>
            <Header />
                <div className="web__line">
                    <div className="web__container">
                        <ArticleTermsContent />
                    </div>
                </div>
            <Footer />
        </ApolloProvider>
    )
}

export default Article;
