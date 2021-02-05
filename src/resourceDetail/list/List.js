import React from "react";
import {Link} from "react-router-dom";

// Composant qui affiche au besoin les boutton de page suivante et précédente
// Attend le nom de la ressource, la page actuelle, la page suivante et précédente
function List(props) {

    const entriesList = props.entries.map((value, index) =>
            <li key={index} className="list-group-item bg-dark border-bottom border-secondary">
                <Link 
                    to={
                        {
                        pathname: "/resource/" + props.resourceName + "/detail",
                        state: {detailurl: value.url}
                        }
                       } 
                    className="text-warning" href=""
                >
                    {value[Object.keys(value)[0]]}
                </Link>
            </li>
        );

    return(
        <ul className="list-group">
            {entriesList}
        </ul>
    );
}

export default List