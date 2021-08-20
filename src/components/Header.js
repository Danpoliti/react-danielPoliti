import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import logo from 'img/guitarwhite.svg'
import UserContext from 'contexts/user'
import Checkout from 'pages/Checkout'


const Header = () => {

const {data} = useContext(UserContext)
const prodCartView = useContext(UserContext)
  const addCart = prodCartView.addCart


  return (
 <>
   <header className="page-header">
    <Link to="/" className="logo"><img src={logo} alt="Logo Music Store" />
    </Link>

    {/* <!-- Navigation menu and toggle button (non-functional) --> */}
    <button type="button" className="nav-toggle">
      <span className="material-icons">menu</span>
    </button>


    {/* <!-- Search for a product (non-functional) --> */}


    {/* <!-- Additional links --> */}

  </header>
  <nav className="navigation hidden">
    <ul className="menu">
      <li><Link to="/">Products</Link>
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
      <li><Link to="/Favorites"><span className="material-icons">favorite_border</span></Link></li>
      <li><Link to="/Checkout"><span className="material-icons">shopping_cart</span>{addCart.length}</Link></li>
      <input type="search" name="find" id="find" className="search-box" />

    <button type="button" id="search-button"><span className="material-icons" id="search">search</span></button>
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