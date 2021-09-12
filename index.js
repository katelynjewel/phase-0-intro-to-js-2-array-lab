// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(name){
    cats.push('Ralph')
}

function destructivelyPrependCat(name){
    cats.unshift('Bob')
}

function destructivelyRemoveLastCat(name){
    cats.pop()
}

function destructivelyRemoveFirstCat(name){
    cats.shift()
}

function appendCat(name){
    const newCatsArray = [...cats, name]; 
    return newCatsArray;
}
appendCat('Broom');

function prependCat(name) {
    const newArray = [name, ...cats]; 
    return newArray;
}
prependCat('Arnold');

function removeLastCat() {
    const newRemoveLastCatArray = cats.slice(0,cats.length-1);
    return newRemoveLastCatArray;
}
removeLastCat;

function removeFirstCat() {
    const newRemoveFirstCatArray = cats.slice(1);
    return newRemoveFirstCatArray;
}
removeFirstCat;