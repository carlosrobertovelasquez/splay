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
  const datos = dataPublication
    .slice()
    .sort((a, b) => a.createAt - b.createAt)
    .filter((e) => e.userId === userid)
  return (
    <div className="mt-4 boxWidget">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2
            className="mb-4"
            style={{ fontSize: "2.1rem", fontWeight: "bold", color: "#58595B" }}
          >
            Amigos
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
        {datos
          .map((publi) => (
            <Amigo
              key={publi.id}
              createAt={publi.createAt}
              friend={publi.friend}
            />
          ))
          .reverse()}
      </div>
    </div>
  )
}
