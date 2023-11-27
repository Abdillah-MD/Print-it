const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
]

let i = 0

// Récupérer les éléments qui se trouvent dans le banner
let bannerImg = document.querySelector("#banner .banner-img")
let dotsContainer = document.querySelector(".dots")
let bannerTxt = document.querySelector("#banner p")

const affichage = (index) => {
    bannerImg.src = './assets/images/slideshow/' + slides[index].image
    bannerTxt.innerHTML = `<p>${slides[index].tagLine}</p>`
}

affichage(i)

// Repérer la flèche gauche du slider
let flecheGauche = document.querySelector("#banner .arrow_left")
flecheGauche.addEventListener("click", () => {
    i--
    if (i === -1) {
        i = slides.length - 1
    }
    affichage(i)
    updateDots()
})

// Repérer la flèche droite du slider
let flecheDroit = document.querySelector("#banner .arrow_right")
flecheDroit.addEventListener("click", () => {
    i++
    if (i === slides.length) {
        i = 0
    }
    affichage(i)
    updateDots()
})

// Initialiser les dots
for (let index = 0; index < slides.length; index++) {
    let dot = document.createElement("div")
    dot.className = "dot"
    dotsContainer.appendChild(dot)

    // Écouter & interagir avec les dots
    dot.addEventListener("click", () => {
        i = index
        affichage(i)
        updateDots()
    })
}

let nbDot = document.querySelectorAll(".dot")
nbDot[i].classList.add("dot_selected")

// Mettre à jour les dots
function updateDots() {
    nbDot.forEach((dot, index) => {
        if (index === i) {
            dot.classList.add("dot_selected")
        } else {
            dot.classList.remove("dot_selected")
        }
    })
}
