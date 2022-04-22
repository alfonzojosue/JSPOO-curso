class Escuelas {
    constructor({
        nombre,
        cursos = [],
    }){
        this.nombre = nombre;
        this.cursos = cursos;
    }
}

const EscuelaDeProgramacionWeb = new Escuelas ({
    nombre : "Escuela de Programacion Web",
    cursos : [ 
        "Curso gratuito de programacion basica",
        "Curso Basico De HTML Y CSS",
        "Curso Avanzado De HTML Y CSS",
        
    ]
})