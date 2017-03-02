export const ADD_PART = 'ADD_PART';

export function addPart(name) {
    return {
        type: ADD_PART,
        name
    };
};

