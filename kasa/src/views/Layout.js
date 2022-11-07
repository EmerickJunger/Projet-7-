import { Link, Outlet } from "react-router-dom"
import logo from "../assets/logo.png"
import logoWhite from "../assets/logo-white.png"

function Layout () {
  return (
    <>
      <header>
        <Link to="/" className="header-logo">
          <img src={logo} alt="" />
        </Link>
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/about">A propos</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <div>
          <img src={logoWhite} alt="" />
        </div>
        <p>© 2022 Kasa. All rights reserved.</p>
      </footer>
    </>
  )
}

export default Layout