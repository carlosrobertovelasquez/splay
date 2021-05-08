import React, { useEffect, useState } from "react"
import { getUserByUserId } from "../../../../lib/db"
import PhotoAvatar from "../../../../public/Quetzal.jpeg"
export default function index({ alt, idUser, height, width }) {
  const [dataUser, setDataUser] = useState(undefined)
  useEffect(() => {
    async function datosUser() {
      const [response] = await getUserByUserId(idUser)
      setDataUser(response)
    }
    if (idUser) {
      datosUser()
    }
  }, [idUser])
  if (dataUser === undefined) return null

  return (
    <React.Fragment>
      <img
        style={{
          borderRadius: "50%",
          height: { height },
          width: { width },
          display: "inline-block",
        }}
        alt={alt}
        src={dataUser.avatar === "ND" ? PhotoAvatar : dataUser.avatar}
        title={alt}
      />
    </React.Fragment>
  )
}
