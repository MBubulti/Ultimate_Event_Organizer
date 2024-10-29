// Ce fichier contient les  scripts communs//

//Mise en place un bouton d'identification utilisateur//
//Etape 1 - Identifier lorsqu'un clic est effectué sur le bouton
let btnConnexion = document.getElementById("btnConnexion")
btnConnexion.addEventListener("click", ()=>{
    console.log("CLICK")
})

//Etape 2 -  Reconnaitre les éléments renseignés en identifiant & mdp de connexion
let input_identifiant = document.getElementById("nomConnexion")
let  input_motDePasse = document.getElementById("motDePasse")
const btnEnvoiConnexion = document.querySelector("form")
btnEnvoiConnexion.addEventListener("submit",  (connexion) =>{
    connexion.preventDefault() //prévention rechargement de la page au  submit
    let identifiant = input_identifiant.value
    let motDePasse = input_motDePasse.value
    console.log(identifiant + motDePasse)
    console.log("pas de rechargement")
})


