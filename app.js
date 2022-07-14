/*------------------------------------------------------------------------
 ----------------**Iteración #1: Buscar el máximo-------------------------
 -----------------------------------------------------------------------*/

 const sum = (numberOne, numberTwo) => {
    return (numberOne > numberTwo) ? numberOne : numberTwo;
  }

/*-----------------------------------------------------------------------
----------------**Iteración #2: Buscar la palabra más larga**------------
-----------------------------------------------------------------------*/

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

const findLongestWord = (list) => {
  let longestWord = "";
  list.forEach((element) => {
    longestWord = element.length > longestWord.length ? element : longestWord;
  })
  return longestWord;
}

console.log(findLongestWord(avengers));


/*-----------------------------------------------------------------------
----------------**Iteración #3: Calcular la suma**----------------------
-----------------------------------------------------------------------*/

const numbers = [1, 2, 3, 5, 45, 37, 58];


const sumAll = (listNumbers) => {
 
  let contador = 0;
 
  for (let value of listNumbers) {
    contador += value;
  }
  // Retornamos el total
  return contador;
}


let sumFinal = sumAll(numbers);

console.log(sumFinal);












