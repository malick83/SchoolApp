//RECUPERATION DES ÉLÉMENT DU FORMULAIRE
const ideeForm = document.querySelector("form")
const inputPrenom = document.querySelector("input#prenom")
const inputNom = document.querySelector("input#nom")
const inputBio = document.querySelector("textarea#bio")
const selectNiveau = document.querySelector("select#mesNiveau")
const creationCarte = document.querySelector("#mesCartes")

// var myTime = new Date();
varMesId = 0;
/////

////
const inputModify = document.querySelector("#NomMod")


//Fonction de création de cartes

function createCard(leTableau){

    // const prenomSaisi = inputPrenom.value;
    // const nomSaisi = inputNom.value;
    // const bioSaisi = inputBio.value;
    // const niveauSaisi = selectNiveau.selectedOptions[0].value

    //CRÉATION DES CARTES
    const newArticle = document.createElement("article")
    newArticle.setAttribute("id", `article-id-${varMesId}`)
    newArticle.style.paddingLeft = "12px"
    newArticle.style.paddingRight = "12px"
    newArticle.style.paddingTop = "12px"
    newArticle.style.paddingBottom = "12px"
    newArticle.style.width = "455px"
    newArticle.style.height = "190px"
    newArticle.style.display = "flex";
    newArticle.style.flexDirection = "row"
    newArticle.style.justifyContent = "space-around"
    newArticle.style.borderRadius = "10px"
    newArticle.style.boxShadow = "10px 8px 34px 6px rgba(185, 181, 181, 0.685)" 
    newArticle.style.marginBottom = "25px"


    const newImg = document.createElement("img")
    newImg.setAttribute("src", "images/photo-profil.png")
    newImg.classList.add(`image-profil-${varMesId}`)
    newImg.style.width = "100px"
    newImg.style.height = "90px"
    newImg.style.margin = "auto"
    newArticle.appendChild(newImg)

    //Premier Div
    const newDIv1 = document.createElement("div")
    newDIv1.setAttribute("id", `text-bio-${varMesId}`)
    newDIv1.style.marginLeft = "43px"
    newDIv1.style.marginRight = "23px"
    newDIv1.style.display = "flex";
    newDIv1.style.flexDirection = "column"
    newDIv1.style.justifyContent = "space-around"

    const newInput = document.createElement("input")
    const newInputNom = leTableau[0] +" "+leTableau[1]
    newInput.setAttribute("id", `NomMod-${varMesId}`)


    newInput.style.width = "220px"
    newInput.style.border = "0px"
    newInput.style.marginTop = "20px"
    newInput.style.fontSize = "20px"
    newInput.style.fontWeight = "bolder"
    newInput.setAttribute("type", "text")
    newInput.setAttribute("value", newInputNom)

    const newTextarea = document.createElement("textarea")
    newTextarea.style.width = "100%"
    newTextarea.style.textAlign = "justify"

    
    newTextarea.setAttribute("id", `bioCarte-${varMesId}`)
    newTextarea.setAttribute("name", "article_content")
    newTextarea.setAttribute("cols", "30")
    newTextarea.setAttribute("rows", "5")
    newTextarea.textContent = leTableau[2];
    newDIv1.appendChild(newInput);
    newDIv1.appendChild(newTextarea)
    // console.log(creationCarte);

    //Deuxième Div
    const newDIv2 = document.createElement("div")
    newDIv2.setAttribute("id", `space-modify-${varMesId}`)
    newDIv2.classList.add("space-modify-btn")

    newDIv2.style.display = "flex";
    newDIv2.style.flexDirection = "column"
    newDIv2.style.justifyContent = "space-between"

    const newButton = document.createElement('button')
    newButton.style.borderRadius = "20px"
    newButton.style.backgroundColor = "white"
    newButton.style.border = "0px"


    const newImg1 = document.createElement("img")
    newImg1.setAttribute("usemap", "#redirection-picture")
    newImg1.setAttribute("src", "images/pen-modify.png")
    newImg1.classList.add("image-modification")
    newButton.appendChild(newImg1)
    newDIv2.appendChild(newButton)

    const newMap = document.createElement("map")
    newMap.setAttribute("name", "redirection-picture")
    newMap.setAttribute("id", "btnModify")

    const newArea = document.createElement("area")
    newArea.setAttribute("href", "#")
    newArea.setAttribute("id", "btnModifyArea")
    newArea.setAttribute("shape", "circle")
    newArea.setAttribute("coords", "1,1,50")
    newArea.setAttribute("target", "_self")

    newMap.appendChild(newArea)
    newDIv2.appendChild(newMap)

    const newButton1 = document.createElement('button')
    const newImg2 = document.createElement("img")
    newImg2.setAttribute("src", "images/close.png")
    newImg2.style.width = "30px"
    newImg2.style.marginLeft = "24px"
    newButton1.style.borderRadius = "20px"
    newButton1.style.backgroundColor = "white"
    newButton1.style.border = "0px"
    newButton1.appendChild(newImg2)
    newDIv2.appendChild(newButton1)

    const newInput1 = document.createElement("input")
    newInput1.setAttribute("id", "monNiveauID")
    newInput1.setAttribute("value", leTableau[3])
    newDIv2.appendChild(newInput1)

    newArticle.appendChild(newDIv1)
    newArticle.appendChild(newDIv2)

    creationCarte.appendChild(newArticle)
    varMesId = varMesId + 1

    newMap.addEventListener("click", (event) => {
        newInput.focus()
        console.log(event);
    })
    
    newInput.addEventListener("keyup", (event) => {
            newTextarea.focus()
    })
    
    newTextarea.addEventListener("keyup", (event) => {
            newInput1.focus()
    })

    newInput1.addEventListener("keyup", (event) => {
            inputPrenom.focus()
    })

    newButton1.addEventListener("click", (event) => {
        console.log(event);
        newArticle.remove()
    })

}



//

// RECUPERATION DES INFORMAIONS DU FORMULAIRE
ideeForm.addEventListener("submit", (event) => {
    event.preventDefault()
    const prenomSaisi = inputPrenom.value;
    const nomSaisi = inputNom.value;
    const bioSaisi = inputBio.value;
    const niveauSaisi = selectNiveau.selectedOptions[0].value
    console.log(niveauSaisi);
    const monTableau = [prenomSaisi, nomSaisi, bioSaisi, niveauSaisi]


    createCard(monTableau)





    // console.log(creationCarte.children[1]);
})














