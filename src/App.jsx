import { useState } from 'react';
import './App.scss';
import Entete from './Entete';
import ListeProduits from './ListeProduits';
import PiedPage from './PiedPage';

function App() {

  // retourne un tableau avec la var etatPanier et une fonction pour la mettre a jour dynamiquement
  const etatPanier = useState({});

  console.log("L'état panier : ", etatPanier[0]);

  // let panier ={
  //   exemple d'objet du panier
  //   prd0003:{
  //       nom: "pinotte",
  //       prix: 5.76,
  //       qte: 1
  //   },
  //   prd0004:{
  //     nom: "pomme",
  //     prix: 33.46,
  //     qte: 22
  //   }
  // }

  const [compteur, setCompteur]=useState(0);

  return (
    <div className="App">
      <Entete panier={etatPanier[0]} />
      <ListeProduits etatPanier={etatPanier}/>
      <PiedPage />
    </div>
  );
}

export default App;
