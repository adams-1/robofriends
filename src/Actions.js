import { CHANGE_SEARCH_FIELD } from './Consts';

// this is our action
export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})
