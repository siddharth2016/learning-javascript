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

console.log(arr[1]);
let arr2 = [obj, 1, 2, 3, [11, 22]];

console.log(arr2.obj);
console.log(arr2[0]);
console.log(arr2["4"]);

console.log(obj?.abc);
console.log(obj?.abc?.q);
console.log(arr2?.[8]);
console.log(arr2[8]);
console.log(arr2?.[4]);

console.log(func1?.(1));
console.log(func1?.(1,2));
console.log(func1?.(5,2, 4, 5, 6));
// console.log?.(func2?.(2));
// console.log(func2(2));

// let tempObj = new obj();
// console.log(tempObj);
// let tempObj2 = new obj;
// console.log(tempObj2)
console.log("-----------------")
console.log(-2);
console.log(2+3);
console.log(true?1:0);

console.log("3" * 2);
console.log(1 + "2");

let one = 1;
console.log(one++);
console.log(++one);

console.log(2+3*4);

console.log(12 % 5);
console.log(-12 % 4);
console.log(-13 % 4);
console.log(-12 % -5);
console.log(12 % -5);

console.log(1 + 2 + " blind sum");
console.log(1 + (2 + " blind sum"));

console.log("-----------------");
console.log(2 & 3);
console.log(2 | 3);
console.log(~2);
console.log(2 ^ 3);
console.log(2 >> 3);
console.log(2 << 3);
console.log(2 >>> 3);
console.log(1<<1<<3);