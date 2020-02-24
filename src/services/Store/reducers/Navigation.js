const initialState = {
    pageId: 0
}

const navigation = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case 'TOGGLE_SELECT_PAGE_ID':
            return {pageId:action.pageId};
        case 'TOGGLE_SELECT_PAGE':
            return {pageId:action.pageId};
        default:
            return state;
    }
};

export default navigation