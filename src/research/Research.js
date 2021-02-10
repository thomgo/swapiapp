import React from "react";
import Axios from "axios";
// Représente le formulaire de sélection d'un personnage
import Selectform from "./selectform/Selectform";
// Représente l'affichage d'un personnage ou d'un message
import Searchresult from "./searchresult/Searchresult";

class Research extends React.Component {
    constructor(props) {
        super(props);
        // Stocke les différents états de la requête vers Swapi et le message du composant searchResult
        this.state = {
            data: null,
            error: null,
            isLoaded: false,
            message: "Chargement en cours"
        }
    }

    handleChange = (id) => {
        this.requestToSwapi(id)
    }

    // Requête qui va chercher un personnage swapi, par défaut le personnage d'id 1, autrement l'id qu'on passe en paramètre
    // Cette fonction  est appelée à la création du composant et chaque fois que le formulaire change(on la passe donc au form)
    // Ici on utilise une fonction fléchée pour associer this à la classe Swapi et pouvoir appeler setState
    requestToSwapi= (id) => {
        // On construit l'url
        let url = "https://swapi.dev/api/people/" + id + "/";
        // On lance la requête et selon le résultat on met à jour l'état du composant
        Axios.get(url)
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
                data: null,
                error: error,
                isLoaded: true,
                message: "Nous n'avons pas réussi à récupérer la ressource, vérifiez que l'id existe"
            });
        })
    }

    // Au moment ou le composant est monté (affiché pour la première fois) on requête swapi avec notre méthode sans passer de paramètre
    componentDidMount() {
        this.requestToSwapi(1);
    }

    // Ici on affiche le formulaire et le personnage dans une structure HTML
    // On passe au formulaire la méthode pour effectuer la requête qui sera appelée dans une méthode de la classe Selectform
    // On passe au personnage les éventuels message et données à afficher
    render() {
        return(
            <div>
                <h2>Write an id for a character</h2>
                <Selectform onChange={this.handleChange}/>
                <section className="my-5">
                    <h3>Selected character :</h3>
                    <Searchresult searchResult={this.state}/>
                </section>
            </div>
        );
    }
}

export default Research;