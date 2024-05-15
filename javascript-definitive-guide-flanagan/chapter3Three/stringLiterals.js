let s1 = 'single quote string';
let s2 = "double quote string";
let s3 = `backtick string`;

let s4 = 'two\nlines';
let s5 = "one \
single \
line.";
let s6 = `two lines
over back tick dilimiter`

console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);
console.log(s5);
console.log(s6);

let ss1 = 'this string contain\'s an apostrophe'
console.log(ss1);

console.log(s2.substring(1, 4));
console.log(s2.slice(1,4));
console.log(s2.slice(2));
console.log(s2.slice(-4));
console.log(s2.split());
console.log(s2.split(" "));
console.log(s2.indexOf("e"));
console.log(s2.lastIndexOf("e"));
console.log(s2.startsWith("doub"));
console.log(s2.endsWith("xyz"));
console.log(s2.endsWith("ing"));
console.log(s2.includes("str"));
console.log(s2.replace("double", "Double"));
console.log(s2.toUpperCase());
console.log(s2.toLowerCase());
console.log(s2.normalize());
console.log(s2.charAt(0));
console.log(s2[1]);
console.log(s2.length);
console.log(s2[s2.length - 1]);
console.log(s2.padStart(5));
console.log(s2.padEnd(3, "*"));
console.log(s2.trim());
console.log(s2.trimEnd());
console.log(s2.repeat(2));
