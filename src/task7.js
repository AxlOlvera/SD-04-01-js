const arr = [
    [0,1,2,3,4,5,6,7,8,9],
    [10,11,12,13,14,15,16,17,18,19],
    [20,21,22,23,24,25,26,27,28,29]
  ]
  
  // Type your code below this line!
  
  //Se agreg un sólo número a una fila existente
  arr[0].splice(2,0,1); 
  console.log(arr);

  //Se agrega una fila completa de números
  arr.splice(0,0, []);
  for(let i = -1; i >= -10; i--){
    arr[0].splice(0,0,i);
  }
  console.log(arr);
  

  //Se elimina un sólo número de una fila específica
  arr[1].splice(2,1);
  console.log(arr);

  //Se invierte una de las filas sin afectar a las demás
  arr[0].reverse();
  console.log(arr);

  // Type your code above this line!