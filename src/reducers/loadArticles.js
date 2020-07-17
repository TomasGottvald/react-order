const loadArticlesReducer = ( state = { articles: [] }, action ) => {
    switch (action.type) {
        case 'LOAD_ARTICLES':
            state = { articles: action.payload }
            return state;

        default:
            return state;
    }
}

export default loadArticlesReducer;
