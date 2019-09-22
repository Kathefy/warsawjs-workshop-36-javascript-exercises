const extraPropertyName = 'isEmployee';

const person = {
    firstName: 'Jan',
    lastName: 'Nowak',
    [extraPropertyName]: true,
};

// person.age = 70;
person['age'] = 70;
person['place of birth'] = 'Warszawa';
// person[extraPropertyName] = true;

console.log('person', person);