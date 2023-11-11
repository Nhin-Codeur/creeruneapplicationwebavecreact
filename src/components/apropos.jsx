import background from '../assets/image-source-2.png'
import Dropdown from './dropdown/dropdown'


const Apropos = () => {

    const aProposDropdowns = [{topContent:'Fiabilité',content:'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.'},
    {topContent:'Respect',content:'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'},
    {topContent:'Service', content:"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."},
    {topContent:'Sécurité', content:"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."}]

    return <>
        <div className='a-propos'>
            <img src={background}/>
            <div className='dropdown-list'>
                {aProposDropdowns.map(dropdown => <Dropdown topContent={dropdown.topContent} content={dropdown.content}> </Dropdown>)}
            </div>
        </div>
    </>
}

export default Apropos