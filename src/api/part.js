'use strict';

export function add(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({name, id: Date.now()});
        }, 2000);
    });
}
