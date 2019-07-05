// 函数柯里化
// 1.参数复用 -- 如果是相同的参数，在计算之后不需要再次重新传参计算
function add(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
} 

var add1 = add(1);
var add2 = add1(2);

console.log(add(1)(2)(3));
console.log(add(1)(2)(4));
console.log(add2(3));
console.log(add2(4));