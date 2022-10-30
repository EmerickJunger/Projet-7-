import { Outlet } from "react-router-dom";

function Layout() {

    return (
        <>
        <header>
            <div></div>
        </header>
        <main>
            <Outlet/>
        </main>
        <footer>bite</footer>
        </>
    );
  };
    
export default Layout;