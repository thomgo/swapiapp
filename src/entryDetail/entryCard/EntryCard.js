import SubList from "./subList/SubList";

function EntryCard(props) {

    const entriesList = Object.keys(props.entry).map((key, index) => {
                if(Array.isArray(props.entry[key])) {
                    return (
                        <li key={index} className="list-group-item bg-dark border-bottom border-secondary text-warning">
                            {key} : <SubList subEntry={props.entry[key]} />
                        </li>
                    );
                }
                return(
                    <li key={index} className="list-group-item bg-dark border-bottom border-secondary text-warning">
                        {key} : {props.entry[key]}
                    </li>
                );
            }   
        );

    return(
        <ul className="list-group">
            {entriesList}
        </ul>
    );
}

export default EntryCard;