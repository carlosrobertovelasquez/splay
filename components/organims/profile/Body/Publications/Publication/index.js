import React, { useState, useEffect } from "react"
import Body from "../Publication/Body"
import { listenLatesPublications } from "../../../../../../lib/db"

export default function index(props) {
  const { userData } = props
  const { userid } = userData

  const [dataPublication, setDataPublication] = useState(undefined)
  useEffect(() => {
    let unsubscribe
    if (userid) {
      unsubscribe = listenLatesPublications((newPiblications) => {
        setDataPublication(newPiblications)
      })
      return () => unsubscribe && unsubscribe()
    }
  }, [userid])

  if (dataPublication === undefined) return null
  const datos = dataPublication
    .slice()
    .sort((a, b) => a.dateCreate - b.dateCreate)
    .filter((e) => e.idUser === userData.userid)
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
