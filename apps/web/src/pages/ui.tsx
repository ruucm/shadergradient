import { Button, Card } from 'shadergradient/ui'
import { Gradient, TestControl } from 'shadergradient'

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

Page.canvas = (props) => (
  <>
    <Gradient control='query' />
  </>
)

export async function getStaticProps() {
  return { props: { title: 'Index' } }
}
