import './Entete.scss';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import Badge from '@mui/material/Badge';

export default function Entete(props) {

    // props contient l'objet panier ou sont stockés les items du panier de l'utilisateur
    // console.log(props);

    return (
        <header className="Entete">
            <h1>Magasin général</h1>
            <nav>
                <a href="#">
                    <Badge badgeContent={Object.values(props.panier).length} color="primary">
                        <ShoppingCartSharpIcon/>
                    </Badge>
                </a>
                <a href="#">Contactez-nous</a>
            </nav>
        </header>
    );
}