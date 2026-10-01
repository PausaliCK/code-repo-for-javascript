const name = "Pausali"
const repocount = 50

// console.log(name + repocount + " Value");

console.log(`Hello My name is ${name} and I have ${repocount} repositories.`);

console.log(name[0]);
console.log(name.__proto__);

console.log(name.length);
console.log(name.toUpperCase());
console.log(name.charAt(2));

const gameName = new String('pausali-sg')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));

console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   pausali    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://pausali.com/pausali%20sengupta"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));