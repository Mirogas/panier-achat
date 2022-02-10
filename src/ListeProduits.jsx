import "./ListeProduits.scss";
import Produit from "./Produit.jsx";
import lesProduits from "./data/produits.json";

export default function articlesProduits(){
    // console.log("la var lesProduits : ", lesProduits);

    // // methode #1 : prog imperative avec un boucle for********************************************
    // let composantsProduits = [];
    // // parcourir le tableau lesProduits et générer un composant produit pour chq élément
    // for(let i=0; i<lesProduits.length; i++){
    //     composantsProduits.push(<Produit nom={lesProduits[i].nom} prix={lesProduits[i].prix} pid={lesProduits[i].id}/>);
    // }
    // // ensuite mettre le tableau composantsProduits dans la div

    // méthode #2 : exemple fonction avec map()************************************************************
    let notes = [32.3, 44.67, 87.76, 76.88];

    // map retourne un nouveau tableau avec chq élément de l'ancien tableau qui a été transformé sous le nom "uneNote" 
    let notesArrondies = notes.map(uneNote => uneNote.toFixed()-0);

    // est équivalent a cette fonction:
    // let notesArrondies = notes.map(function(uneNote){
    //     return uneNote.toFixed();
    // });

    // console.log("le tableau des notes arrondies : ", notesArrondies);

    return(
        <section className="ListeProduits">
            <h2>Nos produits</h2>
            <div class="produits">

                {/* retourne un tableau qui contient des composants produits avec les paramètres importés du produits.json(lesProduits) */}
                {
                    lesProduits.map(produit => <Produit key={produit.pid} nom={produit.nom} prix={produit.prix} pid={produit.id}/>)
                }

                {/* mettre un tableau qui contient des composants comme <Produit/>, ils sont automatiquement affichés dans le html */}
                {/* {composantsProduits} */}


                {/* <Produit nom="Chandail beige" prix="16.50" pid="prd0001"/>
                <Produit nom="Chandail bleu rayé" prix="14.99" pid="prd0002"/>
                <Produit nom="Chandail bleu" prix="12.25" pid="prd0003"/> */}
            </div>
        </section>
    )
}