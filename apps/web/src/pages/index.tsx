import { Gradient, PresetTitles } from 'shadergradient'

// Dom components go here
export default function Page(props) {
  return (
    <>
      <div className='absolute top-9 z-10'>
        <PresetTitles />
      </div>
    </>
  )
}

// Canvas components go here
// It will receive same props as the Page component (from getStaticProps, etc.)
Page.canvas = (props) => (
  <>
    <Gradient />
  </>
)

export async function getStaticProps() {
  return { props: { title: 'Index' } }
}
