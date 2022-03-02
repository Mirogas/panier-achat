import './App.scss';

import Entete from './Entete';
import ListeProduits from './ListeProduits';
import PiedPage from './PiedPage';
import ListeProduits from './ListeProduits';
import Acceuil from './Accueil';
import Histoire from './Histoire';

import {useEffect, useState} from 'react';
import {Routes, Route} from 'react-router-dom';


function App() {
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

  

  return (
    <div className="App">
      <Entete panier={panier} test="Allo Props" />
      <Routes>
        <Route path='/' element={<Acceuil/>}></Route>
        <Route path='/notre-histoire' element={<Histoire/>}></Route>
        <Route path='/nos-produits' element={<ListeProduits etatPanier={etatPanier}/>}></Route>
      </Routes>
      <PiedPage />
    </div>
  );
}

export default App;
