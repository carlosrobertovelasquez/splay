import React, { useEffect, useState } from "react"
import { getUserByUserId } from "../../../../../../lib/db"
export default function index({ idUser }) {
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
        src={dataUser.avatar}
        style={{
          display: "inline-block",
          borderRadius: "50%",
          width: "30px",
          height: "30px",
        }}
      />
    </React.Fragment>
  )
}
