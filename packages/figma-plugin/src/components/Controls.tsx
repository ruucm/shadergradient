import * as React from 'react'
import { useState } from 'react'
// import { UI, useQueryState } from '../../../dist'

export function Controls() {
  const [activeTab, setActiveTab] = useState('shape')
  // const [embedMode] = useQueryState('embedMode')

  // if (embedMode === 'off')
  return (
    <>
      {/* <UI.ControlTypeTitles
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <UI.PropertyControls
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        /> */}
    </>
  )
  // else return <></>
}
