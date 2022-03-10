// import du style
import './App.scss';

// imports des composantes de pages et des autres pages de l'app
import Entete from './Entete';
import ListeProduits from './ListeProduits';
import PiedPage from './PiedPage';
import Acceuil from './Accueil';
import Histoire from './Histoire';

// import des modules React pour la navigation entre les pages
import { useEffect, useState } from 'react';
import {Routes, Route} from 'react-router-dom';

// import des modules pour l'authentification
import {signInWithPopup, onAuthStateChanged} from "firebase/auth";
import {authFirebase, authGoogle} from "./firebase/init.js";

function App() {

  // état de l'utilisateur connecté
  const [util, setUtil] = useState(null);

  // État React pour gérer un panier d'achats
  const etatPanier = useState(() => JSON.parse(window.localStorage.getItem('panier-4pa')) || {});
  // Remarquez que useState retourne un tableau : 
  // Le premier élément du tableau représente le contenu de l'état
  const panier = etatPanier[0]; 
  // Le deuxième élément est une fonction qui sert à réécrire l'état
  // const setPanier = etatPanier[1]; 
  // Donc, alternativement avec destructuration de tableau
  // const [panier, setPanier] = useState({});

  // "Persister" (sauvegarder) le panier dans localStorage
  // Utiliser le HOOK useEffect pour exécuter ce code de façon controlée
  
  useEffect(() => window.localStorage.setItem('panier-4pa', JSON.stringify(panier)), [panier]);

  // déclenche le processus d'authentification
  function connexion(){
    signInWithPopup(authFirebase, authGoogle).then(
      objUserGoogle => setUtil(objUserGoogle.user)
    );
  }

  // attacher un observateur de changement d'état de connexion (gestionnaire d'évenement de firebase authentication)
  useEffect(()=> onAuthStateChanged(authFirebase, (user) => setUtil(user)), []);

  return (
    <div className="App">
      {
        util?
        <> {/* balise vide permise par react pcq il aime pas avoir des composants sans balise parente */}
          <Entete util={util} setUtil={setUtil} panier={etatPanier[0]} />
            <Routes>
              <Route path='/' element={<Acceuil/>}></Route>
              <Route path='/notre-histoire' element={<Histoire/>}></Route>
              <Route path='/nos-produits' element={<ListeProduits etatPanier={etatPanier}/>}></Route>
            </Routes>
          <PiedPage />
        </>
        :
        <button onClick={connexion}>Connexion</button>
      }
    </div>
  );
}

export default App;
