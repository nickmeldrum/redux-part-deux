import { DOCUMENT_RENAMING, DOCUMENT_RENAMED } from '../actions/document.js';

const initialState = {
    renaming: false,
    name: ''
};

export default function document(state = initialState, action) {
    switch (action.type) {
        case DOCUMENT_RENAMING:
            return Object.assign({}, state, {renaming: true});
        case DOCUMENT_RENAMED :
            return Object.assign({}, state, {name: action.name, renaming: false});
        default :
            return state;
    }
};
