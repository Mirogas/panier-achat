import './Produit.scss';
import BtnAjoutPanier from './BtnAjoutPanier';

export default function Produit(props){
    let panier = props.panier;
    let setPanier=props.setPanier;
    let qte =0;
    if(panier[panier.pid]){
        qte = panier[panier.pid].qte;
        console.log("quantité du produit : ", panier.pid, " : ", qte);
    }

    function ajouterAuPanier(){
        panier[props.pid] = {
            prix: props.prix,
            qte: 1
        };
        console.log("Panier : ", panier);
        // notifier react que le panier a changer
        setPanier(panier);

    }

    return(
        <article className="Produit">
            <img src={"images-produits/"+ props.pid + ".webp"} alt={props.nom} />
            <div className="titre">{props.nom}</div>
            <div className="prix">{props.prix}</div>
            <BtnAjoutPanier qte={qte} onClick={ajouterAuPanier}/>
        </article>
    )
}