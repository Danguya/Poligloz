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
        capitalizeFirstLetter = word[0].toUpperCase() + word.slice(1);
    }else if(state === false){
        capitalizeFirstLetter = word[0].toLowerCase() + word.slice(1);

    }
}
function toConvertTextInArrayWords(text){
    var words = text.split(' ');
    return words;
}
function toTranslate(from, to, text){
    var FileDictionaryLocation =   `./languages/${from}.json`;
    fetch(FileDictionaryLocation)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
        })
        .catch(function(error){
            console.error(error);
        });
}