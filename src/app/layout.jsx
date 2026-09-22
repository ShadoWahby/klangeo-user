import './globals.css'
import './fonts.css'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { AppProvider, Navbar, Footer } from '@/components/components'

export const metadata = {
  title: 'Klangeo',
  description: 'Build Your Own Canvas',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="3ZvgSnOLmZQR4r59xV07zS-BPC5YJX8xz8thGSoecLk" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
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