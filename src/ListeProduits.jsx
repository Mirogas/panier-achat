import "./ListeProduits.scss";
import Produit from "./Produit.jsx";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import {bdFirestore} from "./firebase/init.js";


export default function ListeProduits({etatPanier}){

    const[produits, setProduits] = useState([]);

    useEffect(function(){
        // lire tous les documents de la collection MagGen-Produits
        getDocs(collection(bdFirestore,'MagGen-produits')).then(
            qs => setProduits(qs.docs.map(doc => ({id: doc.id, ...doc.data()})))
        );

    }, []);

    return(
        <section className="ListeProduits">
            <h2>Nos produits</h2>
            <div className="produits">

                {/* retourne un tableau qui contient des composants produits avec les paramètres importés de la base de données firebase*/}
                {produits.map(produit => <Produit key={produit.id} nom={produit.nom} prix={produit.prix} pid={produit.id} etatPanier={etatPanier}/>)}

            </div>
        </section>
    );
};