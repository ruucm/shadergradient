export type IconName = 'Info' | 'CornerUpLeft' | 'Minimize2'

type IconProps = {
  name: IconName
}

export function Feather({ name, ...rest }: IconProps) {
  switch (name) {
    case 'Info':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='14'
          height='14'
          viewBox='0 0 24 24'
          fill='none'
          stroke='rgb(255,67,10)'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <circle cx='12' cy='12' r='10'></circle>
          <line x1='12' y1='16' x2='12' y2='12'></line>
          <line x1='12' y1='8' x2='12.01' y2='8'></line>
        </svg>
      )

    case 'CornerUpLeft':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          viewBox='0 0 24 24'
          fill='none'
          stroke='rgb(255,67,10)'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <polyline points='9 14 4 9 9 4'></polyline>
          <path d='M20 20v-7a4 4 0 0 0-4-4H4'></path>
        </svg>
      )

    case 'Minimize2':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          viewBox='0 0 24 24'
          fill='none'
          stroke='rgb(255,67,10)'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <polyline points='4 14 10 14 10 20'></polyline>
          <polyline points='20 10 14 10 14 4'></polyline>
          <line x1='14' y1='10' x2='21' y2='3'></line>
          <line x1='3' y1='21' x2='10' y2='14'></line>
        </svg>
      )

    default:
      break
  }
}
