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



/*-----------------------------------------------------------------------
---------**Iteración #4: Calcular promedio de strings**------------------
-----------------------------------------------------------------------*/

const numbersPromedio = [12, 21, 38, 5, 45, 37, 6];


const average = (listN) => {
    //Reutilizamos la función del ejercicio anterior 
    return sumAll(listN) / listN.length;
}

let promedio = average(numbersPromedio);
console.log(promedio);

/*-----------------------------------------------------------------------
---------------------**Iteración #6: Valores únicos**---------------------
-----------------------------------------------------------------------*/

const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];

  // tenemos que contar cuantos hay de cada elemento en el array repetido 
const repeatCounter =(array) => {
    //incializamos un contador y un array donde guardaremos el nombre del elemento y la cantidad 
    let contador = 0;
    let arrayRepeticiones = [];

    //recorremos el array introducido por parametro 
    counterWords.forEach (( Element)=>{
        //una vez salido del segudo bucle hay que volver a inicializar a 0 el contador para contar el siguiente elemento
        contador =0;

        //ponemos un doble forEach para una vez cogido el elemento, iterarlo por todo el array de nuevo
        //esto nos va a generar que los elementos repetidos los guarde en el arrayRpeticiones repetidos, pero luego lo solucionaremos 
        counterWords.forEach ((repetidoElemento)=>{

            //si aparece, incrementaremos el contador
            if (Element == repetidoElemento)contador++;})
            //una vez contados guardamos en el array creado con el valor del elemento y su cantidad
            arrayRepeticiones.push(Element+" "+contador)
       
    })
    //Ahora vamos a hacer otro array con los valores sin repetir
    let noRepet = [];

    arrayRepeticiones.forEach( (elemento) => {
        if (!noRepet.includes(elemento)) {
            noRepet.push(elemento);
        }
        });
    
    return noRepet;
    
}

console.log(repeatCounter(counterWords));

//[ 'code 4', 'repeat 1', 'eat 1', 'sleep 2', 'enjoy 2', 'upgrade 1' ]







