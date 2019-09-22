const a = {
    propertyA: 'A',
    sayHello() { console.log('Hello'); },
    propertyAB: 'in A',
};
const b = Object.create(a);
b.propertyB = 'B';
b.propertyAB = 'in B';
const c = Object.create(b);
c.propertyC = 'C';

console.log('a.propertyA', a.propertyA);
console.log('a.propertyB', a.propertyB);
console.log('a.propertyC', a.propertyC);
console.log('a.propertyAB', a.propertyAB);

console.log('b.propertyA', b.propertyA);
console.log('b.propertyB', b.propertyB);
console.log('b.propertyC', b.propertyC);
console.log('b.propertyAB', b.propertyAB);

console.log('c.propertyA', c.propertyA);
console.log('c.propertyB', c.propertyB);
console.log('c.propertyC', c.propertyC);
console.log('c.propertyAB', c.propertyAB);

b.sayHello();

console.log('c.toString()', c.toString());

console.log('b.__proto__ === a', b.__proto__ === a);
console.log('a.isPrototypeOf(b)', a.isPrototypeOf(b));

console.log('c.__proto__ === b', c.__proto__ === b);
console.log('b.isPrototypeOf(c)', b.isPrototypeOf(c));

console.log('c.__proto__.__proto__ === a', c.__proto__.__proto__ === a);
console.log('a.isPrototypeOf(c)', a.isPrototypeOf(c));

console.log('Object.getOwnPropertyDescriptors(Object.prototype)', Object.getOwnPropertyDescriptors(Object.prototype));