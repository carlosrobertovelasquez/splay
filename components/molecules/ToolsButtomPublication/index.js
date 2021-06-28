import React, { useEffect, useState } from "react"
import Button from "../../atoms/Button"
import Like from "./like"
import { useAuth } from "../../../lib/auth"
import { getUserByLikes, listenLatesLikes } from "../../../lib/db"

export default function index({ publicationId }) {
  const userdata = useAuth()
  const { user } = userdata

  const [dataLikes, setDataLikes] = useState(undefined)
  useEffect(() => {
    let unsubscribe
    if (user.uid) {
      unsubscribe = listenLatesLikes((newLikes) => {
        setDataLikes(newLikes)
      })
      return () => unsubscribe && unsubscribe()
    }
  }, [user.uid])
  if (dataLikes === undefined) return null
  const datos = dataLikes.slice().filter(
    (e) => e.idUser === user.uid,
    (e) => e.idPublicayion === publicationId
  )
  console.log("barra de botonose")
  return (
    <div className="grid grid-cols-3">
      <Button src={"/icons/icon6.png"} text={"Guardar"} />

      <Button src={"/icons/comment.png"} text={"Comentar"} />

      <Like datos={datos} />
    </div>
  )
}
