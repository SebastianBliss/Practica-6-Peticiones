console.log('peticiones')

const obterPokemon = async () => {
    /* en fecth se pone la url hacia la API, los datos que nos trae fetch no,
     nos lo trae en formato JSON, toca crear la otra constante para convertirla, a
     wait se pone antes para que le indique que espere*/
    const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu")

    const data = await respuesta.json()
    console.log(data)
}

//hay que ejecutar la función para que funcione, arriba estaba declarada, pero toca ejecutarla acontinuación
obterPokemon()
