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
          <div>
            <ul className="notation">
              <li><i className="fa-solid fa-star etoiles"></i></li>
              <li><i className="fa-solid fa-star etoiles"></i></li>
              <li><i className="fa-solid fa-star etoiles"></i></li>
              <li><i className="fa-solid fa-star etoiles"></i></li>
              <li><i className="fa-solid fa-star gray-star"></i></li>
            </ul>
          </div>
        </div>
        </>
    );
  };
    
export default Place;