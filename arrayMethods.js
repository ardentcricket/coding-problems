export const isStringIncluded = (list, str) => {

    if (!list) return 'Please enter list in first parameter';
    if (!str || typeof (str) !== 'string') return 'Please enter string in second parameter';


    for (let i = 0; i < list.length; i++) {
        if (list[i].toLowerCase() === str.toLowerCase()) return true
    }

    return false;
}

export const doSomeElementsMatch = (list, callBackFunc) => {

    if (!list) return 'Please enter list in first parameter';


    for (let i = 0; i < list.length; i++) {
        if (callBackFunc(list[i])) return true
    }

    return false;
}

export const doesEveryElementMatch = (list, callBackFunc) => {

    if (!list) return 'Please enter list in first parameter';
    let count = 0;
    for (let i = 0; i < list.length; i++) {
        if (callBackFunc(list[i])) count++;
    }

    return count === list.length;
}

export const flattenArray = list => {

    for (let i = 0; i < list.length; i++) {
        if (Array.isArray(list[i])) {
            let copy = list[i];
            list.splice(i, 1);
            list.push(...copy);
        }
    }
    return list;
}

export const flattenArrayDeep = list => {
    if (!list) return [];
    // check if elements have an array, if yes flatten recursively, else return list
    return doSomeElementsMatch(list, el => Array.isArray(el)) ?
        flattenArrayDeep(flattenArray(list)) :
        list;
}