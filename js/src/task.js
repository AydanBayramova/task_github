let a = 3;
let b = 2;

let x = a;
a = b;
b = x;
console.log(a); 
console.log(b); 



let c = 3;
let d = 2;

if (c !== d) {
  c = c + d; 
  d = c - d; 
  c = c - d; 
}
console.log(c); 
console.log(d); 
