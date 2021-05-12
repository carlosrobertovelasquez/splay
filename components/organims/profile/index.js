import React, { useEffect, useState } from "react"

import NavBar from "./Navbar"
import Header from "./Header"
import Body from "./Body"
import { listenLatesUsers } from "../../../lib/db"
export default function index(props) {
  const { profile } = props
  const { userId } = props
  const [dataComentarios, setDataComentarios] = useState(undefined)
  useEffect(() => {
    let unsubscribe
    if (userId) {
      unsubscribe = listenLatesUsers((newUsers) => {
        setDataComentarios(newUsers)
      })
      return () => unsubscribe && unsubscribe()
    }
  }, [userId])

  if (dataComentarios === undefined) return null
  const datos = dataComentarios
    .slice()
    .sort((a, b) => a.createAt - b.createAt)
    .filter((e) => e.userid === userId)

  if (datos === undefined) return null

  return (
    <React.Fragment>
      <NavBar userId={datos} profile={profile} />
      <Header userId={datos} profile={profile} />
      <Body userData={datos} profile={profile} />
    </React.Fragment>
  )
}
