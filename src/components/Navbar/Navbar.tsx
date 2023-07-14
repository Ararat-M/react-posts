import React from 'react'
import classes from "./navbar.module.css"
import { Link } from 'react-router-dom'

export function Navbar() {
  return (
    <div className={classes.navbar}>
      <nav className={classes.nav}>
        <ul className={classes.list}>
          <li>
            <Link className={classes.link} to={"/"}>Main</Link>
          </li>
          <li>
            <Link className={classes.link} to={"/about"}>About</Link>
          </li>
          <li>
            <Link className={classes.link} to={"/posts"}>Posts</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
