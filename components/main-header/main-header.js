import Link from 'next/link'
import React from 'react'
import Logo from "@/assets/logo.png"
import classes from "./main-header.module.css"
import Image from 'next/image'
import NavLink from './NavLink'

export default function MainHeader(){

  return (
    <header className={classes.header}>
        <Link className={classes.logo} href="/">
            <Image src={Logo} priority/>
            NextLevel Food
        </Link>
        <nav className={classes.nav}>
            <ul>
            <li><NavLink href="/meals">Browse Meals</NavLink></li>
            <li><NavLink href="/community">Community</NavLink></li>
            </ul>
        </nav>
    </header>
  )
}
