import React from 'react'
import axios from 'axios'
import ProductItem from '../product/Item'
import CONFIG from '../../config'

import { loadHomepageTopItems } from '../../actions'

import { useSelector, useDispatch } from 'react-redux'

function HomepageProductList () {
    const dispatch = useDispatch()
    const loadedHpItems = useSelector( state => state.loadedItems.homepageItems )

    if( loadedHpItems.length === 0 ){
        axios.get(CONFIG.API_URL+"/homepage-list/")
        .then(res => {
            dispatch(loadHomepageTopItems(res.data.productList.items))
        })
    }

    const productItems = loadedHpItems.map(function(item){
        return <ProductItem key={item.id} data={item} />
    })

    return (
        <div className="web__line">
            <div className="web__container">
                <ul className="list-products js-list js-product-list ">
                    {productItems}
                </ul>
            </div>
        </div>
    )
}

export default HomepageProductList;
