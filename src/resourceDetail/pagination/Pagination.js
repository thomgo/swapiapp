import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";

function Pagination(props) {

    let nextPage = null;
    let previousPage = null;
    if(props.previous) {
        let previousUrl = "/resource/" + props.resourceName + "/page/" + (parseInt(props.page) - 1);
        previousPage = <Link to={previousUrl} className="btn btn-dark text-warning mx-2">Précédent</Link>
    }
    if(props.next) {
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