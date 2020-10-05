import React from 'react'
import MenuItem from '../Menu/MenuItem'
import { gql, useQuery, ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import Loader from '../Loader'
import CONFIG from '../../../Config'

function Menu () {
    const client = new ApolloClient({
      uri: CONFIG.FEAPI_URL,
      cache: new InMemoryCache()
    });

    function MenuItems() {
        const GET_CATEGORIES = gql`{
                categories {
                   uuid
                   name
                   children {
                       name
                   }
                   parent {
                       name
                   }
                   images {
                       type
                       position
                       size
                       url
                       width
                       height
                   }
                   products (first: 1) {
                       edges {
                           node {
                               name
                           }
                       }
                   }
                }
            }
        `;

        const { loading, error, data } = useQuery(GET_CATEGORIES);

      if (loading) return <Loader />;
      if (error) return <p>Error :(</p>;
          console.log(data);

        return data.categories.map( function (item){
            return <MenuItem key={item.uuid} data={item} />
        });
    }

    return (
        <ApolloProvider client={client}>
            <div className="web__line">
                <div className="web__container">
                    <ul className="js-category-list list-menu dont-print
                        list-menu--root" id="js-categories">
                        <MenuItems />
                    </ul>
                </div>
            </div>
        </ApolloProvider>
    )
}

export default Menu;
