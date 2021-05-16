import React, { useState, useEffect } from "react"
import Link from "next/link"
import { useAuth } from "../../../../../lib/auth"
import { listenLatesPublications } from "../../../../../lib/db"
import Photo from "./Photo"
export default function index({ userData }) {
  const { user } = useAuth()
  const [dataPublication, setDataPublication] = useState(undefined)
  const [fotos, setFotos] = useState([])
  useEffect(() => {
    let unsubscribe
    if (user.uid) {
      unsubscribe = listenLatesPublications((newPiblications) => {
        setDataPublication(newPiblications)
      })
      return () => unsubscribe && unsubscribe()
    }
  }, [user.uid])

  if (dataPublication === undefined) return null

  const datos = dataPublication
    .slice(-11)
    .sort((a, b) => a.dateCreate - b.dateCreate)
    .filter(
      (e) => (e.idUser === userData[0].userid) & (e.typeFile === "imagen")
    )
  return (
    <div className="mt-4 boxWidget">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2
            className="mb-4"
            style={{ fontSize: "2.1rem", fontWeight: "bold", color: "#58595B" }}
          >
            Fotografías
          </h2>
        </div>
        <div style={{ marginTop: "auto", marginBottom: "auto" }}>
          <p className="link1 text-right">
            <Link href="#">
              <a>Ver todas las fotos</a>
            </Link>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {datos
          .map((publi) => (
            <Photo
              key={publi.id}
              comments={publi.comments}
              dateCreate={publi.dateCreate}
              file={publi.file}
              idUser={publi.idUser}
              typeFile={publi.typeFile}
              id={publi.id}
            />
          ))
          .reverse()}
      </div>
    </div>
  )
}
