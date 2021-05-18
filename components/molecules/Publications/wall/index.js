import React, { useEffect, useState } from "react"
import { listenLatesPublications } from "../../../../lib/db"
import Skeleton from "react-loading-skeleton"
import Body from "./Body"
export default function index({ userId }) {
  const [dataPublication, setDataPublication] = useState(undefined)
  useEffect(() => {
    let unsubscribe
    if (userId) {
      unsubscribe = listenLatesPublications((newPiblications) => {
        setDataPublication(newPiblications)
      })
      return () => unsubscribe && unsubscribe()
    }
  }, [userId])

  if (dataPublication === undefined) return null
  const datos = dataPublication
    .slice()
    .sort((a, b) => a.dateCreate - b.dateCreate)
    .filter((e) => e.idUser === userId)

  return (
    <React.Fragment>
      {datos
        .map((publi) => (
          <Body
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
    </React.Fragment>
  )
}
