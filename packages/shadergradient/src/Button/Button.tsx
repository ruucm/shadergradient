import React from 'react'
import { motion } from 'framer-motion'
import styles from './Button.module.scss'

export function Button({ title = 'Title' }) {
  return (
    <motion.button
      className={styles.button}
      whileHover={{ scale: 0.9 }}
      whileTap={{ scale: 0.7 }}
    >
      {title}
      <span>👀</span>
    </motion.button>
  )
}
