const geval = eval;
let x = "xglobal", y = "yglobal";
function f() {
    let x = "xlocal";
    eval("x += 'function call';");
    return x;
}

// function g() {
//     let y = "ylocal";
//     geval("y += 'function call';");
//     return y;
// }

console.log(f(), x);
// console.log(g(), y);

let obj = {"a":1, "b":2, "c":3, "z":0};
console.log(obj.z ?? 1000);
console.log(obj.z || 1000);
console.log(obj.q ?? obj.a);

console.log(typeof null);
console.log(typeof f);
console.log(typeof obj);
console.log(typeof undefined);
console.log(typeof NaN);

console.log(delete obj.a);
console.log(obj);
let arr = [1,2,3];
console.log(delete arr[2]);
console.log(arr);

console.log(void (1+2));

console.log(eval("let q=1, p=3;"));
