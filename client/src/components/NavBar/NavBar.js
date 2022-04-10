import React from 'react'
import NCSS from './NavBar.module.css'
import nav_bar_logo from '../../assets/nav-bar-logo.png'
import { NavLink } from 'react-router-dom'

function Logo() {

    return <img className={NCSS.logo} src={nav_bar_logo} alt='hero logo' />
}

function NavItems() {

    const path = [{ to: 'page-a', value: 'Page A' }, { to: 'page-b', value: 'Page B' }, { to: 'page-c', value: 'Page C' }]

    const items = path.map(({ to, value }) => <li key={value}> <Item to={to} value={value} /> </li>)

    return <ul className={NCSS.items}>{items}</ul>
}

function Item({ to, value }) {

    const page = <span>{value}</span>

    return <NavLink className={NCSS.item} to={to}> {page} </NavLink>
}

function LogIn() {
    return <button className={NCSS.button}>Log in</button>
}

export default function NavBar() {
    return (
        <div className={NCSS.content}>
            <Logo />
            <NavItems />
            <LogIn />
        </div>
    )
}