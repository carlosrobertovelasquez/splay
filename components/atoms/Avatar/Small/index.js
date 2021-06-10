import React, { useState, useEffect } from "react"
import { getUserByUserId } from "../../../../lib/db"
import useTimeAgo from "../../../../hooks/useTimeAgo"
export default function index({ idUser, alt, dateCreate }) {
  const timego = useTimeAgo(dateCreate)

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
      <div className="col-span-2 md:col-span-1">
        <p
          className="text-left"
          style={{ fontSize: "1.8rem", fontWeight: "bold" }}
        >
          <img
            src={dataUser.avatar}
            alt={alt}
            style={{
              display: "inline-block",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
            }}
          />
        </p>
      </div>
      <div className="col-span-9 md:col-span-10">
        <p
          className=""
          style={{ fontSize: "1rem", color: "#00A59B", fontWeight: "bold" }}
        >
          {dataUser.firstName}
        </p>
        {timego && (
          <p style={{ fontSize: "0.8rem", color: "#9d9d9d" }}>{timego}</p>
        )}
      </div>
    </React.Fragment>
  )
}
