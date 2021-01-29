import React, {useState, useEffect} from "react";
import Axios from "axios";
import Error from "../error/Error";
import {useParams} from "react-router-dom";
import Pagination from "./pagination/Pagination";
import List from "./list/List";

function ResourceDetail () {
    // On récupère les paramètres d'url resourceName et page définis dans App.js à l'aide du hook propre au routeur useParams()
    const {resourceName, page} = useParams();
    // On défini l'url de base à requêter composée à l'aide du paramètre d'url
    const baseUrl = "https://swapi.dev/api/" + resourceName + "/?page=" + page;
    // On défini une variable response qui est équivalent aux états dans les classes, on défini également une fonction pour la modifier
    // Pour utiliser les états on fait appel au hook useState auquel on passe par défaut un objet qui est stocké dans response
    const [response, setResponse] = useState(
        {
            data: null,
            error: null,
            isLoaded: false,
            message: "Chargement en cours"
        }
    )

    function getResource() {
        // On lance la requête et selon le résultat on met à jour l'état du composant
        Axios.get(baseUrl)
        .then((response) => {
            setResponse({ 
                data: response.data,
                isLoaded: true,
                error: null,
                message: null 
            });
        })
        .catch((error) => {
            setResponse({
                data: null,
                error: error,
                isLoaded: true,
                message: "Un problème est survenu, nous ne parvenons pas à récupérer les données "
            });
        })
    }

    // Ce hook est appelé à chaque modification de l'UI, ici il remplace componentDidMount() des classes
    // Notez qu'on passe en paramètre la variable à traquer, dès qu'elle change useEffect est appelé, si tableau vide la fonction n'est appelée qu'une fois
    // Ici c'est la page qui peut éventuellement être modifiée en cliquant sur les boutons
    useEffect(() => {
            getResource();
      }, [page]);

      // A la fin de la fonction on gére les différents affichages
    if(response["isLoaded"]) {
        if(response["error"]) {
            return(
                <Error message={response["message"]} />
            );
        }
        else {
            return(
                <section>
                    <h2>Detail of the {resourceName} resource</h2>
                    <List entries={response.data.results}/>
                    <Pagination resourceName={resourceName} page={page} next={response.data.next} previous={response.data.previous}/>
                </section>
            ); 
        } 
    }
    return (
        <p>{response["message"]}</p>
    );  
}

export default ResourceDetail;