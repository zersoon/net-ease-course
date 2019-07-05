// 函数柯里化
// 1.参数复用 -- 如果是相同的参数，在计算之后不需要再次重新传参计算
function add(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
} 

// var add1 = add(1);
// var add2 = add1(2);

// console.log(add(1)(2)(3));
// console.log(add(1)(2)(4));
// console.log(add2(3));
// console.log(add2(4));

// 2.提前返回 - 多次调用多次内部判断，可以直接把第一次判断的结果返回外部接收
var addEvent = function(el, type, fn, capture) {
    if(window.addEventListener) {
        el.addEventListener(type, function () {

        });
    } else if(window.attachEvent) {
        el.attachEvent();
    }
}

addEvent(div, click, callback, false); // 判断一次
addEvent(p, click, callback, false); //判断二次
addEvent(span, click, callback, false);//判断三次
addEvent(h1, click, callback, false);

// 优化后
var addEvent = function() {
    if(window.addEventListener) {
        return function(el, type, fn, capture) {
            el.addEventListener(type, function () {});
        }
    } else if(window.attachEvent) {
        return function(el, type, fn, capture) {
            el.attachEvent();
        }
    }
}

// var addEvent_new = addEvent(); //判断一次就知道你是什么浏览器；

// 3.延迟执行 -- 避免重复的去执行程序，等真正需要结果的时候，再执行
var allScore = 0;
var addScore = function (socre) {
    // 大里计算；
    allScore += socre;
}

// addScore(2);
// addScore(3);
// addScore(2);
// addScore(3);
// addScore(1);
// console.log(allScore);  // 每秒都计算，性能不好

// 代码优化后,
var curryScore = function (fn) {
    var _allScore = [];
    return function () {
        _allScore = _allScore.concat([].slice.call(arguments));
        console.log(_allScore);
    }
}

// var addScore = curryScore(function () {

// });

// addScore(2);
// addScore(3);
// addScore(2);
// addScore(3);
// addScore(1);
// 代理 缓存
var curryScore = function (fn) {
    var _allScore = [];
    return function () {
        if(arguments.length === 0) {
            return fn.apply(null, _allScore);
        }
        _allScore = _allScore.concat([].slice.call(arguments));
    }
}

var allScore = 0;
var addScore = curryScore(function () {
    for(var i = 0; i < arguments.length; i++) {
        allScore += arguments[i];
    }
});

//柯里化 通用写法
var currying = function (fn) {
    var _args = [];

    return function cb() {
        if(arguments.length === 0) {
            return fn.apply(this, _args);
        }
        Array.prototype.push.apply(_args, [].slice.call(arguments));
        return cb;
    }
}