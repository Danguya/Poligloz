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
let translated = {
    body: "",
    ready: false
}

function toTranslate(fromLanguage, finalLanguage, text){
    var FileDictionaryLocation =   `./languages/${fromLanguage}.json`;
    text = toConvertTextInArrayWords(text);
    fetch(FileDictionaryLocation)
        .then(function(response){
            m ="carregando";
            return response.json();
            console.log(m);
        })
        .then(function(data){
            console.log(toReplaceWord(data, text, finalLanguage));
            if(toReplaceWord(data, text, finalLanguage) !== undefined){
                translated.body = toReplaceWord(data, text, finalLanguage);
                translated.ready = true;
            }
            
        })
        .catch(function(error){
            console.error(error);
        });
        
}