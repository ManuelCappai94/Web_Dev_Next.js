"use client";
import React from 'react'
import Link from 'next/link'
import navStyles from "../styles/Navbar.module.css"

type Props = { //posso chiamarlo come mi pare
    title?:string
}

const Navbar = ({title}: Props) => {
  return (
    <nav className={navStyles.nav}>
      {title && <span>{title}</span>}
      <ul >
        <li>
          <Link href="/">Home</Link> 
        </li>
        <li>
          <Link href="/about">About</Link> 
        </li>
      </ul>
      
    </nav>
  )
}

export default Navbar
