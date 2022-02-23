import './Entete.scss';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import Badge from '@mui/material/Badge';

export default function Entete({panier}) {

    // props contient l'objet panier ou sont stockés les items du panier de l'utilisateur
    // console.log(props);

    let nbTotalQte = Object.values(panier).reduce((acc, article) => acc+article.qte, 0);

    return (
        <header className="Entete">
            <h1>Magasin général</h1>
            <nav>
                <a href="#">
                    <Badge badgeContent={nbTotalQte} color="primary">
                        <ShoppingCartSharpIcon/>
                    </Badge>
                </a>
                <a href="#">Contactez-nous</a>
            </nav>
        </header>
    );
}