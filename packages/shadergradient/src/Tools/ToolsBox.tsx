import * as React from 'react'
import cx from 'classnames'
import { usePropertyStore } from '../store'
import { IconButton } from './IconButton'

type ControlTypeTitlePropsT = {
  title?: string
  darkMode?: boolean
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const ToolsBox: React.FC<ControlTypeTitlePropsT> = ({
  title,
  darkMode,
  ...rest
}) => {
  const toggleZoom = usePropertyStore((state: any) => state.toggleZoom)
  const toggleAxis = usePropertyStore((state: any) => state.toggleAxis)
  const [copyUrlText, setCopyUrl] = React.useState('copy url')

  return (
    <div
      className={cx(
        'flex bg-controls-panel items-center justify-center',
        darkMode && 'bg-controls-sub-panel'
      )}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 6,
        width: 'fit-content',
        height: 'fit-content',
        padding: 8,
        borderRadius: 40,
      }}
    >
      <IconButton icon='CornerUpLeft' content='undo' />
      <IconButton
        icon='Box'
        content='3d axis'
        active={toggleAxis}
        onClick={() => {
          usePropertyStore.setState({ toggleAxis: !toggleAxis })
        }}
      />
      <IconButton
        icon='Minimize2'
        content='zoom out'
        active={toggleZoom}
        onClick={() => {
          usePropertyStore.setState({ toggleZoom: !toggleZoom })
        }}
      />
      <IconButton
        icon='Copy'
        content={copyUrlText}
        onClick={async () => {
          window.navigator.clipboard.writeText(window.location.href)
          setCopyUrl('copied!')
          await setTimeout(() => {
            setCopyUrl('copy url')
          }, 1000)
        }}
      />
    </div>
  )
}
