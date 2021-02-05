import React from "react";

// Notons que ce composant aurait pu être fait sous forme de fonction car il ne gère pas d'état
class Searchresult extends React.Component {
    constructor(props) {
        super(props);
    }

    // On conditionne l'affichage aux données passée en propriétés du composant
    // Si aucun message, tout s'est bien passé alors on peut afficher le personnage
    render() {
        if(this.props.message) {
            return (
                <p>{this.props.message}</p> 
            );
        }
        else {
            return (
                <table className="table table-light w-50 table-bordered">
                    <tbody>
                        <tr>
                            <td>Nom : </td>
                            <td>{this.props.data.name}</td>
                        </tr>
                        <tr>
                            <td>Taille : </td>
                            <td>{this.props.data.height}</td>
                        </tr>
                        <tr>
                            <td>Couleur de cheveux : </td>
                            <td>{this.props.data.hair_color}</td>
                        </tr>
                        <tr>
                            <td>Couleur des yeux : </td>
                            <td>{this.props.data.eye_color}</td>
                        </tr>
                    </tbody>
                </table>
            );
    
        }
    }
}

export default Searchresult;