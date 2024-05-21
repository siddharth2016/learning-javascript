console.log(1);
console.log("hello");
console.log(/abc+/);
console.log(true, false, null, this);
console.log(undefined);

let arr = [1,2,3,4,,,,,];
console.log(arr);

let obj = {
    "abc": 1,
    "xyz": 2
}
console.log(obj);

let func1 = function(x) {
    return x*x;
}
console.log(func1);
console.log(func1(2));