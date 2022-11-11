import React from 'react'

import { motion } from 'framer-motion'
import { images } from '../../constants/'

import './styles.scss'

const Header = () => {
    const variantsScale = {
        whileInView: {
            scale: [0, 1],
            opacity: [0, 1],
            transition: {
                duration: 1,
                ease: 'easeInOut'
            }
        }
    }
    return <>
        <div id='home' className="app-header app-flex">
            <motion.div
                className='app-header-info'
                transition={{ duration: .5 }}
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            >
                <div className="app-header-badge">
                    <div className="badge-cmp app-flex">
                        <span>👋</span>
                        <div style={{ marginLeft: 20 }}>
                            <p className="p-text">Hola, yo soy</p>
                            <h1 className="head-text">Jerson Silva</h1>
                        </div>
                    </div>
                        <div className="tag-cmp app-flex">
                            <p className="p-text">Desarrollador Fronted</p>
                        </div>
                </div>
            </motion.div>
            <motion.div
                className='app-header-img'
                transition={{ duration: .5, delayChildren: .5 }}
                whileInView={{ opacity: [0, 1] }}
            >
                <img src={images.profile} alt="imagen de perfil" />
                <motion.img
                    src={images.circle}
                    alt='circulo contenedor de foto'
                    className='overlay-circle'
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    whileInView={{ scale: [0, 1] }}/>

            </motion.div>
            <motion.div
                variant={variantsScale}
                className='app-header-circles'
                whileInView={variantsScale.whileInView}
            >
                {[images.flutter, images.redux, images.sass].map((circle, index) => (
                    <div className='circle-cmp app-flex' key={`circle-${index}`}>
                        <img src={circle} alt="circulo" />
                    </div>
                ))}
            </motion.div>
        </div>
    </>
}

export default Header