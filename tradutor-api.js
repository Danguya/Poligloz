/**
 * author: Daniel Gustavo Yava
 * name: Tradutor API
 * date: 21/04/2020 21:16min
 * version:1.0
 */



function toCapitalizeFirstLetter(word, state = true)
{
    var capitalizedFirstLetter;
    if(state === true){
        capitalizedFirstLetter = word[0].toUpperCase() + word.slice(1);
    }else if(state === false){
        capitalizedFirstLetter = word[0].toLowerCase() + word.slice(1);

    }
    return capitalizedFirstLetter;
}

function toConvertTextInArrayWords(text){
    var words = text.split(' ');
    return words;
}


function toConvertTexArrayInString(textArray = []){
    return textArray.toString().split(',').join(' ');
}


function toReplaceWord(data,text, language){
    var replacedWord = [];
    var newText = "";
    for(var i = 0; i < text.length; i++){

        if(data[language][toCapitalizeFirstLetter(text[i],true)] === undefined){
            replacedWord[i] = data[language][toCapitalizeFirstLetter(text[i],true)];
        }
        if(data[language][toCapitalizeFirstLetter(text[i],false)] !== undefined){
            replacedWord[i] = data[language][toCapitalizeFirstLetter(text[i],false)];
        }else{
            replacedWord[i] = text[i];
        }

    }
    console.log(typeof replacedWord);
    newText = toConvertTexArrayInString(replacedWord);
    return newText;
}

function toTranslate(fromLanguage, finalLanguage, text){
    var FileDictionaryLocation =   `./languages/${fromLanguage}.json`;
    text = toConvertTextInArrayWords(text);
    fetch(FileDictionaryLocation)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
            console.log(toReplaceWord(data, text, finalLanguage));
            
        })
        .catch(function(error){
            console.error(error);
        });
}