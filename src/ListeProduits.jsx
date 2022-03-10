import './ListeProduits.scss';
import Produit from './Produit';
import lesProduits from './data/produits.json';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from 'firebase/firestore' ;


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUZJTcQMUbUll1CQK8FfwJFs913OiqzTQ",
  authDomain: "h22-interfacesweb.firebaseapp.com",
  projectId: "h22-interfacesweb",
  storageBucket: "h22-interfacesweb.appspot.com",
  messagingSenderId: "745061141845",
  appId: "1:745061141845:web:8015468af34bf098f573dc",
  measurementId: "G-LPCPBPQQXL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialiser FireStore
const bd = getFirestore(app);

// chercher les données dans la collection MagGen-produits
bd.collection('MagGen-produits').get().then(
    reponse => reponse.forEach(
        prd => console.log('info du produit : ', prd.data())
    )
)


export default function ListeProduits({etatPanier}) {
    return (
        <section className="ListeProduits">
            <h2>Nos produits</h2>
            <div className="produits">
                {
                    lesProduits.map(p => <Produit etatPanier={etatPanier} key={p.id} nom={p.nom} prix={p.prix} pid={p.id} />)
                }
            </div>
        </section>
    );
}