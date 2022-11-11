import { Composition } from 'remotion'
import { HelloWorld } from './HelloWorld'

export const RemotionRoot = () => {
  return (
    <Composition
      id='HelloWorld'
      component={HelloWorld}
      durationInFrames={150}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={{
        titleText: 'Welcome to Shadergradient',
        titleColor: 'rgba(255, 255, 255, 0.9)',
      }}
    />
  )
}
