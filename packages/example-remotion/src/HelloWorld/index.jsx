import {
  AbsoluteFill,
  interpolate,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion'
import { GradientBackground } from './GradientBackground'
import { Title } from './Title'

export const HelloWorld = ({ titleText, titleColor }) => {
  const frame = useCurrentFrame()
  const { durationInFrames, width, height } = useVideoConfig()

  // Fade out the animation at the end
  const opacity = interpolate(
    frame,
    [durationInFrames - 25, durationInFrames - 15],
    [1, 0],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }
  )

  // A <AbsoluteFill> is just a absolutely positioned <div>!
  return (
    <AbsoluteFill style={{ backgroundColor: 'white' }}>
      <AbsoluteFill style={{ opacity }}>
        <GradientBackground />
        <Sequence from={35}>
          <Title titleText={titleText} titleColor={titleColor} />
        </Sequence>
      </AbsoluteFill>
    </AbsoluteFill>
  )
}
