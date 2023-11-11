
import LocationCard from './location-card.jsx'
import '../App.scss'
import HomeTopPicture from '../assets/image-source-1.png'
import { useEffect, useState } from 'react';



function Accueil() {

  const [locationsList, setLocationsList] = useState([]);

  useEffect(() => {
      var json = require('../assets/locations-request.json')
      setLocationsList(json);
      console.log(json)
  }, [])

  return (
      <div>
        <header className="App-header">
          <div className='home-pub'>
            <img src={HomeTopPicture} className="home-top-picture" alt="home-top-picture" />
            <span> Chez vous, partout, et ailleurs </span>
          </div>
          <div className='home-gallery'>
            {
              locationsList.map((location) => {
                return <LocationCard titre={location.title} cover={location.cover} id={location.id}></LocationCard>
                
              })
            }
          </div>
          
        </header>
        
        
      </div>
      
  );
}

export default Accueil;
