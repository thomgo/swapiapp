import React from "react";
import Axios from "axios";

class Resources extends React.Component {
    constructor(props) {
        super(props);
        this.baseUrl = "https://swapi.dev/api/";
        // Stocke les différents états de la requête vers Swapi et le message du composant Character
        this.state = {
            data: null,
            error: null,
            isLoaded: false,
            message: "Chargement en cours"
        };
    }

    getResources= () => {
        // On lance la requête et selon le résultat on met à jour l'état du composant
        Axios.get(this.baseUrl)
        .then((response) => {
            this.setState({
                data: response.data,
                isLoaded: true,
                error: null,
                message: null
            });
        })
        .catch((error) => {
            this.setState({
                error: error,
                isLoaded: true,
                data: null,
                message: "Un problème est survenu, nous ne parvenons pas à récupérer les donnéess"
            });
        })
    }

    componentDidMount() {
        this.getResources();
    }

    render() {
        if(this.state.isLoaded) {
            if(this.state.error) {
                return(
                    <div class="alert alert-danger" role="alert">
                        {this.state.message}
                    </div>
                );
            }
            else {
                const resourcesList = Object.keys(this.state.data).map((resource, index) =>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
                        <div className="alert bg-dark my-3 py-5 text-center" role="alert">
                            <a  className="text-warning" href="">
                                {resource}
                            </a>
                        </div>
                    </div>
                );

                return(
                    <section>
                        <h2>Bienvenue sur notre Application react</h2>
                        <div className="row">
                            {resourcesList}
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

export default Resources;