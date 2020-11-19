/*!
 * poligloz
 * Copyright(c): 21/04/2020 Wilmy Danguya
 * MIT Licensed
 */

'use strict'


const replaceWord = require('./utils/replaceWord');

const Poligloz = (fromLanguage, toLanguage, textContent) => {

        const dictionary = require(`./languages/${fromLanguage}.json`);
        const translatedText = replaceWord(dictionary, toLanguage, textContent);
    
        return translatedText;
    }


module.exports = { Poligloz }

