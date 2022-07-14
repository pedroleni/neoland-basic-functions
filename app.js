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
---------------------**Iteración #5: Calcular promedio de strings**---------------------
-----------------------------------------------------------------------*/

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

const promedio2 = (mixed) =>  {
  let sum= 0;
  for (let value of mixed ){

    if (typeof (value) == 'number'){sum += value}
    else {sum += value.length}
    //sum = typeof value.typeof == 'number' ? sum += value : (sum += value.length);

  }
  return sum;

}
console.log(promedio2(mixedElements));

/*-----------------------------------------------------------------------
---------------------**Iteración #6: Valores únicos**---------------------
-----------------------------------------------------------------------*/

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  const emoveDuplicates = (mixed) =>  {
    const result = [];
    mixed.forEach ((item)=>{
      if(!result.includes(item)){
        result.push(item);}
    })
  
    return result;
  }
  console.log(emoveDuplicates(duplicates));


  /*-----------------------------------------------------------------------
---------------------**Iteración #7: Buscador de nombres**-------------------
-----------------------------------------------------------------------*/


//He modifiicado el array dado para que haya elementos repetidos y no sea tan 
//sencillo como poner un simple indexOf para saber el primer indice
const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Logan',
    'Natasha',
    'Clint',
    'Tony',
    'Xabier',
    'Bruce',
    'Tony',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  


const emDuplicates = (mixed, palabra) =>  {

    //Creo array que guardara la posicion del elemento en el array
    let afo =[];

    //Vemos con el indexOf si hay algun elemento, en caso de no haberlo nos dara el valor de -1
    let index = mixed.indexOf(palabra);
    afo.push(index);

    //El valor obtenido lo incluyo en el array contenedor de las posiciones diferentes de los elementos repetidos
    // Creo un if para  en el caso de ser -1 devolver false sino, seguir comprobando los siguientes elementos repetidos en caso de haberlo
    
    
    if (afo.includes(-1)==true){return false;}
    else{
        //comprobamos el largo del array
        let largo = mixed.length

        //mientras estemos dentro del rango del array contenedor de posiciones seguiremos comprobando que existan repetidos
        while (index<largo) {
            index++;
            //decimos que hacemos indexOf  apartir de donde lo dejamos el primero encontramos mas 1
            //Si es diferente a -1 los seguiremos puseando y volveremos a realizar otra vuelta en el bucle while
            if(mixed.indexOf(palabra, index ) != -1){
            index = mixed.indexOf(palabra,index);
            afo.push(index);} 
        }
    return "true "+afo;

    }
 
   }
  console.log(emDuplicates(nameFinder, "Tony"));


/*-----------------------------------------------------------------------
---------------------**Iteración #8: Buscador de nombres**-------------------
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








