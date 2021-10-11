import React from "react"
import { useRouter } from "next/router"
import Head from "next/head"
import Profile from "../components/organims/profile"
export default function profile() {
  const router = useRouter()
  const userId = router.query.index;
  const profile = router.query.profile
  let result = null;
  /*if (router.query.publicacion)
  {
    console.log("esta es una publicacion");  
    return (
      <>
        <Head>
          <title>Publicacion</title>
        </Head>
        <h2>hola gente</h2>
      </>
    )
  }
  else {
*/
    return (
      <>
        <Head>
          <title>Splay7 Wall</title>
        </Head>
        <Profile userId={userId} profile={profile} />
      </>
    )
}
