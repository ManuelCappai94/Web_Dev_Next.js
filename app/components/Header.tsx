
import React from 'react'
import HeadeStyle from "../styles/Header.module.css"

const Header = () => {
 
   return (
    <div>
      <h1 className={HeadeStyle.title}>
        <span>WebDev</span> News
      </h1>
    <p className={HeadeStyle.description}>
      Keep up to date with the latest web dev news
    </p>
    </div>
  )
}

export default Header

