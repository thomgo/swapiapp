import React, {useState, useEffect} from "react";
import Axios from "axios";
import Error from "../error/Error";
import {useParams} from "react-router-dom";

function ResourceDetail () {
    // On récupère le paramètre d'url resourceName défini dans App.js à l'aide du hook propre au routeur useParams()
    const {resourceName} = useParams();
    // On défini l'url de base à requêter composée à l'aide du paramètre d'url
    const baseUrl = "https://swapi.dev/api/" + resourceName + "/";
    // On défini une variable response qui est équivalent aux états dans les classes, on défini également une fonction pour la modifier
    // Pour utiliser les états on fait appel au hook useState auquel on passe par défaut un objet qui est stocké dans response
    const [response, setResponse] = useState(
        {
            entriesList: null,
            error: null,
            isLoaded: false,
            message: "Chargement en cours"
        }
    )

    function getResource() {
        // On lance la requête et selon le résultat on met à jour l'état du composant
        Axios.get(baseUrl)
        .then((response) => {
            // On génére la liste de composants ressources
            makeEntiresList(response.data["results"])
        })
        .catch((error) => {
            setResponse({
                error: error,
                isLoaded: true,
                message: "Un problème est survenu, nous ne parvenons pas à récupérer les données "
            });
        })
    }

    // Function qui génère la liste des entrées d'une ressource demandée dans l'url et stocke les information dans la variable response
    function makeEntiresList(data) {
        const entriesList = data.map((value, index) =>
            <li key={index} className="list-group-item bg-dark border-bottom border-secondary">
                <a className="text-warning" href="">{value[Object.keys(value)[0]]}</a>
            </li>
        );
        setResponse({ 
            entriesList : entriesList,
            isLoaded: true,
            error: null,
            message: null 
        });
    }

    // Ce hook est appelé à chaque modification de l'UI, ici il remplace componentDidMount() des classes
    useEffect(() => {
            getResource();
      }, []);

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
                        <ul className="list-group">
                            {response["entriesList"]}
                        </ul>
                    </section>
                ); 
            } 
        }
        return (
            <p>{response["message"]}</p>
        );  
}

export default ResourceDetail;