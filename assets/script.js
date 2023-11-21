const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
let i = 0 
console.log(slides[i])


// Récupérer les élements qui se trouvent dans le banner 
let bannerImg = document.querySelector("#banner .banner-img")
console.log(bannerImg)
let dots = document.querySelector(".dots")
let bannerTxt = document.querySelector("#banner p")

const affichage = (index) => {
        bannerImg.src = './assets/images/slideshow/' + slides[index].image
        bannerTxt.innerHTML = `<p>${slides[index].tagLine}</p>`
}

affichage(i)

/////////////////////////// Mes fonctions /////////////////////
// Repérer la flèche gauche du slider
let flecheGauche = document.querySelector("#banner .arrow_left")
console.log(flecheGauche)
flecheGauche.addEventListener("click", () => {
	i-- 
	if (i === -1) {i = slides.length - 1}
	affichage(i)

	console.log("Vous avez cliqué sur la flèche gauche." + " i = " + i)
})

// Repérer la flèche droite du slider
let flecheDroit = document.querySelector("#banner .arrow_right")
console.log(flecheDroit)
console.log(i)
flecheDroit.addEventListener("click", () => {
	i++
	if (i === slides.length) {i = 0}
	affichage(i)

	console.log("Vous avez cliqué sur la flèche droite." + " i = " + i)
})

// Ecouter & Intéragir avec les dots 
let dot = document.createElement("div")

for (let nb = 0; nb < slides.length; nb++ ) {
	dot = document.createElement("div")
	dot.className = "dot"
	dots.appendChild(dot)
	console.log(dot)
}

let nbDot = document.querySelectorAll(".dot")
console.log(nbDot)

nbDot.addEventListener("click", () => {
	nbDot[i] = slides[i]
	console.log("vous avez cliqué sur " + nbDot)
})