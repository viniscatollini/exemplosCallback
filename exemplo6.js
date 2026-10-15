// EXEMPLO 06 - forEach usa callback para percorrer um arra...

// Array: uma lista com três elementos.
const animais = ['Gato', 'Cachorro', 'Coelho'];

// Este callback recebe UM animal por vez.
function mostrarAnimal(animal) {
    console.log('Animal:', animal);
}

// forEach executa mostrarAnimal automaticamente para cada...
// Sem parênteses: passamos a função, não o resultado dela.
animais.forEach(mostrarAnimal);

// Outra maneira de escrever a mesma ideia: arrow function.
animais.forEach((animal, indice) => {
    // indice começa em 0; por isso somamos 1 para mostrar 1...
    console.log(`Posição ${indice + 1}: ${animal}`);
});

// IMPORTANTE: forEach não cria automaticamente um novo arr...
