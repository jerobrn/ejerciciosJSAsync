const obtenerPersonaFake = require("./library");

// Codigo funcion callback

person = (persona) => {
    const personObj = {
        nombre: `${persona.results[0].name.first} ${persona.results[0].name.last}`,
        genero: persona.results[0].gender,
        pais: persona.results[0].location.country,
        estado: persona.results[0].location.state,
        ciudad: persona.results[0].location.city,
        calle: persona.results[0].location.street.name,
        nro: persona.results[0].location.street.number,
        cp: persona.results[0].location.postcode,
        email: persona.results[0].email,
        nombreUsuario: persona.results[0].login.username,
        password: persona.results[0].login.password
    }
  
        console.log(personObj) 
    }



// Fin codigo

// Usar la funcion obtenerPersonaFake(funcionCallback) en donde funcionCallback es una función que recibe el objeto persona extraido
obtenerPersonaFake(person);