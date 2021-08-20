import React from 'react'
import logo from 'img/guitarwhite.svg'

const Footer = () => {
  return (
<footer className="page-footer">
    <ul className="social">
      <li><a href="https://www.facebook.com/daniel.politi.10/"><span className="fa fa-facebook"></span> </a></li>
      <li><a href="https://www.instagram.com/dan_politi/"><span className="fa fa-instagram"></span> </a></li>
      <li><a href="https://twitter.com/DanielPoliti4"><span className="fa fa-twitter"></span> </a></li>
    </ul>
    <nav aria-label="Legal">
      <ul className="legal">
        <li><a href="#">Terms of Use</a></li>
        <li><a href="#">Accessibility Policy</a></li>
        <li><a href="#">Privacy Policy</a></li>
      </ul>
    </nav>
    <p className="copyright">&copy; Copyright, {(new Date()).getFullYear()}.<img src={logo} alt="" className="foot-image" /></p>
  </footer>
  )
}

export default Footer