/**
 * author: Daniel Gustavo Yava
 * name: Tradutor API
 * date: 21/04/2020 21:16min
 * version:1.0
 */
function toCapitalizeText(text)
{
    if(text.match(/[a-z]/ig).length >= 1){
        text = text.toUpperCase();
    }
    if(text.match(/[A-Z]/ig).length >= 1){
        text = text.toUpperCase();
    }
    if(text.match(/[a-zA-Z]+/ig).length >= 1){
        text = text.toLowerCase();
    }
    return text;

}

function toConvertTextInArrayWords(text){
    var words = text.split(' ');
    return words;
}


function toConvertTexArrayInString(textArray = []){
    return textArray.toString().split(',').join(' ');
}


function toReplaceWord(data, toLanguage, text){
    var toReplace = data[toLanguage];
    var replacedWord = [];
    var finalString;

    text = toCapitalizeText(text);
    text = text.split(' ');
    
    for(var i = 0; i < text.length; i++){
        if(toReplace[text[i]] === undefined){
            replacedWord[i] = text[i];
        }else{
            replacedWord[i] = toReplace[text[i]];
        }
        

        finalString = toConvertTexArrayInString(replacedWord);
    }

    return finalString;
}

module.exports = {
    toTranslate(fromLanguage, toLanguage, textToTranslate){
        var dictionaryLanguage = require(`./languages/${fromLanguage}.json`);
        var translatedText = toReplaceWord(dictionaryLanguage,toLanguage, textToTranslate);

        return translatedText;
    }
}