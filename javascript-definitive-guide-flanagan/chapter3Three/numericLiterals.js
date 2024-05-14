let a = 1_000;
console.log(a);

let b = 1_00_00_99;
console.log(b);

console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.NaN);

let c = 0;
let d = Number.NaN;
console.log(c / d);

let e = 0;
let f = -0;
console.log(e / f);

let zero = 0;
let ngzero = -0;
console.log(zero === ngzero);
console.log(1/zero === 1/ngzero);

let g = .3 - .2;
let h = .2 - .1;
console.log(g === h);
console.log(g === .1);
console.log(h === .1);

let i = 100000000000000000n;
let j = 100000000000000000000000000000000n;
console.log(i * j);
console.log(1 > 1n);
console.log(0 == 0n);
console.log(0 === 0n);

let today = Date.now();
let now = new Date();
let time = now.getTime();
let date = now.toISOString();
console.log(today);
console.log(now);
console.log(time);
console.log(date);