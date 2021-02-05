import {useState, useEffect} from "react";
import Axios from "axios";
import Error from "../error/Error";
import {useParams, useLocation} from "react-router-dom";
import EntryCard from "./entryCard/EntryCard";

function EntryDetail() {
    // On récupère l'url à requêter passée dans les états de l'objet location dans list.js
    const baseUrl = useLocation().state.detailurl;
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
                <EntryCard entry={response.data} />
            );
        }
    }
    return (
        <p>{response["message"]}</p>
    );
}

export default EntryDetail;