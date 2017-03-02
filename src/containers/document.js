import { connect } from 'react-redux';

import Document from '../components/document.js';
import { renameDocument } from '../actions/document.js';
import { addPart } from '../actions/part.js';

function mapStateToProps(state) {
    return {
        name: state.document.name,
        renaming: state.document.renaming,
        parts: state.parts
    };
}

function mapDispatchToProps(dispatch) {
    return {
        renameDocument: (name) => {
            dispatch(renameDocument(name));
        },
        addPart: (name) => {
            dispatch(addPart(name));
        }
    };
}

const DocumentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Document);

export default DocumentContainer;
