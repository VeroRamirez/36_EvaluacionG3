/*
EJERCICIO 3
Definir una función que determine si la cadena de texto que se le pasa
como parámetro es un palíndromo, es decir, si se lee de la misma forma
desde la izquierda y desde la derecha. Ejemplo de palíndromo complejo:
"La ruta nos aporto otro paso natural".
*/

function isPalindromo(palindromo){
    palindromo = palindromo.replace(/\s/g,"");
    palindromo = palindromo.toUpperCase();
    tamano = palindromo.length;
    for(var i=0; i<tamano; i++){
        if(palindromo[i]!=palindromo[tamano-(i+1)]){
            return false;
        }
    }
    return true;
}

var frase = prompt("Programa para validar palindromos \nIngresa una frase:","Anita lava la tina");
if(isPalindromo(frase)){
    alert(frase + " es un palindromo");
}else{
    alert(frase + " nooooo es un palindromo");
}