import { ControlType } from 'framer'

export function Icons({ iconName, color }) {
  return (
    <div style={containerStyle}>
      {iconName === 'framer' && (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill={color}
          stroke={color}
          display='inline-block'
          viewBox='0 0 256 256'
          style={{
            WebkitUserSelect: 'none',
            MozUserSelect: 'none',
            msUserSelect: 'none',
            userSelect: 'none',
            width: '100%',
            height: '100%',
            WebkitFlexShrink: '0',
            flexShrink: '0',
          }}
        >
          <path d='M200 104h-51l56.27 50a8 8 0 01-5.27 14h-64v64a8 8 0 01-13.66 5.66l-72-72A8 8 0 0148 160V96a8 8 0 018-8h51L50.69 38A8 8 0 0156 24h144a8 8 0 018 8v64a8 8 0 01-8 8z'></path>
        </svg>
      )}
      {iconName === 'figma' && (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill={color}
          stroke={color}
          display='inline-block'
          viewBox='0 0 256 256'
          style={{
            WebkitUserSelect: 'none',
            MozUserSelect: 'none',
            msUserSelect: 'none',
            userSelect: 'none',
            width: '100%',
            height: '100%',
            WebkitFlexShrink: '0',
            flexShrink: '0',
          }}
        >
          <path d='M184 96a40 40 0 00-24-72H88a40 40 0 00-24 72 40 40 0 001.37 65A44 44 0 10136 196v-36a40 40 0 1048-64zm-48-56h24a24 24 0 010 48h-24zm24 112a24 24 0 1124-24 24 24 0 01-24 24z'></path>
        </svg>
      )}
      {iconName === 'github' && (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='30'
          height='30'
          fill='none'
          viewBox='0 0 30 30'
        >
          <path
            fill={color}
            d='M19.949 28v-3.726a4.41 4.41 0 00-1.205-3.388c4.025-.455 8.256-2 8.256-9.088a7.11 7.11 0 00-1.923-4.869 6.663 6.663 0 00-.115-4.894s-1.513-.454-5.013 1.921a16.959 16.959 0 00-8.975 0c-3.5-2.375-5.012-1.921-5.012-1.921a6.658 6.658 0 00-.116 4.894 7.113 7.113 0 00-1.923 4.908c0 7.036 4.231 8.581 8.256 9.088a4.406 4.406 0 00-1.205 3.349V28h8.975z'
          ></path>
          <path
            stroke={color}
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M10.974 25.404c-3.846 1.263-7.051 0-8.974-3.895'
          ></path>
        </svg>
      )}
    </div>
  )
}

const containerStyle = {
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
}

Icons.propertyControls = {
  color: { type: ControlType.Color },
  iconName: {
    type: ControlType.Enum,
    options: ['framer', 'figma', 'github'],
  },
}
