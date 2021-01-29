function SubList(props) {
    const subList = props.subEntry.map((value, index)=>
        <li key={index} className="bg-dark text-warning">
            {value}
        </li>
    );

    return (
        <ul>
            {subList}
        </ul>
    );
}

export default SubList;