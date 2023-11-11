import fullstar from '../../assets/fullstar.svg';
import emptystar from '../../assets/emptystar.svg';
import './rating.scss';

const Rating = ({rating}) => {
    
    var tab = [1,2,3,4,5]
    return <>
        <div className="rating">
            {
                tab.map(element => {
                    return <img src={rating >= element ? fullstar : emptystar}/> ;
                })
            }

          
        </div>
    </>
}

export default Rating



