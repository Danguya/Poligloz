//first import the Poligloz library
const {Poligloz} = require('../../index');

//creating a variable of content to translate
var myContent = "";

//adding content on the variable
myContent += "You can’t connect the dots looking forward "
myContent += "you can only connect them looking backward "
myContent += "So you have totrust that the dots will somehow connect in your future";

//translating the content 

var translated = Poligloz('en','pt',myContent);

//show results

console.log(translated);
