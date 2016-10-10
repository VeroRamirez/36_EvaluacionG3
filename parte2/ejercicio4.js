/*EJERCICIO 4
Definir la siguiente jerarquía de objetos, haciendo uso de los prototipos de
JavaScript:
● Objeto Persona con las propiedades nombre , edad y género, y el
método obtDetalles() , que muestra por pantalla las propiedades
de la persona.
● Objeto Estudiante , que hereda de Persona , e incluye las
propiedades curso y grupo y el método registrar() .
● Objeto Profesor , que hereda de Persona , e incluye las
propiedades asignatura y nivel y el método asignar() .
Crear los objetos y casos de prueba necesarios para comprobar el
correcto funcionamiento de la jerarquía.
*/

profesor=new Profesor(new Persona("Pedro",50,"Masculino"));
profesor.asignar("Fisica","Avanzada");


estudiante=new Estudiante(new Persona("Sofia",14,"Femenino"));
estudiante.registrar("Ingles","Basico");


function Persona(nombre, edad, genero){
    this.nombre=nombre;
    this.edad=edad;
    this.genero=genero;
    this.obtnDetalles = function(){
        alert("Las propiedades de la persona son:" + "\n Nombre:" + this.nombre + "\n Edad:"+ this.edad + "\n Genero:" + this.genero);
    }
}

/************NOTA: No se como se utiliza la herancia en JavaScript ***************/
function Estudiante(persona){
    this.persona=persona;
    this.curso;
    this.grupo;
    this.registrar = function(curso,grupo){
        this.curso=curso;
        this.grupo=grupo;
        alert("El estudiante " + this.persona.nombre + " se registro correctamente en el curso:" + this.curso + " grupo: " + this.grupo);
    }
}

function Profesor(persona){
    this.persona=persona;
    this.asignatura;
    this.nivel;
    this.asignar=function(asignatura,nivel){
        this.asignatura=asignatura;
        this.nivel=nivel;
        alert("El profesor " + this.persona.nombre + " se fue asignado correctamente en la asignatura: " + this.asignatura + " nivel:" + this.nivel);
    }
}

