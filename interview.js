function getStr(str) {
    const arr = str.match(/(\w)\1*/g);
    console.log("arr", arr);
    const maxLen = Math.max(...arr.map(s => s.length));
    const result = arr.reduce((pre, curr) => {
             if (curr.length === maxLen) {
                 pre[curr[0]] = curr.length;
             }
             return pre;
         }, {});
     console.log(result);
    return result;
 }

 var entry = {
     'a.b.c.dd': 'abcdd',
     'a.d.xx': 'adxx',
     'a.e': 'ae'
 }

 function map(entry) {
     const obj = Object.create(null);
     for(const key in entry) {
         const keymap = key.split('.');
         set(obj, keymap, entry[key])
     }
     return obj;
 }

 function set(obj, map, val) {
     let tmp;
     if (!obj[map[0]]) obj[map[0]] = Object.create(null);
     tmp = obj[map[0]];
     for(let i = 1; i < map.length; i++) {
         if (!tmp[map[i]]) tmp[map[i]] = map.length - 1 === i ? val : Object.create(null);
         tmp = tmp[map[i]];
     }
 }