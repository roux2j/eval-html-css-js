const response = [
    {
        _id:"a001",
        nomProduit:"Women hot collection",
        prix : "29.00 $",

},
{
    _id:"a002",
    nomProduit:"Awesome Pink Show",
    prix : "29.00 $",
},
{
    _id:"a003",
    nomProduit:"Awesome bags Collection",
    prix : "29.00 $",
},
{
    _id:"a004",
    nomProduit:"Women pants collections",
    prix : "29.00 $",
}
]

const idProduitSelectionner =  response.find((element) => element._id === id);
console.log(idProduitSelectionner)


// selection de la classe où je vais injecter le code html
const positionElement2 = document.querySelector(".container-page-produit")

// La structure html pour l'affichage du produit séléctionné

const structureProduit2 =`<ul>
    <li>Nom du produit : <span>${idProduitSelectionner.nomProduit}</span></li>
<li>prix : <span>${idProduitSelectionner.prix}</span></li>
</ul>`
;

// injection html dans la page produit

positionElement2.innerHTML = structureProduit2;

// ------------ La gestion du panier ------------
// séléction du bouton ajouter l'article au panier
const btn_envoyerPanier = document.querySelector("#btn-envoyer");
console.log(btn_envoyerPanier)



// écouter le panier et envoyer le panier
btn_envoyerPanier.addEventListener("click", (event) => {
    event.preventDefault();

    // Récupération des valeurs de l'article
    let optionsArticle ={
        id_ProduitSelectionner : idProduitSelectionner._id,
        nomProduit : idProduitSelectionner.nomProduit,
        prix : idProduitSelectionner.prix
    }

    console.log(optionsArticle);
});









    
