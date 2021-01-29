function SubList(props) {
    // On parcours le tableau trouvé dans Entrycard et passé dans les props
    // Pour chaque valeur on crée un li dans la sous liste
    const subListItems = props.subEntry.map((value, index)=>
        <li key={index} className="bg-dark text-warning">
            {value}
        </li>
    );

    return (
        <ul>
            {subListItems}
        </ul>
    );
}

export default SubList;