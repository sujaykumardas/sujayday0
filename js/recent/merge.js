var o1 = { a: 1, b: 1, c: 1 };
var o2 = { b: 2, c: 2 };
var o3 = { c: 3 };
var o4={};
var obj = Object.assign(o4, o1, o2, o3);
//console.log(obj); // { a: 1, b: 2, c: 3 }
document.write(JSON.stringify(obj));
//document.write(o4);