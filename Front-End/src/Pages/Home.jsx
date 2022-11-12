import React from 'react'
import Landing from '../components/Landing'
import { motion } from 'framer-motion'
import Testimonials from '../components/Testimonials'
import CarFilter from '../components/CarFilter'

export default function Home() {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}

    >
      <CarFilter />
    <Landing />
    <Testimonials />
    </motion.div>
  )
}
