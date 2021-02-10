import React from "react";

// Notons que ce composant aurait pu être fait sous forme de fonction car il ne gère pas d'état
class Searchresult extends React.Component {
    constructor(props) {
        super(props);
    }



    // On conditionne l'affichage aux données passée en propriétés du composant
    // Si aucun message, tout s'est bien passé alors on peut afficher le personnage
    render() {
        console.log(this.props.searchResult);
        if(this.props.searchResult.isLoaded) {
            if(!this.props.searchResult.error) {
                return(
                    <div>
                        <p>{this.props.searchResult.data.name}</p>
                    </div>
                );
            }
            else {
                return <p>Erreur</p>;
            }
        }
        return (
            <p>Chargement</p>
        );
    }
}

export default Searchresult;