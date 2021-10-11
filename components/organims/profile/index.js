import React, { useEffect, useState } from "react"

import NavBar from "../../molecules/Navbar"
import Header from "../../molecules/Header/Profile"
import Body from "../../molecules/Profile/Body"
import Error404 from "../errors/404"
import { listenLatesUsers, listenLatesUsersbyslug } from "../../../lib/db"
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
    .filter((e) => e.userid === userId)
    .sort((a, b) => a.createAt - b.createAt)

  if (datos === undefined) return null
  return (
    <>    
    { (dataComentarios.length !== 0) && <NavBar datos={dataComentarios} profile={profile} /> }
    { (dataComentarios.length !== 0) && <Header userId={dataComentarios} profile={profile} /> }
    { (dataComentarios.length !== 0) && <Body userData={dataComentarios} profile={profile} /> }
    { (dataComentarios.length === 0) && <Error404/> }
    </>
  )
}
