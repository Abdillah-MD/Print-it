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
let i = 1 
console.log(slides[i])


// Récupérer les élements qui se trouvent dans le banner 
let bannerImg = document.querySelector("#banner .banner-img")
console.log(bannerImg)
let dot = document.querySelectorAll(".dots .dot")
let bannerTxt = document.querySelector("#banner p")



/////////////////////////// Mes fonctions /////////////////////
// Repérer la flèche gauche du slider
let flecheGauche = document.querySelector("#banner .arrow_left")
console.log(flecheGauche)


flecheGauche.addEventListener("click", () => {
	if (i > 0) {
        i--
    } else {
        i = slides.length - 1
    }
    
    bannerImg.src = './assets/images/slideshow/' + slides[i].image
    bannerTxt.innerHTML = `<p>${slides[i].tagLine}</p>`
	
	console.log("Vous avez cliqué sur la flèche gauche")
})

// Repérer la flèche droit du slider
let flecheDroit = document.querySelector("#banner .arrow_right")
console.log(flecheDroit)
console.log(i)
flecheDroit.addEventListener("click", () => {
	bannerImg.src = './assets/images/slideshow/'+ slides[i].image
	bannerTxt.innerHTML = `<p> ${slides[i].tagLine}</p>`
	i++
	console.log(i + " " + bannerImg + " " + bannerTxt)

	if (i >= slides.length) {
		i= 0
	}	
	console.log("Vous avez cliqué sur la flèche droit")
})
