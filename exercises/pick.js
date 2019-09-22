function pickVersion1(object, propertyNames) {
    const result = {};

    Object.entries(object).forEach(([propertyName, propertyValue]) => {
        if(propertyNames.includes(propertyName)) {
            result[propertyName] = propertyValue;
        }
    });

    return result;
}

function pickVersion2(object, propertyNames) {
    const result = {};

    propertyNames.forEach(propertyName => {
        if(object.hasOwnProperty(propertyName)) {
            result[propertyName] = object[propertyName];
        }
    });

    return result;
}

const numbers = {
    a: 1,
    b: 2,
    c: false,
    d: 4,
}

// console.log('pickVersion1(numbers, ["b", "c"])',  pickVersion1(numbers, ["b", "c"]));
console.log('pickVersion2(numbers, ["b", "c"])',  pickVersion2(numbers, ["b", "c"]));

// console.log('Object.values(numbers)', Object.values(numbers));
// console.log('Object.keys(numbers)', Object.keys(numbers));
// console.log('Object.entries(numbers)', Object.entries(numbers));