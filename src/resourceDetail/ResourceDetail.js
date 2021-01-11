import React from "react";
import Axios from "axios";
import Error from "../error/Error";

class ResourceDetail extends React.Component {
    constructor(props) {
        super(props);
        this.baseUrl = "https://swapi.dev/api/";
        this.resourceName = this.props.match.params.resourceName 
        // Stocke les différents états de la requête vers Swapi et le message du composant Character
        this.state = {
            resourcesList: null,
            error: null,
            isLoaded: false,
            message: "Chargement en cours"
        };
    }

    getResource= () => {
        // On lance la requête et selon le résultat on met à jour l'état du composant
        Axios.get(this.baseUrl)
        .then((response) => {
            // On génére la liste de composants ressources
            console.log(response.data);
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

    componentDidMount() {
        this.getResource();
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
                        <h2>Détail d'une ressource</h2>
                        <div className="row">
                        </div>
                    </section>
                ); 
            } 
        }
        return (
            // <p>{this.state.message}</p>
            <p>{this.resourceName}</p>

        );  
    }
}

export default ResourceDetail;