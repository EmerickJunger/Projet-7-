//import { Link } from "react-router-dom";
import Cote from "../assets/IMG.jpg";

function Home() {

    return (
        <>
          <figure className="coast">
            <img src={Cote} alt=""/>
            <h1 className="quote">Chez vous, partout et ailleurs</h1>
            <div className="filter"></div>
          </figure>
          <a href="/About" className="loc">
            <figure className="cards">
              <p className="titre">Titre de la location</p>
            </figure>
          </a>
        </>
    );
  };
    
export default Home;