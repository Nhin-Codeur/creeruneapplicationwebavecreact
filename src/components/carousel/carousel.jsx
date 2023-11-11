import { useEffect, useState } from "react"
import arrow from '../../assets/arrow.svg'
import './carousel.scss'

const Carousel = ({ pictures }) => {



    const [currentImage, setCurrentImage] = useState(0);

    function nextImage() {
        setCurrentImage(currentImage + 1 > pictures.length - 1 ? 0 : currentImage + 1);

    }

    function prevImage() {
        setCurrentImage(currentImage - 1 < 0 ? pictures.length - 1 : currentImage - 1);

    }


    return <>
        <div className="carousel">
            <img className='host-image' src={pictures[currentImage]} />
            <img className="prev-arrow" src={arrow} onClick={prevImage} />
            <img className="next-arrow" src={arrow} onClick={nextImage} />
            <span className="counter"> {currentImage + 1}/{pictures.length} </span>
        </div>
    </>
}

export default Carousel