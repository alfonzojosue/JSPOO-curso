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

 

 //Instancia de prototipo

 function Student(name, age, cursosAprobados){

    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;


 }

 Student.prototype.aprobarCursos = function (nuevoCursito){
     this.cursosAprobados.push(nuevoCursito);
 }

 const Anita = new Student(
     "Anita",
     26,
     [
         "Curso de PHP Avanzado",
         "Curso de maquetacion movil",
         "Curso de app"
     ]
 )

 Anita.aprobarCursos("Curso Intermedio e HTML Y css");

 //Clases y sintexis de prototipos

 class Student2{
     constructor({
         name, 
         age, 
         cursosAprobados,
         email
        }
        ){
         
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
        this.email = email;
     }

    aprobarCursos(nuevoCursito){
        this.cursosAprobados.push(nuevoCursito);
    }
 }

 const willison = new Student2 ({
     name : "Willison",
     email : "16-00436@usb.ve",
     age : 26,
     cursosAprobados :["Curso de programacion Orientada a objetos."]
    }
 )



