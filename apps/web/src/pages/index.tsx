import Link from 'next/link'
import { Gradient, PresetTitles } from 'shadergradient'
import { TextHover, LoaderRoot } from 'shadergradient/ui'

// Dom components go here
export default function Page(props) {
  return (
    <>
      <div className='absolute top-9 z-10'>
        <PresetTitles />
        <Link href='/test'>
          <TextHover content='Try it by yourself →' />
        </Link>

        <LoaderRoot />
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
