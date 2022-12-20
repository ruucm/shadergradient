import { Button, Card } from 'shadergradient/ui'

// Dom components go here
export default function Page(props) {
  return (
    <div>
      <Button>Button</Button>
      <Card />
    </div>
  )
}

Page.canvas = (props) => <></>

export async function getStaticProps() {
  return { props: { title: 'Index' } }
}
