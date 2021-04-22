import '../styles/globals.css'
import '../styles/profile.css'

import {AuthProvider} from '../lib/auth'

function MyApp({ Component, pageProps }) {
  return (
  <AuthProvider>
    <Component {...pageProps} />
  </AuthProvider>
  )
  
}

export default MyApp
