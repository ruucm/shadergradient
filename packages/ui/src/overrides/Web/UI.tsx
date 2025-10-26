import type { ComponentType } from 'react'

import { useState, useEffect } from 'react'
import { useUIStore, useUIOverrideStore } from '@/store'
import {
  PRESETS,
  useURLQueryState,
} from '@/components/Shared/ShaderGradientStateless'
// import { ui } from "https://framer.com/m/ui-gy7Z.js"
// const { PRESETS, useURLQueryState } = ui

export function ArrowLeft(Component): ComponentType {
  return ({ style, ...props }: any) => {
    const activePreset = useUIStore((state) => state.activePreset)
    const setActivePreset = useUIStore((state) => state.setActivePreset)
    const setQueryValue = useURLQueryState()

    return (
      <Component
        {...props}
        style={{ ...style, cursor: 'pointer' }}
        onClick={() => {
          let presetNumber
          if (activePreset !== 0) {
            presetNumber = activePreset - 1
          } else {
            presetNumber = PRESETS.length - 1
          }

          setActivePreset(presetNumber)
          setQueryValue(PRESETS[presetNumber].url)
        }}
      />
    )
  }
}

export function ArrowRight(Component): ComponentType {
  return ({ style, ...props }: any) => {
    const activePreset = useUIStore((state) => state.activePreset)
    const setActivePreset = useUIStore((state) => state.setActivePreset)
    const setQueryValue = useURLQueryState()

    return (
      <Component
        {...props}
        style={{ ...style, cursor: 'pointer' }}
        onClick={() => {
          console.log('onClick')
          let presetNumber
          if (activePreset !== PRESETS.length - 1) {
            presetNumber = activePreset + 1
          } else {
            presetNumber = 0
          }

          setActivePreset(presetNumber)
          setQueryValue(PRESETS[presetNumber].url)
        }}
      />
    )
  }
}

export function PresetIndex(Component): ComponentType {
  return ({ style, ...props }: any) => {
    const activePreset = useUIStore((state) => state.activePreset)

    return (
      <Component {...props} key={activePreset} content={`0${activePreset}`} />
    )
  }
}

export function PresetTitle(Component): ComponentType {
  return ({ style, ...props }: any) => {
    const activePreset = useUIStore((state) => state.activePreset)
    const presetTitle = PRESETS[activePreset].title

    return <Component {...props} key={activePreset} content={presetTitle} />
  }
}

/** ------------------------------------------------------------------
 *                         GRADIENT OVERRIDES
 * -----------------------------------------------------------------*/

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max)
}

const rgbToHex = (r, g, b) =>
  '#' +
  [r, g, b]
    .map((x) => {
      const hex = x.toString(16)
      return hex.length === 1 ? '0' + hex : hex
    })
    .join('')

// FOR RANDOMIZE INTERACTION
export function randomGradient(Component): ComponentType {
  return (props) => {
    const randomColor = useUIOverrideStore((state) => state.randomColor)

    return (
      <Component
        {...props}
        color1={
          'rgb(' +
          randomColor[0][0] +
          ', ' +
          randomColor[0][1] +
          ', ' +
          randomColor[0][2] +
          ')'
        }
        color2={
          'rgb(' +
          randomColor[1][0] +
          ', ' +
          randomColor[1][1] +
          ', ' +
          randomColor[1][2] +
          ')'
        }
        color3={
          'rgb(' +
          randomColor[2][0] +
          ', ' +
          randomColor[2][1] +
          ', ' +
          randomColor[2][2] +
          ')'
        }
      />
    )
  }
}

export function randomText(Component): ComponentType {
  return (props) => {
    const randomColor = useUIOverrideStore((state) => state.randomColor)

    return (
      <Component
        {...props}
        text={`${rgbToHex(
          randomColor[0][0],
          randomColor[0][1],
          randomColor[0][2]
        )} - ${rgbToHex(
          randomColor[1][0],
          randomColor[1][1],
          randomColor[1][2]
        )} - ${rgbToHex(
          randomColor[2][0],
          randomColor[2][1],
          randomColor[2][2]
        )}`}
      />
    )
  }
}

export function randomBtn(Component): ComponentType {
  return (props) => {
    const setRandomColor = useUIOverrideStore((state) => state.setRandomColor)

    return (
      <Component
        {...props}
        whileHover={{ scale: 1.05 }}
        // style={{ userSelect: "none" }}
        onClick={() => {
          console.log('onClick')
          setRandomColor([
            [getRandomInt(255), getRandomInt(255), getRandomInt(255)],
            [getRandomInt(255), getRandomInt(255), getRandomInt(255)],
            [getRandomInt(255), getRandomInt(255), getRandomInt(255)],
          ])
        }}
      />
    )
  }
}

// FOR SLIDER INTERACTION
export function time(Component): ComponentType {
  return (props) => {
    const slider = useUIOverrideStore((state) => state.slider)
    const [hour, setHour] = useState(7)
    const [min, setMin] = useState(0)
    const [totalMin, setTotalMin] = useState(0)
    useEffect(() => {
      // slider 0-> 07:00, slider 100-> 22:00
      setTotalMin((900 * slider) / 100)
      setHour(7 + Math.floor(totalMin / 60))
      setMin(Math.floor(totalMin % 60))
    }, [slider])
    return (
      <Component
        {...props}
        text={min < 10 ? `${hour}:0${min}` : `${hour}:${min}`}
      />
    )
  }
}

export function slider(Component): ComponentType {
  return (props) => {
    const setSlider = useUIOverrideStore((state) => state.setSlider)

    return (
      <Component
        {...props}
        onChange={(e) => {
          setSlider(e)
        }}
      />
    )
  }
}

const toRGBArray = (rgbStr) => rgbStr?.match(/\d+/g).map(Number)

export function sliderSmartComp(Component): ComponentType {
  return (props: any) => {
    const slider = useUIOverrideStore((state) => state.slider)
    var initial1 = toRGBArray(props.initialColor1)
    var initial2 = toRGBArray(props.initialColor2)
    var initial3 = toRGBArray(props.initialColor3)
    var switch1 = toRGBArray(props.switchColor1)
    var switch2 = toRGBArray(props.switchColor2)
    var switch3 = toRGBArray(props.switchColor3)

    const init1 =
      'rgb(' +
      Math.round(initial1[0] - ((initial1[0] - switch1[0]) * slider) / 100) +
      ', ' +
      Math.round(initial1[1] - ((initial1[1] - switch1[1]) * slider) / 100) +
      ', ' +
      Math.round(initial1[2] - ((initial1[2] - switch1[2]) * slider) / 100) +
      ')'

    return (
      <Component
        {...props}
        initialColor1={
          'rgb(' +
          Math.round(
            initial1[0] - ((initial1[0] - switch1[0]) * slider) / 100
          ) +
          ', ' +
          Math.round(
            initial1[1] - ((initial1[1] - switch1[1]) * slider) / 100
          ) +
          ', ' +
          Math.round(
            initial1[2] - ((initial1[2] - switch1[2]) * slider) / 100
          ) +
          ')'
        }
        initialColor2={
          'rgb(' +
          Math.round(
            initial2[0] - ((initial2[0] - switch2[0]) * slider) / 100
          ) +
          ', ' +
          Math.round(
            initial2[1] - ((initial2[1] - switch2[1]) * slider) / 100
          ) +
          ', ' +
          Math.round(
            initial2[2] - ((initial2[2] - switch2[2]) * slider) / 100
          ) +
          ')'
        }
        initialColor3={
          'rgb(' +
          Math.round(
            initial3[0] - ((initial3[0] - switch3[0]) * slider) / 100
          ) +
          ', ' +
          Math.round(
            initial3[1] - ((initial3[1] - switch3[1]) * slider) / 100
          ) +
          ', ' +
          Math.round(
            initial3[2] - ((initial3[2] - switch3[2]) * slider) / 100
          ) +
          ')'
        }
      />
    )
  }
}

// FOR TOGGLE INTERACTION
export function toggleSmartComp(Component): ComponentType {
  return (props) => {
    const toggle = useUIOverrideStore((state) => state.toggle)

    return (
      <Component {...props} variant={toggle === true ? 'Switch' : 'Initial'} />
    )
  }
}

export function textClipper(Component): ComponentType {
  return (props) => {
    return (
      <Component
        {...props}
        style={{
          color: 'rgb(255,255,255)',
          background: '#000000',
          mixBlendMode: 'multiply',
        }}
      />
    )
  }
}
