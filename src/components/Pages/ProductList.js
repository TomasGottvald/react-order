import React from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import ProductFilter from '../Product/ProductFilter'
import ProductItem from '../Product/ProductItem'
import { Link } from 'react-router-dom'
import { gql, useQuery, ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import Loader from '../Layout/Loader'
import CONFIG from '../../Config'

import { useParams } from 'react-router-dom'

function ProductList() {
    let pageParams = useParams();

    const client = new ApolloClient({
        uri: CONFIG.FEAPI_URL,
        cache: new InMemoryCache()
    });

    function ProductListContent (){
        const GET_PRODUCT_LIST = gql`
            query ProductList($ProductPerPage: Int, $after: String, $categoryId: Uuid!) {
                category (uuid: $categoryId) {
            		products (first: $ProductPerPage, after: $after) {
            			edges {
            				node {
            					uuid,
            					name,
            					shortDescription,
            					price {
            						priceWithVat,
            						priceWithoutVat,
            						vatAmount
            					},
            					images {
            						type,
            						position,
            						size,
            						url,
            						width,
            						height
            					},
            					availability {
            						name
            					}
            				}
            			},
            			pageInfo {
            				hasNextPage,
            				startCursor,
            				endCursor
            			}
            		}
            	}
            }
        `;

        const { loading, error, data } = useQuery(GET_PRODUCT_LIST, {
            variables: { ProductPerPage: CONFIG.PRODUCT_PER_PAGE, after: "startCursor", categoryId: pageParams.categoryId }
        });

        if (loading) return <Loader />;
        if (error) return <p>Error :( {error.message}</p>;

        console.log(data);
        return data.category.products.edges.map( function (item){
            return <ProductItem key={item.node.uuid} data={item} />
        });
    }

    return (
        <ApolloProvider client={client}>
            <Header />
                <div className="web__line">
                    <div className="web__container">
                        <div class="box-list js-product-list-with-filter">
                            <ProductFilter />
                            <div class="box-list__content">
                                <div class="js-product-list-ajax-filter-products-with-controls">
                                    <div>
                                        <div class="box-order-type">
                                            <Link href="#" class="box-order-type__item js-product-list-ordering-mode active" data-cookie-name="productListOrderingMode" data-ordering-mode="priority">
                                            TOP
                                            </Link>
                                            <Link href="#" class="box-order-type__item js-product-list-ordering-mode " data-cookie-name="productListOrderingMode" data-ordering-mode="name_asc">
                                            alphabetically A -&gt; Z
                                            </Link>
                                            <Link href="#" class="box-order-type__item js-product-list-ordering-mode " data-cookie-name="productListOrderingMode" data-ordering-mode="name_desc">
                                            alphabetically Z -&gt; A
                                            </Link>
                                            <Link href="#" class="box-order-type__item js-product-list-ordering-mode " data-cookie-name="productListOrderingMode" data-ordering-mode="price_asc">
                                            from the cheapest
                                            </Link>
                                            <Link href="#" class="box-order-type__item js-product-list-ordering-mode " data-cookie-name="productListOrderingMode" data-ordering-mode="price_desc">
                                            from most expensive
                                            </Link>
                                        </div>
                                    </div>
                                    <div class="js-product-list-with-paginator">
                                        <div class="in-paging">
                                            <strong class="in-paging__info">
                                            Displaying products
                                            1 - <span class="js-pagination-to-item">4</span>
                                            from
                                            <span class="js-paging-total-count">4</span>
                                            </strong>
                                            <div class="in-paging__control">
                                            </div>
                                        </div>

                                        <ul class="list-products js-list js-product-list ">
                                            <ProductListContent />
                                        </ul>

                                        <div class="text-center margin-bottom-20">
                                            <input type="button" class="js-load-more-button btn" data-page="1" data-page-size="12" data-pagination-to-item="4" data-total-count="4" data-url="" data-page-query-parameter="page" value="" htmlStyle="display: none;" />
                                        </div>
                                        <div class="in-paging">
                                            <strong class="in-paging__info">
                                            Displaying products
                                            1 - <span class="js-pagination-to-item">4</span>
                                            from
                                            <span class="js-paging-total-count">4</span>
                                            </strong>
                                            <div class="in-paging__control">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="box-list__description">
                                    <div class="box-list__description__text in-user-text js-category-description box-list__description__text--small">
                                        Our electronics include devices used for entertainment (flat screen TVs, DVD players, DVD movies, iPods, video games, remote control cars, etc.), communications (telephones, cell phones, email-capable laptops, etc.) and home office activities (e.g., desktop computers, printers, paper shredders, etc.).
                                    </div>
                                    <div class="box-list__description__more">
                                        <span class="link-style box-list__description__more__btn js-category-description-load-more" htmlStyle="display: block;">
                                        View more
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer />
        </ApolloProvider>
    )
}

export default ProductList;
