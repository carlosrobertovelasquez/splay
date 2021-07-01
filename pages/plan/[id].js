import React from "react"
import { useRouter } from "next/router"
import Head from "next/head"
import Friend from "../../components/organims/plan"
export default function plan() {
  const router = useRouter()
  const userId = router.query.id

  return (
    <>
      <Head>
        <title>Splay7 Planes</title>
      </Head>
      <Friend userId={userId} />
    </>
  )
}
