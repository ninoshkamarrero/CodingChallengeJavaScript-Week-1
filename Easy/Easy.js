var name1='Ninoshka';
var name1Length=name1.length;
var name2='Anthony';
var name2Length=name2.length;
var characterDifference=Math.abs(name1Length-name2Length);
var longerOrShorter;

if (name1Length>name2Length){
    longerOrShorter='longer';
}

if (name1Length<name2Length){
    longerOrShorter='shorter';
}

console.log( 'The name ' + name1 + ' is ' + longerOrShorter + ' than ' + name2 + ' by ' +characterDifference +' characters');