import './globals.css'
import './fonts.css'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { AppProvider, Navbar, Footer } from '@/components/components'

export const metadata = {
  title: "Klangeo",
  description: "Rig it. Tune it. Run it. Klangeo gives you full control to craft a sound that's uniquely you. Explore our tools and start creating today. Klangeo, Build Your Own Canvas",
}

export default function RootLayout({ children }) {
  const jsonLD = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Klangeo",
    "url": "https://klangeo.com",
    "logo": "https://klangeo.com/logo.svg"
  }

  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="3ZvgSnOLmZQR4r59xV07zS-BPC5YJX8xz8thGSoecLk" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }} />
      </head>
      <body>
        <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
          <AppProvider>
            <Navbar />
            {children}
            <Footer />
          </AppProvider>
        </GoogleOAuthProvider>
        <noscript>Please enable JavaScript to use this application.</noscript>
      </body>
    </html>
  )
}