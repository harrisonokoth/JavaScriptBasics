// JavaScript Fundamentals

// Declare variables of different data types
let name = "John"; // string
let age = 30; // number
let isStudent = true; // boolean

// Define and call functions to perform simple operations
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    return a / b;
}

function multiply(a, b) {
    return a * b;
}

// Use console.log() to print output and debug code
console.log("Add: ", add(5, 3));
console.log("Subtract: ", subtract(5, 3));
console.log("Divide: ", divide(6, 3));
console.log("Multiply: ", multiply(5, 3));

// DOM Manipulation

// Elements for user interaction
const output = document.getElementById('output');
const addBtn = document.getElementById('addBtn');
const subtractBtn = document.getElementById('subtractBtn');
const divideBtn = document.getElementById('divideBtn');
const multiplyBtn = document.getElementById('multiplyBtn');

// Event listeners
addBtn.addEventListener('click', () => {
    const result = add(5, 3);
    output.textContent = `Add: ${result}`;
});

subtractBtn.addEventListener('click', () => {
    const result = subtract(5, 3);
    output.textContent = `Subtract: ${result}`;
});

divideBtn.addEventListener('click', () => {
    const result = divide(6, 3);
    output.textContent = `Divide: ${result}`;
});

multiplyBtn.addEventListener('click', () => {
    const result = multiply(5, 3);
    output.textContent = `Multiply: ${result}`;
});

// Interactive Charts and Graphs

// Data for Chart.js
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const data = {
    labels: labels,
    datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
    }]
};

// Config for Chart.js
const config = {
    type: 'line',
    data: data,
    options: {}
};

// Render Chart.js
const myChart = new Chart(
    document.getElementById('myChart'),
    config
);
