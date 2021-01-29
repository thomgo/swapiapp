function SubList(props) {
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