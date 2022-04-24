import * as React from 'react'
import { ControlTypeTitle } from './ControlTypeTitle'

type ControlTabTitlesPropsT = {
  activeTab: any
  setActiveTab: any
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const ControlTabTitles: React.FC<ControlTabTitlesPropsT> = ({
  activeTab,
  setActiveTab,
  ...rest
}) => {
  return (
    <div
      className={
        'flex justify-between flex-row gap-2 w-[fit-content] h-[58px] p-3 cursor-pointer md:w-full md:h-full md:flex-row md:justify-start'
      }
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

      {/* <PreviewSwitch mode={mode} setMode={setMode} display={!isMobile} /> */}
    </div>
  )
}
