// Assignment Operator
let a = 10;
console.log("Initial Value of a:", a);

// Unary Operator
a++;
console.log("After Increment:", a);

// Arithmetic Operators
let b = 20;
let c = 30;
let sum = 0;

if (b >= c) {
    sum = b + c;
    console.log("Addition:", sum);
    c++;
} else if (b === c) {
    sum = b - c;
    console.log("Subtraction:", sum);
    c = -1;
} else if (b <= c) {
    sum = b * c;
    console.log("Multiplication:", sum);
    c++;
} else {
    sum = b / c;
    console.log("Division:", sum);
    c++;
}
console.log("Count after operation:", c);

// Array Operations
const arr = [10, 20, 30, 40, 50];
let res = 0;
const last = arr[arr.length - 1];

// Calculate sum of the array
for (let i = 0; i < arr.length; i++) {
    res += arr[i];
}

// Compare sum with last element
if (sum === last) {
    console.log("Sum of the array equals the last element:", true);
} else {
    console.log("Not Equal");
}
console.log("Sum of the Array:", res);

// Relational Operators
const a1 = 20;
const a2 = 40;

// Strict equality
console.log("a1 === a2:", a1 === a2);

// Logical AND
console.log("(a1 >= a2) && (a2 === 10):", (a1 >= a2) && (a2 === 10));

// Logical OR
console.log("(a1 !== a2) || (a2 === 40):", (a1 !== a2) || (a2 === 40));

// Bitwise Operators
const log1 = 10;
const log2 = 20;
console.log("log1 >> 2:", log1 >> 2); // Right shift
console.log("log2 << 2:", log2 << 2); // Left shift
console.log("log2 & log1:", log2 & log1); // Bitwise AND

// Ternary Operator
const age = 17;
console.log(age >= 18 ? "Eligible for vote" : "Not Eligible for vote");
