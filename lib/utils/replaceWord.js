'use strict'

const capitalizeText = require('./capitalizeText');
const convertTextArrayToString = require('./convertTextArrayToString');


module.exports = function ReplaceWord(data, language, contentText){
    var toReplace = data[language];
    var replacedWord = [];
    var finalString;

    contentText = capitalizeText(contentText)
    contentText = contentText.split(' ');

    for(var i = 0; i <= contentText.length; i++){
        
        if(!(toReplace[contentText[i]] === undefined)){
            
            replacedWord[i] = toReplace[contentText[i]];

        }else{

            replacedWord[i] = contentText[i];
        }

        finalString = convertTextArrayToString(replacedWord);
    }

    return finalString;
}