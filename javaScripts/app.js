//RECUPERATION DES ÉLÉMENT DU FORMULAIRE
const ideeForm = document.querySelector("form")
const inputPrenom = document.querySelector("input#prenom")
const inputNom = document.querySelector("input#nom")
const inputBio = document.querySelector("textarea#bio")
const selectNiveau = document.querySelector("select#mesNiveau")
const creationCarte = document.querySelector("#mesCartes")



// RECUPERATION DES INFORMAIONS DU FORMULAIRE
ideeForm.addEventListener("submit", (event) => {
    event.preventDefault()
    const prenomSaisi = inputPrenom.value;
    const nomSaisi = inputNom.value;
    const bioSaisi = inputBio.value;
    const niveauSaisi = selectNiveau.selectedOptions[0].value
    // console.log(niveauSaisi);


    //CRÉATION DES CARTES
    const newArticle = document.createElement("article")

    const newImg = document.createElement("img")
    newImg.setAttribute("src", "images/photo-profil.png")
    newImg.classList.add("image-profil")
    newArticle.appendChild(newImg)

    //Premier Div
    const newDIv1 = document.createElement("div")
    newDIv1.setAttribute("id", "text-bio")
    const newH3 = document.createElement("h3")
    newH3.textContent = prenomSaisi +" "+nomSaisi
    const newP = document.createElement("p")
    newP.textContent = bioSaisi;
    newDIv1.appendChild(newH3);
    newDIv1.appendChild(newP)
    // console.log(creationCarte);

    //Deuxième Div
    const newDIv2 = document.createElement("div")
    newDIv2.setAttribute("id", "space-modify")
    const newImg1 = document.createElement("img")
    newImg1.setAttribute("usemap", "#redirection-picture")
    newImg1.setAttribute("src", "images/pen-modify.png")
    newImg1.classList.add("image-modification")
    newDIv2.appendChild(newImg1)

    const newMap = document.createElement("map")
    newMap.setAttribute("name", "redirection-picture")

    const newArea = document.createElement("area")
    newArea.setAttribute("href", "https://validator.w3.org/")
    newArea.setAttribute("shape", "circle")
    newArea.setAttribute("coords", "1,1,50")
    newArea.setAttribute("target", "_blank")

    newMap.appendChild(newArea)
    newDIv2.appendChild(newMap)

    const newSpan = document.createElement("span")
    newSpan.textContent = niveauSaisi
    newDIv2.appendChild(newSpan)

    newArticle.appendChild(newDIv1)
    newArticle.appendChild(newDIv2)

    creationCarte.appendChild(newArticle)


})