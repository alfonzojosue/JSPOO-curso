//Objeto literal
 const josue = {
     name : "josue",
     age : 25,
     Cursosaprobados : [
         "Curso Basico de programacion en Js",
         "Curso Avanzado de HTML Y CSS"
     ]

}

function nuevocursoaprobado(cursito){
    josue.Cursosaprobados.push(cursito);
}

nuevocursoaprobado("Curso De Maquetacion Movil")

 console.log(josue);

 