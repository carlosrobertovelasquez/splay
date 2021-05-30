import "../styles/globals.css"
import "../styles/profile.css"
import { AuthProvider } from "../lib/auth"
import React from "react"
import Head from "next/head"
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  )
}

export default MyApp
