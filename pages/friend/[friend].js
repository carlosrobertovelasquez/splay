import React from "react"
import { useRouter } from "next/router"
import Head from "next/head"
import Friend from "../../components/organims/friend"
export default function friend() {
  const router = useRouter()
  const userId = router.query.id

  return (
    <>
      <Head>
        <title>Splay7 Amigos</title>
      </Head>
      <Friend userId={userId} />
    </>
  )
}
