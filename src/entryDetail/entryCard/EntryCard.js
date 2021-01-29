import SubList from "./subList/SubList";

function EntryCard(props) {
    const listItems = Object.keys(props.entry).map((key, index) => {
                let value = props.entry[key];
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