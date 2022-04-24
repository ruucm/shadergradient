import * as React from 'react'
import cx from 'classnames'
import { motion } from 'framer-motion'

export function PreviewBtn({
  mode = 'mobile',
  setMode = void 0,
  display = true,
  color = 'white',
}) {
  return (
    <div style={{ display: display ? 'block' : 'none' }}>
      <div className='flex gap-1.5'>
        <motion.div
          className={cx('rounded-sm cursor-pointer w-[17px] h-[31px]')}
          onClick={() => {
            if (mode !== 'mobile') {
              setMode('mobile')
            } else {
              setMode('full')
            }
          }}
          style={{
            overflow: 'hidden',
            border: '2px solid ' + color,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <motion.div
            style={{
              width: '100%',
              height: '100%',
              padding: 20,
              background: color,
            }}
            whileHover={{
              opacity: mode === 'mobile' ? 1 : 0.4,
            }}
            animate={{
              opacity: mode === 'mobile' ? 1 : 0,
            }}
          ></motion.div>
        </motion.div>
        <motion.div
          className={cx('rounded-sm cursor-pointer  w-[47px] h-[31px]')}
          onClick={() => {
            if (mode !== 'web') {
              setMode('web')
            } else {
              setMode('full')
            }
          }}
          style={{
            overflow: 'hidden',
            border: '2px solid ' + color,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <motion.div
            style={{
              width: '100%',
              height: '100%',
              padding: 20,
              background: color,
            }}
            whileHover={{
              opacity: mode === 'web' ? 1 : 0.4,
            }}
            animate={{
              opacity: mode === 'web' ? 1 : 0,
            }}
          ></motion.div>
        </motion.div>
      </div>
    </div>
  )
}
