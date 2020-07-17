import React from 'react'

function ArticleDetail(props) {
    return (
        <div>
            <h1>{props.data.title}</h1>
            <p>{props.data.content}</p>
        </div>
    )
}

export default ArticleDetail;
