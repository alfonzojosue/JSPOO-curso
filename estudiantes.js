class Student{
    constructor({
        name,
        age,
        EscueladeEstudio = [],
        cursosAprobados = [],
        twitter = undefined,
        facebook = undefined,
        instagram = undefined,

    }){
        this.name = name;
        this.age = age;
        this.EscueladeEstudio = EscueladeEstudio;
        this.cursosAprobados = cursosAprobados;
        this.socialMedia = {
            twitter,
            facebook,
            instagram,
        }
    }

}

const willison = new Student({
    name : "Willison",
    age :  26,
    EscueladeEstudio : [
        "Escuela de Desarrollo Web"
    ],

    cursosAprobados : [
        "Curso gratuito de programacion basica",
        "Curso Basico De HTML y CSS",
        "Curso Avanzado de HTML y CSS",
    ],

    twitter : "willison_thc" 
}
    
);