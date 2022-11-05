function NotFound() {

    return (
        <>
        <div>
          <h2 className="error">
            404
          </h2>
          <div className="text">
            <p className="notfound">
              Oups! La page que vous demandez n'existe pas.
            </p>
            <p className="notfound">
            </p>
          </div>
          <a href="/" className="return">
            Retourner sur la page d'accueil
          </a>
        </div>
        </>
    );
  };
    
export default NotFound;