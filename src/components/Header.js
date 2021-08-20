import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from 'img/guitarwhite.svg'
import UserContext from 'contexts/user'


const Header = () => {

  const { data } = useContext(UserContext)
  const prodCartView = useContext(UserContext)
  const addCart = prodCartView.addCart
  const prodFavorite = useContext(UserContext)
  const addFavorite = prodFavorite.addFavorite

  const user = useContext(UserContext)

  console.log(user.data)
  const login = user.updateUsername(`Politi`)
  return (
    <>
      <header className="page-header">
        <Link to="/" className="logo"><img src={logo} alt="Logo Music Store" />
        </Link>

        {/* <!-- Navigation menu and toggle button (non-functional) --> */}
        <button type="button" className="nav-toggle">
          <span className="material-icons">menu</span>
        </button>



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
          <li><Link to="#"><span className="material-icons">favorite_border</span>{addFavorite.length}</Link></li>
          <li><Link to="/Checkout"><span className="material-icons">shopping_cart</span>{addCart.length}</Link></li>
          <input type="search" name="find" id="find" className="search-box" />

          <button type="button" id="search-button"><span className="material-icons" id="search">search</span></button>
        </ul>
        {
          (login)
            ? <Link to="/user">{data.username}</Link>
            : <Link to="/login">User: Daniel Politi</Link>
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