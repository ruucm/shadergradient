import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components'

export type ShaderGradientUpdateEmailProps = {
  logoUrl?: string
  headline?: string
  introText?: string
  performanceGifUrl?: string
  figmaPluginGifUrl?: string
  figmaPluginUrl?: string
  framerPluginUrl?: string
  githubUrl?: string
  updatesUrl?: string
  twitterUrl?: string
  accentColor?: string
}

const defaultProps: ShaderGradientUpdateEmailProps = {
  logoUrl:
    'https://ruucm.github.io/shadergradient/ui@latest/assets/email/sg-logo.png',
  headline: 'ShaderGradient got\nfaster and smoother',
  introText:
    "We've been working on some improvements for ShaderGradient to make it smoother, lighter, and easier to use.\n\nToday, we're excited to share what's new.",
  performanceGifUrl:
    'https://ruucm.github.io/shadergradient/ui@latest/assets/email/perf-new.gif',
  figmaPluginGifUrl:
    'https://ruucm.github.io/shadergradient/ui@latest/assets/email/figma-plugin.gif',
  figmaPluginUrl:
    'https://www.figma.com/community/plugin/1203016883447870818/shadergradient',
  framerPluginUrl: 'https://www.framer.com/marketplace/plugins/shadergradient/',
  githubUrl: 'https://github.com/ruucm/shadergradient',
  updatesUrl: 'https://shadergradient.co/updates',
  twitterUrl: 'https://x.com/shadergradient',
  accentColor: '#ff340a',
}

export default function ShaderGradientUpdateEmail(
  props: ShaderGradientUpdateEmailProps = {}
) {
  const {
    logoUrl,
    headline,
    introText,
    performanceGifUrl,
    figmaPluginGifUrl,
    figmaPluginUrl,
    framerPluginUrl,
    githubUrl,
    updatesUrl,
    twitterUrl,
    accentColor,
  } = { ...defaultProps, ...props }

  return (
    <Html>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400&display=swap');
            
            @media only screen and (max-width: 600px) {
              .container {
                padding: 20px 20px 60px !important;
              }
              .headline {
                font-size: 28px !important;
              }
              .section-title {
                font-size: 20px !important;
              }
              .gif {
                width: 100% !important;
                height: auto !important;
              }
              .gif-placeholder {
                width: 100% !important;
                height: auto !important;
                aspect-ratio: 1 !important;
              }
              .button {
                width: 100% !important;
                box-sizing: border-box !important;
              }
              .body-text, .bullet-point, .footer-text {
                max-width: 100% !important;
                font-size: 14px !important;
              }
              .intro-text {
                max-width: 100% !important;
                font-size: 15px !important;
              }
            }
          `}
        </style>
      </Head>
      <Preview>ShaderGradient got smoother, lighter, and easier to use</Preview>
      <Body style={styles.body}>
        <Container style={styles.container} className='container'>
          {/* Logo */}
          <Section style={styles.logoSection}>
            {logoUrl ? (
              <Img
                src={logoUrl}
                alt='ShaderGradient'
                width='60'
                height='60'
                style={styles.logo}
              />
            ) : (
              <div style={styles.logoPlaceholder} />
            )}
          </Section>

          {/* Headline */}
          <Heading
            style={{ ...styles.headline, color: accentColor }}
            className='headline'
          >
            {headline}
          </Heading>

          {/* Intro */}
          <Text style={styles.introText} className='intro-text'>
            {introText}
          </Text>

          <Hr style={styles.divider} />

          {/* Performance Section */}
          <Heading style={styles.sectionTitle} className='section-title'>
            Performance improvements
          </Heading>
          <Section style={styles.gifContainer}>
            {performanceGifUrl ? (
              <Img
                src={performanceGifUrl}
                alt='Performance improvements'
                width='480'
                style={styles.gif}
                className='gif'
              />
            ) : (
              <div style={styles.gifPlaceholder} className='gif-placeholder'>
                <Text style={styles.placeholderText}>GIF placeholder</Text>
              </div>
            )}
          </Section>
          <Text style={styles.bodyText} className='body-text'>
            We heard your feedback: performance was the main challenge when
            using ShaderGradient on the web.
          </Text>
          <Text style={styles.bodyText} className='body-text'>
            This update focuses heavily on speed and stability:
          </Text>
          <Text style={styles.bulletPoint} className='bullet-point'>
            • The package size is now 60% smaller
          </Text>
          <Text style={styles.bulletPoint} className='bullet-point'>
            • Added lazy load to offload gradients when they're not visible
          </Text>
          <Text style={styles.bodyText} className='body-text'>
            So if you're using our Framer component or React package, make sure
            to update!
          </Text>
          <Section style={styles.buttonGroup}>
            <Button
              href={framerPluginUrl}
              style={{ ...styles.button, backgroundColor: accentColor }}
              className='button'
            >
              Framer Plugin
            </Button>
            <Button
              href={githubUrl}
              style={{
                ...styles.button,
                ...styles.buttonSecondary,
                color: accentColor,
              }}
              className='button'
            >
              Github
            </Button>
          </Section>

          <Hr style={styles.divider} />

          {/* Figma Plugin Section */}
          <Heading style={styles.sectionTitle} className='section-title'>
            Meet whole new Figma Plugin
          </Heading>
          <Section style={styles.gifContainer}>
            {figmaPluginGifUrl ? (
              <Img
                src={figmaPluginGifUrl}
                alt='Figma Plugin'
                width='480'
                style={styles.gif}
                className='gif'
              />
            ) : (
              <div style={styles.gifPlaceholder} className='gif-placeholder'>
                <Text style={styles.placeholderText}>GIF placeholder</Text>
              </div>
            )}
          </Section>
          <Text style={styles.bodyText} className='body-text'>
            We also launched a brand-new ShaderGradient plugin for Figma!
          </Text>
          <Text style={styles.bodyText} className='body-text'>
            It includes:
          </Text>
          <Text style={styles.bulletPoint} className='bullet-point'>
            • ✨ Loop support for infinite moving gradients
          </Text>
          <Text style={styles.bulletPoint} className='bullet-point'>
            • Download, or add directly to Figma or even Slides and Buzz!
          </Text>
          <Text style={styles.bulletPoint} className='bullet-point'>
            • Many more UX improvements, including easy view control, letting
            you directly interact with gradient and change zoom/angle
          </Text>
          <Section style={styles.buttonSection}>
            <Button
              href={figmaPluginUrl}
              style={{ ...styles.button, backgroundColor: accentColor }}
              className='button'
            >
              Figma Plugin
            </Button>
          </Section>

          <Hr style={styles.divider} />

          {/* Footer */}
          <Text style={styles.footerText} className='footer-text'>
            For more details, check out{' '}
            <Link href={updatesUrl} style={styles.link}>
              shadergradient.co/updates
            </Link>
          </Text>
          <Text style={styles.footerText} className='footer-text'>
            Thanks for your continued support, and hope you enjoy new updates!
          </Text>
          <Text style={styles.footerText} className='footer-text'>
            Reach out to us on{' '}
            <Link href={twitterUrl} style={styles.link}>
              Twitter
            </Link>{' '}
            or share your work with us!
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

const styles = {
  body: {
    backgroundColor: '#ffffff',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    margin: 0,
    padding: 0,
  },
  container: {
    margin: '0 auto',
    padding: '20px 40px 80px',
    maxWidth: '696px',
  },
  logoSection: {
    textAlign: 'center' as const,
    marginBottom: '30px',
  },
  logo: {
    borderRadius: '10px',
    margin: '0 auto',
    display: 'block' as const,
  },
  logoPlaceholder: {
    width: '60px',
    height: '60px',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    margin: '0 auto',
  },
  headline: {
    fontSize: '36px',
    fontWeight: 400,
    lineHeight: '1.3',
    textAlign: 'center' as const,
    margin: '0 0 30px',
    whiteSpace: 'pre-wrap' as const,
  },
  introText: {
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '1.4',
    textAlign: 'center' as const,
    color: '#000000',
    maxWidth: '482px',
    margin: '0 auto 30px',
    whiteSpace: 'pre-wrap' as const,
  },
  divider: {
    borderColor: '#e5e5e5',
    borderWidth: '1px',
    margin: '30px 0',
  },
  sectionTitle: {
    fontSize: '24px',
    fontWeight: 400,
    lineHeight: '1.4',
    textAlign: 'center' as const,
    color: '#000000',
    margin: '0 0 30px',
  },
  gifContainer: {
    textAlign: 'center' as const,
    marginBottom: '30px',
  },
  gif: {
    borderRadius: '20px',
    maxWidth: '100%',
    margin: '0 auto',
    display: 'block' as const,
  },
  gifPlaceholder: {
    width: '100%',
    maxWidth: '480px',
    aspectRatio: '1',
    backgroundColor: '#ebebeb',
    borderRadius: '20px',
    margin: '0 auto',
    display: 'flex' as const,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
  },
  placeholderText: {
    fontSize: '16px',
    fontWeight: 400,
    color: '#000000',
    textAlign: 'center' as const,
  },
  bodyText: {
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '1.4',
    color: '#000000',
    maxWidth: '482px',
    margin: '0 auto 14px',
  },
  bulletPoint: {
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '1.4',
    color: '#000000',
    maxWidth: '482px',
    margin: '0 auto 8px',
    paddingLeft: '24px',
  },
  buttonSection: {
    textAlign: 'center' as const,
    marginTop: '20px',
  },
  buttonGroup: {
    textAlign: 'center' as const,
    marginTop: '20px',
  },
  button: {
    display: 'block',
    width: '100%',
    maxWidth: '480px',
    margin: '0 auto 10px',
    padding: '15px 24px',
    borderRadius: '10px',
    fontSize: '16px',
    fontWeight: 400,
    color: '#ffffff',
    textAlign: 'center' as const,
    textDecoration: 'none',
    boxSizing: 'border-box' as const,
  },
  buttonSecondary: {
    backgroundColor: '#fce0da',
    margin: '0 auto',
  },
  footerText: {
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '1.4',
    color: '#000000',
    maxWidth: '482px',
    margin: '0 auto 14px',
  },
  link: {
    color: '#000000',
    textDecoration: 'underline',
  },
}

export const PreviewProps: ShaderGradientUpdateEmailProps = defaultProps
