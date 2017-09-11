var converter = require('number-to-words');
function numerosPalabras(n){
    console.log(converter.toOrdinal(n));
    console.log(converter.toWords(n));
    console.log(converter.toWordsOrdinal(n));
}
numerosPalabras(Math.random()*100);


