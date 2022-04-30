import * as React from 'react'
import cx from 'classnames'
import { motion } from 'framer-motion'
import { useUIStore } from '../../store'

export function PreviewBtn({ display = true, color = 'white' }) {
  const mode = useUIStore((state: any) => state.mode)
  const setMode = useUIStore((state: any) => state.setMode)

  return (
    <div style={{ display: display ? 'block' : 'none' }}>
      <div className='flex gap-1.5' style={{ display: 'flex' }}>
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
            border:
              mode !== 'full' ? '2px solid #FF430A' : '2px solid ' + color,
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
              background: mode !== 'full' ? '#FF430A' : color,
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
            border:
              mode !== 'full' ? '2px solid #FF430A' : '2px solid ' + color,
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
              background: mode !== 'full' ? '#FF430A' : color,
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
