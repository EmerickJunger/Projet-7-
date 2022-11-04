function Place() {

    return (
        <>
        <div>
          <figure className="logis">
          </figure>
          <h2 className="place">
            Lieu, avec précision
          </h2>
          <h3 className="town">
            Ville, région
          </h3>
          <div className="filtrage">
            <ul className="filtres">
              <li className="filtre">Détail</li>
              <li className="filtre">Détail</li>
              <li className="filtre">Détail</li>
            </ul>
          </div>
          <div className="info">
            <ul className="notation">
              <li><i className="fa-solid fa-star etoiles"></i></li>
              <li><i className="fa-solid fa-star etoiles"></i></li>
              <li><i className="fa-solid fa-star etoiles"></i></li>
              <li><i className="fa-solid fa-star etoiles"></i></li>
              <li><i className="fa-solid fa-star gray-star"></i></li>
            </ul>
            <div className="user">
              <p className="name">
                Prénom Nom
              </p>
              <figure className="profile">
              </figure>
            </div>
          </div>
          <details className="description">
            <summary className="entete">Description</summary>
            <div>
              <p className="more">
                climatisation
              </p>
            </div>
          </details>
          <details className="description">
            <summary className="entete">Description</summary>
            <div>
              <p className="more">
                climatisation
              </p>
            </div>
          </details>
        </div>
        </>
    );
  };
    
export default Place;