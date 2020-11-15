'use strict'

module.exports = function convertTextArrayToString(textInArray = []){

    return textInArray.toString().split(',').join(' ');

}