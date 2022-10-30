import { Outlet } from "react-router-dom";
import Logo from "../assets/LOGO.png";

function Layout() {

    return (
        <>
        <header>
            <nav>
                <a class="logo" href="/">
                    <img src={Logo} alt=""/>
                </a>
                <ul class="menu">
                    <li class="survol"><a href="#hebergements">Accueil</a></li>
                    <li class="survol"><a href="#activites">À propos</a></li>
                </ul>
            </nav>   
        </header>
        <main>
            <Outlet/>
        </main>
        <footer>bite</footer>
        </>
    );
  };
    
export default Layout;