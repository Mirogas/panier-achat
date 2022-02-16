import { useState } from 'react';
import './App.scss';
import Entete from './Entete';
import ListeProduits from './ListeProduits';
import PiedPage from './PiedPage';

function App() {

  const etatPanier = useState({});

  // le panier est dans la 1ere position de etatPanier
  const panier = etatPanier[0];

  // fonction définie par react pour modifier le panier
  const setPanier = etatPanier[1];

  console.log("L'état panier : ", panier);

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

  return (
    <div className="App">
      <Entete panier={panier} />
      <ListeProduits panier={panier} setPanier={setPanier}/>
      <PiedPage />
    </div>
  );
}

export default App;
