// divWholePage
//h1 menu 


//divBlockOne
//h2 beverages
//HoneyMilkDiv
//h3
//p
//h3
//img

//WaterDiv
//h3
//p
//h3     
//img

//divBlockTwo
//h2 Main Dishes
//camelDealDiv
//h3
//p
//h3
//img

// VeganDealDiv
//h3
//p
//h3     
//img

const divWholePage = document.createElement("div");
const menuH1 = document.createElement = ("h1")

const sectionOneDiv = document.createElement("div");
const h2Beverages = document.createElement("h2");
const honeyMilkDiv = document.createElement("div")
const honeyMilkHeading = document.createElement("h3")
const honeyMilkContext = document.createElement("p")
const honeyMilkPrice = document.createElement("h3")
const honeyMilkImage = document.createElement("IMG");

import honeyMilk from "./honeyMilk.png";
honeyMilkImage.src = honeyMilk;

const waterDiv = document.createElement("div")
const waterHeading = document.createElement("h3")
const waterContext = document.createElement("p")
const waterPrice = document.createElement("h3")
const waterImage = document.createElement("IMG");

divWholePage.appendChild(menuH1);

divWholePage.appendChild(sectionOneDiv)
sectionOneDiv.appendChild(h2Beverages)

sectionOneDiv.appendChild(honeyMilkDiv)
honeyMilkDiv.appendChild(honeyMilkHeading)
honeyMilkDiv.appendChild(honeyMilkContext)
honeyMilkDiv.appendChild(honeyMilkPrice)
honeyMilkDiv.appendChild(honeyMilkImage)

sectionOneDiv.appendChild(waterDiv)
waterDiv.appendChild(waterHeading)
waterDiv.appendChild(waterContext)
waterDiv.appendChild(waterPrice)
waterDiv.appendChild(waterImage)

import waterImg from "./water.png";
waterDiv.src = waterImg;

export { divWholePage };