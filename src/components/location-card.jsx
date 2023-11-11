import { Link } from "react-router-dom"
import FicheLogement from "./fiche-logement"


const LocationCard = ({titre='Titre de la location', cover, id}) => {
    return <>
        <Link to={`fiche-logement/${id}`} className="locationCard">
            <img src={cover}/>
            <span> {titre} </span>
        </Link>
        
    </>
} 

export default LocationCard