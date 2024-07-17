//forEach

const numbers = [12, 34, 56, 7, 88, 90];

numbers.forEach((numbers)=>{console.log(numbers);});

//map

const mapArr = numbers.map((name)=>{return name*2;});

console.log(numbers);
console.log(mapArr);

const skills = ["html", "css", "js", "react", "node.js", "mongoDB", "express"];

const skillEl = skills.map((skil)=>{return `<p>${skil}</p>`}).join('')

document.querySelector('body').insertAdjacentHTML('afterbegin', skillEl);

//filter

const filteredNumbers = numbers.filter((number)=>{return number > 30;});
console.log(filteredNumbers);