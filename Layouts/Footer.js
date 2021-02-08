
import style from './../public/css/Layouts/Footer.module.css'

export default function Footer(){
    return(
        <footer className={style.footer}>          
            <div className={style.rights_author + " col-lg-12 col-md-12 col-sm-12"}>
                <span className={style.rights}> &copy; {new Date().getFullYear()} ETICES Dynamics - Tous droits réservés </span>

                <span className={style.author}> Réalisé par ETICES Dynmics</span>

            </div>
        </footer>
    );
}