import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import logo from 'img/guitarwhite.svg'
import UserContext from '../contexts/user'


const Header = () => {

const {data} = useContext(UserContext)
console.log(`Header()`, data)
  return (
 <>
   <header className="page-header">
    <a href="index.html" className="logo"><img src={logo} alt="Logo Music Store" />
    </a>

    {/* <!-- Navigation menu and toggle button (non-functional) --> */}
    <button type="button" className="nav-toggle">
      <span className="material-icons">menu</span>
    </button>


    {/* <!-- Search for a product (non-functional) --> */}


    {/* <!-- Additional links --> */}

  </header>
  <nav className="navigation hidden">
    <ul className="menu">
      <li><a href="#">Products</a>
        <ul className="submenu">
          <li><a href="#">Eletric Guitars</a></li>
          <li><a href="#">Acoustic Guitars</a></li>
          <li><a href="#">Bass Guitars</a></li>
        </ul>
      </li>
      <li><a href="#">Sales</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact Us</a></li>
    </ul>
    <ul className="your-products">
      <li><a href="#"><span className="material-icons">favorite_border</span></a></li>
      <li><a href="#"><span className="material-icons">shopping_cart</span></a></li>
    </ul>
    {
      (data)
      ? <Link to="/user">{data.username}</Link>
      : <Link to="/login">Log-In</Link>
    }
    
  </nav>
  <form className="search">
    <label>Search</label>
    <input type="search" name="find" id="find" className="search-box" />

    <button type="button" id="search-button"><span className="material-icons" id="search">search</span></button>
  </form>

 </>
  )
}

export default Header