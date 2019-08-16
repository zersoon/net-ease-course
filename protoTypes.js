var P = function () {};
P.prototype.aaa = function () {alert('ddd')};
var a = new P(), b = new P();
b.prototype = P;
b.prototype.aaa = function () {alert('ccc')};
var c = Object.create(null), d = new Object();
console.log(P.__proto__); // Function
console.log(P.prototype); // P {aaa: [Function]}
console.log(a.prototype); // undefined
console.log(b.prototype); // [Function P]
console.log(c.__proto__); // undefined
console.log(d.__proto__); // {}
console.log(Number.__proto__); //Function
console.log(Number.prototype); // Number: 0
console.log(Function.__proto__); // Function
console.log(Function.prototype); // Function
console.log(Function.prototype.__proto__); // {}
console.log(Object.__proto__); // Function
console.log(Object.prototype); // {}
console.log(Object.prototype.__proto__); // null