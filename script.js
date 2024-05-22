console.log('peticiones')

// Esta forma funciona parecido al onclick pero hay más posibilidades de eventos que se pueden agregar en el listener-
// crear la const para pasar la funcion como parametros se crea un callback.
const obtener = () => {
    console.log('obtener')
    
}
const buttonObtener = document.getElementById("button-obtener")
//agregar evento al boton
//buttonObtener.addEventListener("click", obtener)
//la siguiente es la conocida como "funcion anonima", similar a la anterior pero con la funcion flecha.
//la funcion flecha nos ayuda a agrupar información en una constante básicamente para reutilizarlo.
//otra funcion es recibir parametros para cambiar comportamiento y devolver respuestas.  
buttonObtener.addEventListener("click", async () => {
    console.log('obtener')
    const pokemonData = await obterPokemon()

    const pokemonArticle = document.getElementById('pokemon')
    //para crear elementos
    const h3 = document.createElement('h3')
    //le asigna un texto al elemento
    h3.innerText = pokemonData.name
    //agregar un elemento como hijo/osea lo metera dentro de la etiqueta
    pokemonArticle.appendChild(h3)
    //Crear elemento img
    const img = document.createElement('img')
    img.src = pokemonData.sprites.front_default
    pokemonArticle.appendChild(img)
})
const obterPokemon = async () => {
    let nombrePokemon= "pikachu" 
    /* en fecth se pone la url hacia la API, los datos que nos trae fetch no,
     nos lo trae en formato JSON, toca crear la otra constante para convertirla, a
     wait se pone antes para que le indique que espere*/
     //siempre el await va con la funcion asincrona (async) arriba. 
     //las siguientes dos filas hacen lo mismo pero la segunda 
    //const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`)
    //La respuesta no llega en json, por ende se realiza el siguiente codigo para "convertirlo a Json"
    const data = await respuesta.json()
    console.log(data)
    return data
    
}

//hay que ejecutar la función para que funcione, arriba estaba declarada, pero toca ejecutarla acontinuación
obterPokemon()

