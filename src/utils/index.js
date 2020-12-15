export const objToKeys = obj => Object.keys(obj);

export const objToValues = obj => objToKeys(obj).map(key => obj[key]);