import React from 'react'
import ProductItem from '../Product/ProductItem'
import { gql, useQuery, ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import Loader from '../Layout/Loader'
import CONFIG from '../../Config'

function HomepageProductList () {
    const client = new ApolloClient({
      uri: CONFIG.FEAPI_URL,
      cache: new InMemoryCache()
    });

    function HomePageProductLisContent() {
        const GET_HOMEPAGE_PRODUCTS = gql`{
            products (first: 3) {
                edges {
                    node {
                        uuid
                        name
                        shortDescription
                        link
                        unit {
                            name
                        }
                        availability {
                            name
                        }
                        stockQuantity
                        categories {
                            name
                        }
                        flags {
                            name
                            rgbColor
                        }
                        price {
                            priceWithVat
                            priceWithoutVat
                            vatAmount
                        }
                        images {
                            type
                            position
                            size
                            url
                            width
                            height
                        }
                    }
                }
            }
        }
        `;

        const { loading, error, data } = useQuery(GET_HOMEPAGE_PRODUCTS);

        if (loading) return <Loader />;
        if (error) return <p>Error :( {error.message}</p>;

        console.log(data);

        return data.products.edges.map( function (item){
            return <ProductItem key={item.node.uuid} data={item} />
        });
    }

    return (
        <div className="web__line">
            <div className="web__container">
                <ApolloProvider client={client}>
                    <ul className="list-products js-list js-product-list ">
                        <HomePageProductLisContent />
                    </ul>
                </ApolloProvider>
            </div>
        </div>
    )
}

export default HomepageProductList;
