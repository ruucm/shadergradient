import Head from 'next/head'
import { useRouter } from 'next/router'
import { isDev } from './consts'
import { GAScript } from './pages/ga-script'

const Header = ({ title }) => {
  const router = useRouter()
  const meta = {
    title: 'Shader Gradient',
    description:
      'The easiest and fastest way to create a 3D website using React Three Fiber and NextJS',
    image: 'https://shadergradient-beige.vercel.app/og.png',
    type: 'website',
  }

  return (
    <>
      <Head>
        {/* Recommended Meta Tags */}
        <title>{`${isDev ? '[DEV] ' : ''}${meta.title}`}</title>
        <meta name='robots' content='follow, index' />
        <meta content={meta.description} name='description' />
        <meta
          property='og:url'
          content={`https://shadergradient-beige.vercel.app${router.asPath}`}
        />
        <link
          rel='canonical'
          href={`https://shadergradient-beige.vercel.app${router.asPath}`}
        />
        <meta property='og:type' content={meta.type} />
        <meta property='og:site_name' content={meta.title} />
        <meta property='og:description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
        <meta property='og:image' content={meta.image} />
        {/* 
      Twitter Summary card
        documentation: https://dev.twitter.com/cards/getting-started
        Be sure validate your Twitter card markup on the documentation site. */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@ruucm' />
        <meta name='twitter:title' content={meta.title} />
        <meta name='twitter:description' content={meta.description} />
        <meta name='twitter:image' content={meta.image} />

        <GAScript />

        <link rel='apple-touch-icon' href='/icons/apple-touch-icon.png' />
        <link
          rel='apple-touch-icon'
          sizes='16x16'
          href='/icons/favicon-16x16.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='32x32'
          href='/icons/favicon-32x32.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/icons/apple-touch-icon.png'
        />
        <link rel='manifest' href='/manifest.json' />
        <link
          rel='mask-icon'
          color='#000000'
          href='/icons/safari-pinned-tab.svg'
        />
        <link rel='apple-touch-startup-image' href='/startup.png' />

        {/* Meta Tags for HTML pages on Mobile */}
        {/* <meta name="format-detection" content="telephone=yes"/>
        <meta name="HandheldFriendly" content="true"/>  */}
        <meta
          name='viewport'
          content='width=device-width, minimum-scale=1, initial-scale=1.0'
        />
        <meta name='theme-color' content='#000' />
        <link rel='shortcut icon' href='/icons/favicon.ico' />

        {/* Fonts */}
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;900&display=swap'
          rel='stylesheet'
        />
      </Head>
    </>
  )
}

export default Header
