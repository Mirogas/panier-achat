import './Produit.scss';
import BtnAjoutPanier from './BtnAjoutPanier';
import { requirePropFactory } from '@mui/material';

export default function Produit(props){

    const[panier, setPanier] = props.etatPanier;

    let qte =0;

    // si le produit est enregistré dans le panier, ajuster la qte à la qte présente dans le panier pour la passer dans le badge
    if(panier[props.pid]){
        qte = panier[props.pid].qte;
    }

    function ajouterAuPanier(){
        // augmenter la qte du produit si son pid est déja enregistré comme une clée dans l'objet panier
        if(panier[props.pid]){
            panier[props.pid].qte++;
        }
        // sinon ajouter une clee qui correspond au pid du produit dans l'objet panier qui contient la qte et le prix
        else{
            panier[props.pid] = {
                prix: props.prix,
                qte: 1        
            }
        };

        // vérifier l'état de l'objet panier
        // console.log("Panier apres ajout: ", panier);

        // notifier react que le panier a changé :
        // il faut cloner l'objet pour que React detecte que le panier à changer (3 methodes)

        // setPanier(JSON.parse(JSON.stringify(panier)));

        // let clonePanier = Object.assign({},panier);

        let clonePanier={...panier};
        setPanier(clonePanier);


    }

    return(
        <article className="Produit">
            <img src={require("../public/images-produits/"+ props.pid + ".webp")} alt={props.nom} />
            <div className="titre">{props.nom}</div>
            <div className="prix">{props.prix}</div>
            <BtnAjoutPanier qte={qte} onClick={ajouterAuPanier}/>
        </article>
    )
}