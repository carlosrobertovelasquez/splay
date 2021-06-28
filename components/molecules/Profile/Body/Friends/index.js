import React, { useState, useEffect } from "react"
import Link from "next/link"
import Amigo from "./Friend"
import { listenLatesFriends } from "../../../../../lib/db"
export default function index(props) {
  const { userData } = props
  const { userid } = userData[0]
  const [dataPublication, setDataPublication] = useState(undefined)
  useEffect(() => {
    let unsubscribe
    if (userid) {
      unsubscribe = listenLatesFriends((newFriends) => {
        setDataPublication(newFriends)
      })
      return () => unsubscribe && unsubscribe()
    }
  }, [userid])

  if (dataPublication === undefined) return null

  const dataFollowing = userData[0].following
  const datos = dataFollowing.map(function (data) {
    return data
  })

  const countFollowing = dataFollowing.length - 1

  return (
    <div className="mt-4 boxWidgetLeft">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2
            className="mb-4"
            style={{ fontSize: "1.8rem", fontWeight: "bold", color: "#58595B" }}
          >
            Seguidores {countFollowing}
          </h2>
        </div>
        <div style={{ marginTop: "auto", marginBottom: "auto" }}>
          <p className="link1 text-right">
            <Link href="#">
              <a>Ver todos los amigos</a>
            </Link>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {datos.map((publi) => <Amigo key={publi} friend={publi} />).reverse()}
      </div>
    </div>
  )
}
