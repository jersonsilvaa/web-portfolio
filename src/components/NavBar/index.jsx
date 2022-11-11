import React, { useState } from 'react'

import { motion } from 'framer-motion'
import { images } from '../../constants'
import { HiMenuAlt4, HiX } from '../../utils/import'

import './styles.scss'
const Navbar = () => {
    const [toggle, setToggle] = useState(false);
  
    return (
      <nav className="app-navbar">
        <div className="app-navbar-logo">
          <img src={images.logo} alt="logo" />
          <span>devsilva</span>
        </div>
        <ul className="app-navbar-links">
          {['inicio', 'sobre mi', 'trabajos', 'habilidades', 'contacto'].map((item) => (
            <li className="app-flex p-text" key={`link-${item}`}>
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>
  
        <div className="app-navbar-menu">
          <HiMenuAlt4 onClick={() => setToggle(true)} />
  
          {toggle && (
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: .85, ease: 'easeOut' }}
            >
              <HiX onClick={() => setToggle(false)} />
              <ul>
                {['inicio', 'sobre mi', 'trabajos', 'habilidades', 'contacto'].map((item) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </nav>
    );
  };

export default Navbar