import React from 'react'
import { Veggie, Popular } from '../components'
import { motion } from 'framer-motion'

export const Pages = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Veggie />
      <Popular />
    </motion.div>
  )
}
