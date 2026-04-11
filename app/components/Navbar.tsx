"use client";
import Link from 'next/link'
import navStyles from "../styles/Navbar.module.css"

type Props = { //posso chiamarlo come mi pare
    title?:string
}

const Navbar = ({title}: Props) => {
  return (
    <nav className={navStyles.nav}>
      {title && <span>WebDev</span>}
      <div className={navStyles.links}>
      <ul >
        <li>
          <Link href="/">Home</Link> 
        </li>
        <li>
          <Link href="/about">About</Link> 
        </li>
        <li>
          <Link href="/apiDemo">DemoApi</Link> 
        </li>
      </ul>
      </div>
      
    </nav>
  )
}

export default Navbar
