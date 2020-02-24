const initialState = {
    lang:'ua'
}

const language = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_SELECT_LANGUAGE':
            return {lang:action.lang};
        case 'GET_SELECT_LANGUAGE':
            return state;
        default:
            return state;
    }
}

export default language