import React from 'react'

import { images } from '../../constants'

import './styles.scss'
const NavBar = () => {
    return <>
        <nav>
            <div>
                <img src={images.logo} alt="logo" />
                <ul>
                    { ['inicio', 'sobre mi', 'trabajos', 'habilidades', 'contacto'].map((item) => (
                        <li key={`link-${item}`}>
                            <div />
                            <a href={`#${item}`}>{item}</a>
                        </li>
                    )) }
                </ul>
            </div>
        </nav>
    </>
}

export default NavBar