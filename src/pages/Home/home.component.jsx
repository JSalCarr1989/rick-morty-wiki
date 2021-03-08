import React from 'react'
import './home.styles.css'
import logo from '../../assets/rick-morty-portal.png'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'


const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
}

const HomePage = () => (


    <div className="home-container">
        <motion.div initial="hidden" animate="visible" variants={variants} className="cover">
            <img className="cover-img" src={logo} alt="portal" />
        </motion.div>
        <Link to="/wiki/characters">Get Started</Link>
    </div>
)

export default HomePage