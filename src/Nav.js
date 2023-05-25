import './Nav.css';
import Hamburger from './Hamburger';
import { useState } from 'react';
import { ReactComponent as Brand } from './logoTemp.svg';
function Nav() {

    const [hamburgerOpen, setHamburgerOpen] = useState(true);

    const styles = {
        ul: {
            display: hamburgerOpen ? "flex" : "none",
        }
    }

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
        console.log("toggleHamburger clicked. hamburgerOpen value is:", hamburgerOpen)
    }


    return (
      <nav className="nav-bar">
        <div className='container'>
        <div className="logo">
            <Brand />
            <p>Yonder Logo</p>
        </div>
        <ul style={styles.ul}>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Social</li>
        </ul>
        <div className='hamburger' onClick={toggleHamburger}>
            <Hamburger isOpen={hamburgerOpen} />
        </div>
        </div>
      </nav>
    );
  }
  
  export default Nav;