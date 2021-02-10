import React from "react";

class Selectform extends React.Component {
    constructor(props) {
        super(props);
        // On stocke dans un état une valeur par défaut pour le formulaire
        this.state = {
            value: 1
        }
    }

    // Méthode qui permet de récupérer l'évènement et donc la valuer du formulaire tapée par l'utlisateur
    // On peut ensuite passer cette valeur à la méthode de requête vers Swapi qu'on a passée en propriété
    handleChange = (event) => {
        this.setState({
            value: event.target.value
        })
        this.props.onChange(event.target.value);
    }

    // On affiche le formulaire qui à chaque changement déclenche la méthode handleChange
    render() {
        return (
            <div>
                <form>
                    <label htmlFor="selectCharacter" className="form-label">Write your id here</label>
                    <input id="selectCharacter" value={this.state.value} className="form-control w-50" type="text" onChange={this.handleChange}></input>
                </form>
            </div>
        );

    }
}

export default Selectform;