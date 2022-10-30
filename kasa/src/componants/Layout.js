import { Outlet } from "react-router-dom";
import Logo from "../assets/LOGO.png";
import LogoWhite from "../assets/logo-white.png";

function Layout() {

    return (
        <>
        <header>
            <nav>
                <a href="/">
                    <img src={Logo} alt=""/>
                </a>
                <ul>
                    <li><a href="#hebergements">Accueil</a></li>
                    <li><a href="#activites">A Propos</a></li>
                </ul>
            </nav>   
        </header>
        <main>
            <Outlet/>
        </main>
        <footer>
                <a href="/">
                    <img src={LogoWhite} alt=""/>
                    <p>© 2020 Kasa. All rights reserved</p>
                </a>
        </footer>
        </>
    );
  };
    
export default Layout;