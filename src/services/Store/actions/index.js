export const selectLaguage = lang => ({
    type: 'ADD_TODO',
    lang: lang,
});

export const selectPage = pageId => ({
    type: 'TOGGLE_SELECT_PAGE_ID',
    pageId: pageId,
});