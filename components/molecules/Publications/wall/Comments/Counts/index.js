import React, { useState, useEffect } from "react"
import { listenLatesComentarios } from "../../../../../../lib/db"
import Like from "./Like"
export default function index({ publicactionId }) {
  //  const [comentarios, setComentarios] = useState("")

  const [dataComentarios, setDataComentarios] = useState(undefined)
  useEffect(() => {
    let unsubscribe
    if (publicactionId) {
      unsubscribe = listenLatesComentarios((newComentarios) => {
        setDataComentarios(newComentarios)
      })
      return () => unsubscribe && unsubscribe()
    }
  }, [publicactionId])

  if (dataComentarios === undefined) return null
  const datos = dataComentarios
    .filter((e) => e.idPublication === publicactionId)
    .sort((a, b) => a.createAt - b.createAt)

  return (
    <React.Fragment>
      <div
        className="col-span-12 px-2  md:col-span-12"
        style={{
          borderBottom: "1px solid #ddd",
          paddingBottom: "10px",
          color: "#9d9d9d",
        }}
      >
        <div className="flex justify-around">
          <div className="col-span-4 content-center">
            <p style={{ fontSize: "0.8rem" }}>{datos.length} comentarios</p>
          </div>
          <div className="col-span-4">
            <p style={{ fontSize: "0.8rem" }}>0 guardado</p>
          </div>
          <Like publicationId={publicactionId} />
        </div>
      </div>
    </React.Fragment>
  )
}
