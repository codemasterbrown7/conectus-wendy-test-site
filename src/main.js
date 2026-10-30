import { heading, intro } from "./content.js";
document.querySelector("#app").innerHTML = `<main><h1 id="heading">${heading}</h1><p>${intro}</p><a class="cta" href="#">Register interest</a></main>`;
