/**
 * author: Daniel Gustavo Yava
 * name: Tradutor API
 * date: 21/04/2020 21:16min
 * version:1.0
 */

'use strict'


const replaceWord = require('./utils/replaceWord');\


function toTranslate(fromLanguage, toLanguage, textContent){

    const dictionary = require(`./languages/${fromLanguage}.json`);
    const translatedText = replaceWord(dictionary, toLanguage, textContent);

    return translatedText;
}

module.exports = {
    toTranslate

}

