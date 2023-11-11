import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Dropdown from './dropdown/dropdown';
import Rating from './rating/rating';
import Carousel from './carousel/carousel';
import { useNavigate } from "react-router-dom";


const FicheLogement = () => {

    const [location, setLocation] = useState();
    const locationId = useParams().locationId;
    const navigate = useNavigate();

    useEffect(() => {
        var json = require('../assets/locations-request.json');

        if (json.find(elem => locationId == elem.id)) {
            setLocation(json.find(elem => locationId == elem.id))
        }

        else navigate("/404")

    }, [locationId])


    return <>
        {location && (
            <div className="fiche-logement">

                {/* <img src={location.cover} /> */}
                <Carousel pictures={location.pictures} />
                <div className='logement-infos'>
                    <div className='left-and-right-infos'>
                        <div className='left-infos'>
                            <span className='titre'> {location.title} </span>
                            <span className='adresse'> {location.location} </span>
                            <div className='tags' > {location.tags.map(tag => <span > {tag} </span>)} </div>
                        </div>
                        <div className='right-infos'>
                            <div className='host'>
                                <span> {location.host.name} </span>
                                <img className='host-image' src={location.host.picture} />

                            </div>
                            <Rating rating={location.rating} />
                        </div>
                    </div>
                    <div className='equipements-et-description'>
                        <Dropdown topContent='Description' content={location.description} />
                        <Dropdown topContent='Equipements' content={location.equipments.map(equipement => <span> {equipement} </span>)} />
                    </div>
                </div>
            </div>
        )}

    </>
}

export default FicheLogement