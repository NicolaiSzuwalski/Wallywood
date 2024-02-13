import React from 'react'
import { Navbar } from '../Navbar/Navbar.jsx'
import styles from './Header.module.scss'

export const Header = () => {
  return (
    <>
    <header className={styles.Header}>
        <h2>WallyWood</h2>
        <Navbar></Navbar>
    </header>
    <div></div>
    </>
    
  )
}