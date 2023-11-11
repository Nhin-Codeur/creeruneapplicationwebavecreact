import { Link } from "react-router-dom"

const ErrorPage = () => {
    return <>
        <div className="error-page">
            <span className="error"> 404 </span>
            <span className="oups"> Oups! La page que vous demandez n'existe pas. </span>
            <Link to="/"> Retourner sur la page d'accueil </Link> 
        </div>
    </>
}

export default ErrorPage