document.getElementById("propuestaEnlace").addEventListener("click", function(event) {
    event.preventDefault(); // Evitar el comportamiento por defecto del enlace

    let respuesta = confirm("¿Quieres ser mi novia? 💍💖");

    if (respuesta) {
        alert("¡Sí! Graacias por hacerme el hombre más feliz del mundo te adoro y creeme que es una de las dos formas que tengo para ti gracias por darme el si  ❤️ 😍");
    } else {
        alert("Tienes que serlo bbe aunque no quieras amor jsjs 😊");
    }
});
