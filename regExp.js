// let str = '<OPTION  value="待处理">待处理</OPTION>';
// let regExp = /^<.*?>/;
// console.log(regExp.exec(str)[0]);
// let str = 'dgfhfgh254bhku289fgdhdy675gfh';
// let regExp = /\d+/g;
// console.log(str.match(regExp));
// let str = '我草草你妈哈哈背景天胡景涛胡景涛哪肉涯剪短发欲望';
// let regExp = /草|肉|欲|胡景涛/g;
// let result = str.replace(regExp, function (match) {
//     let len = match.length;
//     let str;
//     switch(len) {
//         case 1: 
//             str = '*';
//             break;
//         case 2:
//             str = '**';
//             break;
//         case 3:
//             str = '***';
//             break;
//         default: 
//             str = '****';
//     }
//     return str;
// })
// console.log(result);
// let str = 'IT面试题博客中包含很多  <a href="http://hi.baidu.com/mianshiti/blog/category/微软面试题">微软面试题</a>';
// let regExp = /<a(?: [^>]*)+href="(.*)"(?: [^>]*)*>/;
// console.log(regExp.exec(str)[1]);
// let regExp =  /^(\d{3}-){2}\d{4}$/;
// console.log(regExp.test('123-456-7890'));

// function getUrlParam(sUrl, sKey) {
//     var arr = {};
//     sUrl.replace(/\??(\w+)=(\w+)&?/g, function (match, p1, p2) {
//         if(!arr[p1]) {
//             arr[p1] = p2;
//         } else {
//             var p = arr[p1];
//             arr[p1] = [].concat(p1, p2);
//         }
//     })
//     if(!sKey) return arr;
//     else {
//         for(var ele in arr) {
//             if(ele == sKey) {
//                 return arr[ele];
//             }
//         }
//         return "";
//     }
// }

// function numberWithCommas(x) {
//     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
// }
// console.log(numberWithCommas(12345678))

// let times= ['2006/02/03',
//   'test/07/sd',
//   '2016/05/10',
//   '1998-03-07',
//   '12345/23/45678',
//   '1234/23/56789',
//   '12345/23/45'];
//   times = times.map((time) => {
//       return time.replace(/^(\d{4})[/-](\d{2})[/-](\d{2})$/, (match, p1, p2, p3) => {
//           return `${p2}-${p3}-${p1}`
//       })
//   })
//   console.log(times);
let str = "I love fat bats, cat and every Xat";
// // let reg = /\b\w{1}ats?\b$/g;
// // let reg = /\b\w{1}ats?\b$/g;

let reg =/\b\w{1}ats?\b(?!$)/g; //right
// let reg = /\b\w+ats?\b(?!$)/g; //right
console.log(str.replace(reg, ''));
// var txt='I love fat cats, and do not like Xat';

//       var re1='.*?';	// Non-greedy match on filler
//       var re2='(fat)';	// Word 1
//       var re3='.*?';	// Non-greedy match on filler
//       var re4='(cats)';	// Word 2

//       var p = new RegExp(re1+re2+re3+re4,["i"]);
//       var m = p.exec(txt);
//       if (m != null)
//       {
//           var word1=m[1];
//           var word2=m[2];
//           console.log("("+word1.replace(/</,"&lt;")+")"+"("+word2.replace(/</,"&lt;")+")"+"\n");
//       }
