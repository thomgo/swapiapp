import SubList from "./subList/SubList";

function EntryCard(props) {
    // variable qui contient les li de la carte de présentation d'une entrée
    // Pour chaque clef de l'objet on crée un li à l'aide de map (map ne fonctionne pas sur un objet on utilise donc Object.keys qui renvoie un tableau de clef)
    const listItems = Object.keys(props.entry).map((key, index) => {
                let value = props.entry[key];
                // Si la valeur de la clef est un tableau on crée alors une sous liste
                if (Array.isArray(value)) value = <SubList subEntry={value} />;
                return(
                    <li key={index} className="list-group-item bg-dark border-bottom border-secondary text-warning">
                        {key} : {value}
                    </li>
                );
            }   
        );

    return(
        <ul className="list-group">
            {listItems}
        </ul>
    );
}

export default EntryCard;