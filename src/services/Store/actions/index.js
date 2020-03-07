export const openSideBar = sideBarStatus => ({
    type: 'OPEN_SIDE_BAR',
    sideBarStatus: sideBarStatus,
});

export const selectPage = pageId => ({
    type: 'TOGGLE_SELECT_PAGE_ID',
    pageId: pageId,
});