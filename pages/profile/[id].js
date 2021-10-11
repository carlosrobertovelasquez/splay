import React from "react"
import { useRouter } from "next/router"
import Head from "next/head"
import Profile from "../../components/organims/profile"
export default function profile() {
  const router = useRouter()
  const userId = router.query.id
  const profile = router.query.profile
  return (
    <>
    {/*
      <Head>
        <title>Splay7 Wall</title>
      </Head>
      <Profile userId={userId} profile={profile} />
    */}
    </>
  )
}
