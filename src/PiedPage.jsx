import './PiedPage.scss';

export default function PiedPage() {
    return (
        <footer className="PiedPage">
            <marquee scrollamount="15px" >
                &copy;{new Date().getFullYear()} - TIM Maisonneuve - Tous droits réservés
            </marquee>
        </footer>
    );
}