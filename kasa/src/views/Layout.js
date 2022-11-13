import { Link, Outlet, useResolvedPath } from "react-router-dom"
import logo from "../assets/LOGO.png"
import logoWhite from "../assets/logo-white.png"

function Layout () {
  const resolvedPath = useResolvedPath()

  return (
    <>
      <header>
        <Link to="/" className="header-logo">
          <img src={logo} alt="" />
        </Link>
        <nav>
          <Link to="/" className={ resolvedPath.pathname === "/" ? "active" : ""}>Accueil</Link>
          <Link to="/about" className={ resolvedPath.pathname === "/about" ? "active" : ""}>A propos</Link>
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