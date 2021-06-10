import React, { useEffect, useState } from "react"
import useTimeAgo from "../../../../../../hooks/useTimeAgo"
import { getUserByUserId } from "../../../../../../lib/db"
import Avatar from "../Avatar"
export default function index({ comment, createAt, idUser }) {
  const fecha = useTimeAgo(createAt)
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
      <div className="col-span-12 mb-5">
        <div
          className="grid grid-cols-10 gap-1"
          style={{ gridTemplateColumns: "repeat(16, minmax(0, 1fr))" }}
        >
          <div className="col-span-2 ">
            <p className="text-left">
              <Avatar idUser={idUser} />
            </p>
          </div>
          <div
            className="col-span-9"
            style={{ gridColumn: "span 14 / span 14" }}
          >
            <div
              style={{
                padding: "7px 15px",
                background: "#ddd",
                borderRadius: "10px",
                border: "1px solid #ccc",
              }}
            >
              <p>{dataUser.firstName}</p>
              <p>{comment}</p>
            </div>
          </div>
        </div>
        <p className="mx-11">{fecha}</p>
      </div>
    </React.Fragment>
  )
}
