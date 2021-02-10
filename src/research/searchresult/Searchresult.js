import React from "react";
import EntryCard from "../../entryDetail/entryCard/EntryCard";
import Error from "../../error/Error";
// Notons que ce composant aurait pu être fait sous forme de fonction car il ne gère pas d'état
class Searchresult extends React.Component {
    constructor(props) {
        super(props);
    }

    // On conditionne l'affichage aux données passée en propriétés du composant et on réemploi des composants existants
    // Si aucun message, tout s'est bien passé alors on peut afficher le personnage
    render() {
        console.log(this.props.searchResult);
        if(this.props.searchResult.isLoaded) {
            if(!this.props.searchResult.error) {
                return(
                    <div>
                        <EntryCard entry={this.props.searchResult.data} />
                    </div>
                );
            }
            else {
                return <Error message={this.props.searchResult.message}/>;
            }
        }
        // Message de chargement par défaut
        return (
            <p className="alert alert-light">{this.props.searchResult.message}</p>
        );
    }
}

export default Searchresult;