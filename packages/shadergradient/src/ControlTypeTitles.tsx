import * as React from 'react'
import { ControlTypeTitle } from './ControlTypeTitle'

type ControlTypeTitlePropsT = {
  activeTab: any
  setActiveTab: any
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const ControlTypeTitles: React.FC<ControlTypeTitlePropsT> = ({
  activeTab,
  setActiveTab,
  ...rest
}) => {
  return (
    <div
      className={
        'flex justify-between gap-0.2 w-screen h-[fit-content] p-3.5 cursor-pointer md:w-full md:h-full md:flex-col md:justify-start'
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

      <ControlTypeTitle
        title='Background'
        active={activeTab === 'background'}
        onClick={(e) => {
          e.stopPropagation() // ignore parent click

          activeTab === 'background'
            ? setActiveTab('none')
            : setActiveTab('background')
        }}
      />
    </div>
  )
}
