console.log("Hello World");

const chalk = require('chalk');
 
console.log(chalk.blue('Hello world!'));

const chalkAnimation = require('chalk-animation');
const rainbow = chalkAnimation.rainbow('Hello World and everybody in it'); // Animation starts
 
setTimeout(() => {
    rainbow.stop(); // Animation stops
    console.log("stop animation");
}, 1000);
 
