import React, { useEffect, useState } from "react"
import { getUserByUserId } from "../../../../../../lib/db"
import Link from "next/link"
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
      <Link href="/F/[id]" as={`/F/${idUser}`}>
        <a>
          <img
            src={dataUser.avatar}
            style={{
              display: "inline-block",
              borderRadius: "50%",
              width: "30px",
              height: "30px",
            }}
          />
        </a>
      </Link>
    </React.Fragment>
  )
}
