import './Nav.css';
import Hamburger from './Hamburger';
import { useState } from 'react';
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
      <div className="nav-bar">
        <ul style={styles.ul}>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Social</li>
        </ul>
        <div className='hamburger' onClick={toggleHamburger}>
            <Hamburger />
        </div>
      </div>
    );
  }
  
  export default Nav;