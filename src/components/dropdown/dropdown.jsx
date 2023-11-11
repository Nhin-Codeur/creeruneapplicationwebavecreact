import './dropdown.scss'
import arrow from '../../assets/arrow.svg'
import { useEffect, useRef, useState } from 'react'


const Dropdown = ({ topContent, content }) => {

    const [activated, setActivated] = useState(false);



    return <>
        <div className='dropdown'>
            <div className="top-dropdown">
                <span> {topContent} </span>
                <img
                    onClick={() => setActivated(!activated)}
                    src={arrow}
                    className={`${activated ? 'activated' : ''}`}
                />
            </div>
            <div className={`content-dropdown ${activated ? '' : 'hide'}`}>

                <p > <br /> {content}  <br />  <br /> </p>
            </div>
        </div>
    </>
}

export default Dropdown