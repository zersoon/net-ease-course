// 防抖 触发高频事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间
function debounce(fn, wait = 50, immediate = true) {
  let timer = null; //创建一个标记用来存放定时器的返回值
  let rs;
  return function (...args) {
    if(timer) {
      clearTimeout(timer);
    }
    if(immediate) {
      if(!timer) {
        rs = fn.apply(this, args);
      }
      timer = setTimeout(() => {
        timer = null
      }, wait)
    } else {
      timer = setTimeout(() => {
        fn.apply(this, args)
      }, wait)
    }
    return rs;
    
  };
}

function sayHi() {
  console.log('防抖成功');
}

var inp = document.getElementById('inp');
inp.addEventListener('input', debounce(sayHi));

// 节流 高频事件触发，但在n秒内只会执行一次，所以节流会稀释函数的执行频率
// 每次触发事件时都判断当前是否有等待执行的延时函数
function throttle(fn) {
  let canRun = true; //通过闭包保存一个标记
  return function() {
    if (!canRun) return; //在函数开头判断标记是否为true, 不为true则return
    canRun = false; // 立即设置为false
    setTimeout(() => { //将外部传入的函数执行放在setTimeout中
      fn.apply(this, arguments);
      // 最后在setTimeout执行完毕后再把标记设置为true, 表示可以执行下一次循环了。当定时器没有执行的时候标记永远是false，在开头被return掉
      canRun = true;
    }, 500)
  }
}

function sayYes(e) {
  console.log(e.target.innerWidth, e.target.innerHeight);
}

window.addEventListener('resize', throttle(sayYes));
