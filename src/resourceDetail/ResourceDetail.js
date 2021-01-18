import React, {useState, useEffect} from "react";
import Axios from "axios";
import Error from "../error/Error";
import {useParams} from "react-router-dom";

function ResourceDetail () {
    const {resourceName} = useParams();
    const baseUrl = "https://swapi.dev/api/" + resourceName + "/";

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
            console.log(response.data);
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

    function makeEntiresList(data) {
        const entriesList = data.map((value, index) =>
            <li key={index} className="list-group-item bg-dark border-bottom border-secondary"><a className="text-warning" href="">{value[Object.keys(value)[0]]}</a></li>
        );
        setResponse({ 
            entriesList : entriesList,
            isLoaded: true,
            error: null,
            message: null 
        });
    }

    useEffect(() => {
            getResource();
      }, []);

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