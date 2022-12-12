import * as React from 'react'
import { motion } from 'framer-motion'

const ExternalLink = ({ title, link }) => {
  return (
    <motion.div
      style={{
        display: 'flex',
        cursor: 'pointer',
        width: 'fit-content',
        borderBottom: '1px solid white',
        // textDecoration: 'underline',
      }}
    >
      <a href={link} target='_blank' rel='noreferrer'>
        {title}
      </a>
      <motion.div style={{ transform: 'rotate(-45deg)' }}>{'→'}</motion.div>
    </motion.div>
  )
}

export function Footer() {
  return (
    <div
      style={{
        color: 'white',
        display: 'flex',
        width: 'calc(100% - 60px)',
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: 30,
      }}
    >
      <div>Reach out to Creators</div>
      <ExternalLink title={'ruucm'} link={''} />
      <ExternalLink title={'seungmee'} link={''} />
    </div>
  )
}

Footer.defaultProps = {}
