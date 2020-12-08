import React from "react";

// Notons que ce composant aurait pu être fait sous forme de fonction car il ne gère pas d'état
class Selectform extends React.Component {
    constructor(props) {
        super(props);
    }

    // Méthode qui permet de récupérer l'évènement et donc la valuer du formulaire tapée par l'utlisateur
    // On peut ensuite passer cette valeur à la méthode de requête vers Swapi qu'on a passée en propriété
    handleChange = (event) => {
        this.props.onChange(event.target.value);
    }

    // On affiche le formulaire qui à chaque changement déclenche la méthode handleChange
    render() {
        return (
            <div>
                <form>
                    <label htmlFor="selectCharacter" className="form-label">Indiquez l'id d'un personnage</label>
                    <input id="selectCharacter" className="form-control w-50" type="text" onChange={this.handleChange}></input>
                </form>
            </div>
        );

    }
}

export default Selectform;