//import { Link } from "react-router-dom";
import Cote from "../assets/IMG.jpg";

function Home() {

    return (
        <>
          <figure>
            <img src={Cote} alt=""/>
            <h1>Chez vous, partout et ailleurs</h1>
            <div className="filter"></div>
          </figure>
        </>
    );
  };
    
export default Home;