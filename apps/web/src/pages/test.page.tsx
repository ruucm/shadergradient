import {
  Gradient,
  TestControl,
  AllControls,
  PresetTitles,
} from 'shadergradient'
import { Button, Card, NumberInput } from 'shadergradient/ui'

// Dom components go here
export default function Page(props) {
  return (
    <div className='bg-slate-600'>
      <Button>Button</Button>
      <Card />
      {/* <TestControl />
      <NumberInput /> */}
      <div className='fixed bottom-0 z-10'>
        <AllControls isMobile={false} />
      </div>
    </div>
  )
}

Page.canvas = (props) => (
  <>
    <Gradient control='query' />
  </>
)

export async function getStaticProps() {
  return { props: { title: 'Index' } }
}
