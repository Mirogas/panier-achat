import { useState } from 'react';
import './App.scss';
import Entete from './Entete';
import ListeProduits from './ListeProduits';
import PiedPage from './PiedPage';

function App() {

  // état de l'utilisateur connecté
  const [util, setUtil] = useState(true);

  // retourne un tableau avec la var etatPanier et une fonction pour la mettre a jour dynamiquement
  const etatPanier = useState({});

  console.log("L'état panier : ", etatPanier[0]);


  // déclenche le processus d'authentification
  

  return (
    <div className="App">
      {
        util?
        <> {/* balise vide permise par react pcq il aime pas avoir des composants sans balise parente */}
          <Entete panier={etatPanier[0]} />
          <ListeProduits etatPanier={etatPanier}/>
          <PiedPage />
        </>
        :
        <button>Connexion</button>
      }
    </div>
  );
}

export default App;
