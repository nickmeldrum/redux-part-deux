import { ADD_PART } from '../actions/part.js';

export default function parts(state = [], action) {
    switch (action.type) {
        case ADD_PART :
            return state.concat([{id: Date.now(), name: action.name}]);
        default :
            return state;
    }
};
