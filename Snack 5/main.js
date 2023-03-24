/* Scrivi una funzione che accetti tre argomenti:
un array e due numeri
("a" più piccolo di "b" e "b" grande al massimo quanto il numero di elementi dell'array).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra "a" e "b" */

array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 4651, 65, 16, 18, 88];

let max = array.length;
console.log(max);

function newArray(array, min, max) {
    newArray = [];
    array.forEach(element => {
        if (element >= min && element < max) {
            newArray.push(element)
        }
    });
    return newArray
}

console.log(newArray(array, 0, max));