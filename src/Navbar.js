import React, {useState, useEffect} from 'react'
import './css/Navbar.css'

function Navbar() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () =>{  // listening to scroll events
            if (window.scrollY > 100) {  // cuando bajas 100px 
                setShow(true);
            } else setShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        }
    }, []);

  return (
// [.nav.css] Si (show es true) & (scroll baja mas de 100px) => [.nav_black] 
// [background-color] cambia a .nav
    <div className={`nav ${show && "nav_black"}`}> 
        NETFLIXKIS
 
    </div>
  )
}

export default Navbar