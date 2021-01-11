import {Link} from "react-router-dom";

// Représente un carré avec un nom de ressources (exemple: planet ou autre)
// Attend comme paramètre une clef et un nom de ressources
function Resource(props) {
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={props.index}>
            <div className="alert bg-dark my-3 py-5 text-center" role="alert">
                <Link  className="text-warning" to={"/resource/" + props.resourceName}>
                    {props.resourceName}
                </Link>
            </div>
        </div>
    );
}

export default Resource;