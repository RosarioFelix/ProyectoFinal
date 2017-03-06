var records = document.getElementById('records')
var quiz = document.getElementById('quiz');

var botonis = document.getElementById('Sprintuno');
botonis.onclick = function() {
        var respuesta = "<h3> Sprin 1 : Introducción a JavaScript -JS </h3>" +"\n"
                         +"<ol>" + "<li>fundamentos de programacion</li>" + "<li>Funciones</li>" +
                         "<li>arreglos</li>" + "<li>objetos</li>" + "</ol>"
        records.innerHTML =respuesta;
};

var botonis2 = document.getElementById('Sprintdos');
botonis2.onclick = function() {

      var respuesta2 = "<h3> Sprin 2 : Introducción al desarrollo web y construccion de paginas web </h3>" +"\n"
                       +"<ol>" + "<li>Ciclo de vida del desarrollo web y arquitectura basica cliente/ servidor/configuracion del ambiente de trabajo y configuracion Git</li>"
                       + "<li>HTML y JavaScript en el navegador</li>" + "<li>Manejos de comandos Basicos de Git en la terminal</li>" + "<li>Pruebas Unitarias</li>" +
                      "<li>GIT / resolucion de conflictos / Branching Model</li>"+"<li>DOM</li>" +"</ol>"
records.innerHTML =respuesta2;
};

var botonis3= document.getElementById('Sprinttres');
botonis3.onclick = function() {

      var respuesta3 = " No hay lecciones (Todavía) "
records.innerHTML =respuesta3;
};

var envio = document.getElementById("Rpta");
envio.onclick =function(){

  var resp1 = "Expresadas y Declaradas";
  var resp2 = "pop";
  var resp3 ="propiedades y valores";

  var preg1 = document.getElementById('pa').value;
  var preg2_2 = document.getElementById('pe').value;
  var preg3_3 = document.getElementById('pi').value;

  if((preg1== resp1) && (preg2_2== resp2) && (preg3_3 == resp3)){
      alert( "3 Correctas");
  } else {
    alert( "0 Correctas");
  }
}
