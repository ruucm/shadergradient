import { mainLoading } from '@/consts'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

const { to, rotDur, meshDur, rotDelay, meshDelay } = mainLoading

export const clock = new THREE.Clock()
//t = current time
//b = start value
//c = change in value
//d = duration

const increment = 20

export function useTimeAnimation({ animate, loop, loopStart, loopEnd }) {
  const material: any = useRef()
  const linemat: any = useRef()

  let currentTime = 0
  useFrame((state, delta) => {
    if (material.current) {
      let elapsed = clock.getElapsedTime()

      if (loop === 'enabled') {
        elapsed = loopStart
        elapsed = elapsed + clock.getElapsedTime()

        if (elapsed >= loopEnd) {
          elapsed = loopStart
          clock.start() // restart the clock
        }
      }

      // loading animation
      if (elapsed > meshDelay) {
        const current = material.current.userData.uLoadingTime.value
        const val =
          elapsed < meshDur + meshDelay
            ? // @ts-ignore
              Math.easeInOutCubic(
                currentTime,
                current,
                to - current,
                meshDur * 1000
              )
            : to
        material.current.userData.uLoadingTime.value = val

        if (elapsed < meshDur + meshDelay) {
          currentTime += increment
          // console.log({ elapsed, val })
        }
      }

      // loop animation
      if (animate === 'on') {
        material.current.userData.uTime.value = elapsed
        if (linemat.current !== undefined) {
          linemat.current.userData.uTime.value = elapsed
        }
      }
    }
  })

  return { material, linemat }
}
