import './Entete.scss';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import Badge from '@mui/material/Badge';

// Remarquez la destructuration d'objet
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
export default function Entete({panier}) {
    return (
        <header className="Entete">
            <h1>Magasin général</h1>
            <nav>
                <Badge badgeContent={Object.values(panier).reduce((acc, article) => acc+article.qte, 0)} color="secondary">
                    <ShoppingCartSharpIcon/>
                </Badge>
                <a href="#">Contactez-nous</a>
            </nav>
        </header>
    );
}