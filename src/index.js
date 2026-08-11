import { divContent } from "./createHtmlFromJs.js";
import { divWholePage } from "./menu.js";

// document.body.appendChild(divContent);

const content = document.getElementById("content")
content.appendChild(divContent)

const menuBtn = document.getElementById("#menuBtn")

menuBtn.addEventListener("click", () => {
    content.replaceChild();
    content.appendChild(divWholePage)
})



console.log('hi');
alert('hello')


// // src/index.js
// import odinImage from "./odin.png";

// const image = document.createElement("img");
// image.src = odinImage;

// document.body.appendChild(image);
