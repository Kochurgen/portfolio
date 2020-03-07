const initialState = {
    sideBarStatus: false
}

const sideBar = (state = initialState, action) => {
    switch (action.type) {
        case 'OPEN_SIDE_BAR':
            return {sideBarStatus:action.sideBarStatus};
        case 'GET_SELECT_LANGUAGE':
            return state;
        default:
            return state;
    }
}

export default sideBar