'use strict';

module.exports = function toCapitalizeText(text)
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