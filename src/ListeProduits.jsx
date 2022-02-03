import "./ListeProduits.css";

export default function articlesteProduits(){
    let a = 5;
    let b = a^4;
    return(
        <section className="produits">
            <h2>Nos produits</h2>
            <div>
                <article>
                    <img src="" alt="" />
                    <div className="titre">Titre du produit</div>
                    <div className="prix">149.99$</div>
                    <button>Ajouter au panier</button>
                </article>
                <article>Produit 2</article>
                <article>Produit 3</article>
                <article>Produit 4</article>
                <article>Produit 5</article>
            </div>
        </section>
    )
}