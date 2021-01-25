import React from "react";
import {Link} from "react-router-dom";

// Composant qui affiche au besoin les boutton de page suivante et précédente
// Attend le nom de la ressource, la page actuelle, la page suivante et précédente
function Pagination(props) {

    // Par défaut les élements DOM sont à null donc rien de s'affiche
    let nextPage = null;
    let previousPage = null;
    // Si une page précédente existe on crée le lien vers l'url
    if(props.previous) {
        // On recrée l'url en décrémentant la page de 1
        let previousUrl = "/resource/" + props.resourceName + "/page/" + (parseInt(props.page) - 1);
        previousPage = <Link to={previousUrl} className="btn btn-dark text-warning mx-2">Précédent</Link>
    }
    // Si une page suivante existe on crée le lien vers l'url
    if(props.next) {
        // On recrée l'url en incrémenant la page de 1
        let nextUrl = "/resource/" + props.resourceName + "/page/" + (parseInt(props.page) + 1);
        nextPage = <Link to={nextUrl} className="btn btn-dark text-warning mx-2">Suivant</Link>
    }
    return(
        <div className="mt-3 text-center">
            {previousPage}
            {nextPage}
        </div>
    );
}

export default Pagination