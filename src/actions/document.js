import { rename } from '../api/document.js';

export const DOCUMENT_RENAMING = 'DOCUMENT_RENAMING';
export const DOCUMENT_RENAMED = 'DOCUMENT_RENAMED';

function doingRename() {
    return {
        type: DOCUMENT_RENAMING
    };
}

function documentRenamed(name) {
    return {
        type: DOCUMENT_RENAMED,
        name
    }
}

export function renameDocument(name) {
    return function (dispatch) {
        dispatch(doingRename());

        rename(name).then(doc => {
            dispatch(documentRenamed(doc.name));
        });
    }
};

