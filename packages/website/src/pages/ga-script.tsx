import React from 'react'

export const GAScript = () => (
  <>
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${
        process.env.GA_TRACKING_ID || 'G-N1WRMRQMXM'
      }`}
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.GA_TRACKING_ID || 'G-N1WRMRQMXM'}');
          `,
      }}
    />
  </>
)
