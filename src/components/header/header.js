import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Logo from "./logo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"
import HeaderPageStyle from "./header.module.css"

const Header = () => (
  <nav className={HeaderPageStyle.navbar} id="navbar">
    <AniLink fade to="/" className="navbar-brand"><Logo /></AniLink>
    <ul className={HeaderPageStyle.navbarNav}>
      <li className={HeaderPageStyle.navItem}><AniLink fade to="/menu" className={HeaderPageStyle.navLinks}>Menu</AniLink></li>
      <li className={HeaderPageStyle.navItem}><AniLink fade to="/about" className={HeaderPageStyle.navLinks}>About Us</AniLink></li>
      <li className={HeaderPageStyle.navItemSocial}>
        <a className={HeaderPageStyle.navLinks} href="/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className={HeaderPageStyle.navIcons} icon={faInstagram} />
        </a>
      </li>
      <li className={HeaderPageStyle.navItemSocial}>
        <a className={HeaderPageStyle.navLinks}  href="/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className={HeaderPageStyle.navIcons} icon={faTwitter} />
        </a>
      </li>
    </ul>
  </nav>
)

export default Header
