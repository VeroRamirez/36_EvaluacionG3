/*Ejercicio 2: Declara un arreglo vacío denominado nombres. Pide al usuario tres nombres y almacena esos nombres como elementos arreglo. A continuación muestra el contenido en un mensaje.*/

/*
Crea array de nombres
Escribe "Ingresa nombre"
Asigna nombre en nombres[0]
Incrementa en uno la posicion del array nombres[]
Repite los 3 pasos anteriores 2 veces mas.
Muestra el contenido del array nombres[0]
incrementa en 1 la posicion del array
Muestra el contenido del array nombres[1]
repite los 2 pasos anteriores hasta mostrar todos los elementos.
*/

var nombres=[];
for(i=0; i<3; i++){
    nombres[i]=prompt("Ingresa nombre " + (i+1) + ":");
}

nombres.forEach(function(nombre){
    alert("Hola "+nombre);
});