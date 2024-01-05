import './globals.css'
import Head from 'next/head'

import Footer from '@/components/Footer'

export const metadata = {
  title: 'Weather App',
  description: 'A Weather App',
}

export default async function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-hidden">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta charset="UTF-8" />
        <meta name="Weather App" content="A weather app that shows the current weather based on your current location." />
        <meta name="keywords" content="Weather, Wetter, weather, weather app, weather forecast, wettervorhersage, wettervorhersage-app, wettervorhersage-app"></meta>
        <meta name="author" content="Andreas Prager"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
        <div className="position-absolute top-0 w-full h-full box-border max-h-fit">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
