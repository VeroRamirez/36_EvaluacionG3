/*Ejercicio 1: Haz el juego de piedra papel o tijera con 3 turnos
    Piedra pierde con papel y gana con tijeras
    Papel pierde con tijeras y gana con piedra
    Tijeras pierde con piedras y gana con papel
*/

/******PSEUDOCODIGO********** NOTA YA NO ME DIO TIEMPO DE ACTUALIZAR EL PSEUDOCODIGO porque esa fue mi primera forma de resolverlo.
    Crear turno=1
    Crear variable eleccion para el jugador
    Crear funcion para culcular numero aleatorio entre 1 y 3
        Si es 1 entonces piedra, si es 2 entonces papel y si es 3 tijerasCr
    Crear funcion para validar que el usuario haya escrito una palabra valida.
    Escribe "Elige piedra papel o tijeras"
    Asigna el dato ingresado a la variable eleccion
    Si eleccion igual a piedra
    Mostrar "Le ganaste a tijeras y perdiste con papel"
    Si eleccion igual a papel
    Mostrar "Le ganaste a piedra y perdiste con tijeras"
    Si eleccion igual a tijeras
    Mostrar "Le ganaste a papel y perdiste con piedra"
    Incrementar turno en 1
    Repetir todo el proceso anterior hasta que turno=3
    
*/

//Funcion para obtener la tirada del rival
function tiraOponente(){
    var eleccionJugador2=Math.floor(Math.random()*3)+1; //Calcula un numero aleatorio entre 1 y 3
    switch(eleccionJugador2){
            case 1:
                eleccionJugador2="piedra";
                break;
            case 2:
                eleccionJugador2="papel";
                break;
            case 3:
                eleccionJugador2="tijeras";
                break;
            default:
                return 0;
        }
    return eleccionJugador2;
}

function validaTiro(tiro){
    tiro=tiro.toLowerCase();
    switch(tiro){
            case "piedra", "papel", "tijeras":
                return true;
                break;
            default:
                return false;
        }
}


var turno=1;
var eleccionJugador;
var eleccionOponente;
var puntos=0;
var puntosOponente=0;
var PIEDRA="piedra";
var PAPEL="papel";
var TIJERAS="tijeras"
while(turno<=3){
    eleccionJugador=prompt("JUEGO PIEDRA, PAPEL O TIJERAS turno " + turno + "\n Escribe piedra, papel o tijeras");
    if(!eleccionJugador){
        alert("Eleccion no valida, perdiste tu turno");
        turno++;
        continue; //Entra al ciclo siguiente.
    }
    eleccionOponente=tiraOponente();
    eleccionJugador=eleccionJugador.toLowerCase();
    switch(eleccionJugador){
            case PIEDRA:
                if(eleccionOponente==TIJERAS){
                    puntos++;
                }else if(eleccionOponente!=PIEDRA){
                    puntosOponente++;
                }
                break;
            case PAPEL:
                if(eleccionOponente==PIEDRA){
                    puntos++;
                }else if(eleccionOponente!=PAPEL){
                     puntosOponente++;
                }
                break;
            case TIJERAS:
                if(eleccionOponente==PAPEL){
                    puntos++;
                }else if(eleccionOponente!=TIJERAS){
                     puntosOponente++;
                }
                break;
            default:
                puntos=puntos;
        }
    alert("Puntos para turno " + turno + "\n Tu"+"("+eleccionJugador +"):" + puntos + " puntos \n Rival:"+"("+eleccionOponente +"):"+ puntosOponente +" puntos");
    turno++;      
}
if(puntos>puntosOponente)
{
    alert("Felicidades Ganaste con " + puntos + " puntos");
}else if(puntos==puntosOponente){
    alert("Empataron con " + puntos + " puntos");
}else{
    alert("Suerte para la Proxima, Perdiste con " + puntos + " puntos");
}
    
    
