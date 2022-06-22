import React from "react"
import Head from "next/head"
import { useAuth } from "../lib/auth"
import Auth from "../pages/Auth"
import Home from "../components/organims/Home"
export default function index() {
  const { user } = useAuth()
  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
        />
      </Head>
      <div>
        {user === false && <Auth />}
        {user && <Home user={user} profile={"W"} />}
      </div>
    </React.Fragment>
  )
}
