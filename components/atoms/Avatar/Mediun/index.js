import React, { useEffect, useState } from "react"
import { getUserByUserId } from "../../../../lib/db"
import PhotoAvatar from "../../../../public/Quetzal.jpeg"
import Link from "next/link"
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
      <div>
        <p className="text-center">
          <Link href="/F/[id]" as={`/F/${idUser}`}>
            <a>
              <img
                style={{
                  borderRadius: "50%",
                  height: "80px",
                  width: "80px",
                  display: "inline-block",
                }}
                alt={alt}
                src={dataUser.avatar === "ND" ? PhotoAvatar : dataUser.avatar}
                title={alt}
              />
            </a>
          </Link>
        </p>
        <p className="text-center friendname">
          <Link href="/profile/[id]" as={`/profile/${idUser}`}>
            <a>{dataUser.firstName}</a>
          </Link>
        </p>
      </div>
    </React.Fragment>
  )
}
