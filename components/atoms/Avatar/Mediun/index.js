import React, { useEffect, useState } from "react"
import { getUserByUserId } from "../../../../lib/db"

export default function index({ alt, idUser }) {
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
      <div>
        <img
          style={{
            borderRadius: "50%",
            height: "150px",
            width: "150px",
          }}
          alt={alt}
          src={src}
          title={alt}
        />
      </div>
    </React.Fragment>
  )
}
