let a = 100;
let b = 300;

// using destrut
[a,b] = [b,a]
console.log(a,b)

// ------------------------------------------------

// using temp
let temp;
// temp = a;
// a = b;
// b = temp;
// console.log(a,b)

// ------------------------------------------------

// without using new var
// a = a+b;
// b = a-b;
// a = a-b;
// console.log(a,b)
