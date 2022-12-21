import { Button, Card, TestControl } from 'shadergradient/ui'
import { Gradient } from 'shadergradient'
import { useControlValues } from 'shadergradient/controls'

// Dom components go here
export default function Page(props) {
  return (
    <div>
      <Button>Button</Button>
      <Card />
      <TestControl />
    </div>
  )
}

Page.canvas = (props) => {
  const controls = useControlValues('query', props)

  if (controls.type)
    return (
      <>
        <Gradient control='query' controls={controls} />
      </>
    )
}
export async function getStaticProps() {
  return { props: { title: 'Index' } }
}
