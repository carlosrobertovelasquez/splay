import React, { useState, useEffect } from "react"
import Navbar from "../../molecules/Navbar"
import { useAuth } from "../../../lib/auth"
import { listenLatesUsers } from "../../../lib/db"
import Friends from "./friends"
export default function index() {
  const { user } = useAuth()

  const [dataUser, setDataUser] = useState(undefined)

  useEffect(() => {
    let unsubscribe
    if (user) {
      unsubscribe = listenLatesUsers((newUsers) => {
        setDataUser(newUsers)
      })
      return () => unsubscribe && unsubscribe()
    }
  }, [user])

  if (dataUser === undefined) return null

  const datos = dataUser.filter((e) => e.userid === user.uid)
  return (
    <>
      <Navbar datos={datos} />
      <div id="container" className=" w-4/5 mx-auto">
        <div className="flex  flex-wrap sm:flex-row">
          {datos[0].following
            .map((publi) => <Friends key={publi} friend={publi} />)
            .reverse()}
        </div>
      </div>
    </>
  )
}
