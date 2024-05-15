console.log(global);
console.log(globalThis);
//console.log(window);

let sym1 = Symbol("abc");
let sym2 = Symbol("xyz");
let sym3 = Symbol("abc");
console.log(sym1 === sym3);
console.log(Symbol.for("xyz") === sym2);
console.log(Symbol.for("abc") === sym1);
console.log(Symbol.for("abc") === sym3);
console.log(Symbol.for("abc") === Symbol.for("abc"));

let a = [];
let b = a;
b[0] = 1;
console.log(a);
console.log(a===b);