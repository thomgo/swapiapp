import React from "react";
import Axios from "axios";
import Error from "../error/Error";
import Resource from "./resource/Resource";

class ResourcesPanel extends React.Component {
    constructor(props) {
        super(props);
        this.baseUrl = "https://swapi.dev/api/";
        // Stocke les différents états de la requête vers Swapi et le message du composant Character
        this.state = {
            resourcesList: null,
            error: null,
            isLoaded: false,
            message: "Chargement en cours"
        };
    }

    getResources= () => {
        // On lance la requête et selon le résultat on met à jour l'état du composant
        Axios.get(this.baseUrl)
        .then((response) => {
            // On génére la liste de composants ressources
            this.makeResourcesList(response.data);
        })
        .catch((error) => {
            this.setState({
                error: error,
                isLoaded: true,
                resourcesList: null,
                message: "Un problème est survenu, nous ne parvenons pas à récupérer les données"
            });
        })
    }

    // Génère une liste de composant ressources sur la base des données reçues de l'API
    makeResourcesList = (data) => {
        const resourcesList = Object.keys(data).map((resourceName, index) =>
            <Resource index={index} resourceName={resourceName}/>
        );
        this.setState({ 
            resourcesList : resourcesList,
            isLoaded: true,
            error: null,
            message: null 
        });
    }

    componentDidMount() {
        this.getResources();
    }

    render() {
        if(this.state.isLoaded) {
            if(this.state.error) {
                return(
                    <Error message={this.state.message} />
                );
            }
            else {
                return(
                    <section>
                        <h2>Click and start to explore !</h2>
                        <div className="row">
                            {this.state.resourcesList}
                        </div>
                    </section>
                ); 
            } 
        }
        return (
            <p>{this.state.message}</p>
        );  
    }
}

export default ResourcesPanel;