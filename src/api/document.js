'use strict';

export function rename(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({name});
        }, 2000);
    });
}
