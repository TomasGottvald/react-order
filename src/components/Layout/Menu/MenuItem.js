import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function MenuItem (props) {
return (
    <li className="list-menu__item js-category-item js-hover-intent" data-hover-intent-class-for-open="active intented" data-hover-intent-force-click="true" data-hover-intent-force-click-element=".js-category-collapse-control">
        <Link to={{ pathname: `/category/${props.data.uuid}/${props.data.link}/`}} className="list-menu__item__link list-menu__item__link--level-1 ">
            {props.data.name}
            <i className="list-menu__item__control svg svg-arrow js-category-collapse-control" data-url="http://127.0.0.1:8000/categoryPanel/2/"></i>
        </Link>
        <div className="display-none js-category-list-placeholder"></div>
    </li>
    )
}

export default MenuItem;
