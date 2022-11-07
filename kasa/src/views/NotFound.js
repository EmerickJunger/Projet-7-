import { Link } from "react-router-dom"

function NotFound () {
  return (
    <div className="not-found">
      <div>
        <h2>404</h2>
        <p>Oups ! La page que vous demandez n'existe pas.</p>
      </div>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
  )
}

export default NotFound