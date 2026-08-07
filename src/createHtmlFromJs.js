//   <!-- homepage: title, text, image


//         <h1>Al-bugatti Restaurant</h1>
//         <h2>Eat with the bugatti, get nice car view with it.</h2>
//         <img src="Al-bugatti.png" alt=""> --></img>

const divContent = document.querySelector("#content");
const h1 = document.createElement("h1");
const h2 = document.createElement("h2");
// const img = createElement("img")

h1.textContent = "Al-bugatti Restaurant";
h2.textContent = "Eat with the bugatti, get nice car view with it.";


divContent.appendChild(h1)
divContent.appendChild(h2)

export { divContent };