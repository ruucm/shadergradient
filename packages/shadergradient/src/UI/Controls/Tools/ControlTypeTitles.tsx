import * as React from 'react'
import { ControlTypeTitle } from './ControlTypeTitle'

type ControlTypeTitlePropsT = {
  activeTab: any
  setActiveTab: any
  isMobile: boolean
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const ControlTypeTitles: React.FC<ControlTypeTitlePropsT> = ({
  activeTab,
  setActiveTab,
  isMobile,
  ...rest
}) => {
  return (
    <div
      className={
        'flex flex-row justify-start gap-3 w-[fit-content] h-[58px] p-3 cursor-pointer md:w-full md:h-full md:justify-between md:bg-white'
      }
      style={{
        width: isMobile === false ? 'fit-content' : '100%',
        height: isMobile === false ? 58 : '100%',
        justifyContent: isMobile === false ? 'flex-start' : 'space-between',
        background: isMobile === false ? 'transparent' : 'white',
      }}
      onClick={() => setActiveTab('shape')}
    >
      <ControlTypeTitle
        title='Shape'
        active={activeTab === 'shape'}
        onClick={() => {
          activeTab === 'shape' ? setActiveTab('none') : setActiveTab('shape')
        }}
      />

      <ControlTypeTitle
        title='Colors'
        active={activeTab === 'colors'}
        onClick={(e) => {
          e.stopPropagation() // ignore parent click

          activeTab === 'colors' ? setActiveTab('none') : setActiveTab('colors')
        }}
      />

      <ControlTypeTitle
        title='Effects'
        active={activeTab === 'effects'}
        onClick={(e) => {
          e.stopPropagation() // ignore parent click

          activeTab === 'effects'
            ? setActiveTab('none')
            : setActiveTab('effects')
        }}
      />

      <ControlTypeTitle
        title='View'
        active={activeTab === 'view'}
        onClick={(e) => {
          e.stopPropagation() // ignore parent click

          activeTab === 'view' ? setActiveTab('none') : setActiveTab('view')
        }}
      />
      {/* 
      <ControlTypeTitle
        title='Background'
        active={activeTab === 'background'}
        onClick={(e) => {
          e.stopPropagation() // ignore parent click

          activeTab === 'background'
            ? setActiveTab('none')
            : setActiveTab('background')
        }}
      /> */}
    </div>
  )
}
