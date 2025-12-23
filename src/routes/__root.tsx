import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from '@tanstack/react-router'
import { SpeedInsights } from '@vercel/speed-insights/react'
import appCss from '~/styles/app.css?url'
import { BackgroundAnimation } from '~/components/BackgroundAnimation'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#0a0a0a' },
      { name: 'color-scheme', content: 'dark' },
      { name: 'description', content: 'Tyndfed - Creative development studio specializing in mobile apps, websites, and digital design.' },
      { name: 'author', content: 'Tobias Dosdal-Feddersen' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://tyndfed.dk/' },
      { property: 'og:title', content: 'Tyndfed - Creative Development Studio' },
      { property: 'og:description', content: 'Danish development studio creating innovative mobile apps and websites.' },
      { property: 'og:image', content: 'https://tyndfed.dk/images/tyndfed.svg' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', type: 'image/svg+xml', href: '/images/tyndfed.svg' },
      { rel: 'apple-touch-icon', href: '/images/tyndfed.svg' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap' },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <Outlet />
        <BackgroundAnimation />
        <SpeedInsights />
        <Scripts />
      </body>
    </html>
  )
}
