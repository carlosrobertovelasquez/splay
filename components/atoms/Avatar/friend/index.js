import React, { useEffect, useState } from "react"
import { useAuth } from "../../../../lib/auth"
import {
  getUserByUserId,
  updateLoggedInUserFollowing,
} from "../../../../lib/db"
import PhotoAvatar from "../../../../public/Quetzal.jpeg"
import Link from "next/link"
export default function index({ userId }) {
  const userdata = useAuth()
  const { user } = userdata

  const [dataUser, setDataUser] = useState(undefined)
  const [dataDoc, setDataDoc] = useState(undefined)
  useEffect(() => {
    async function datosUser() {
      const [response] = await getUserByUserId(userId)
      setDataUser(response)
      const [response2] = await getUserByUserId(user.uid)
      setDataDoc(response2)
    }
    if (userId) {
      datosUser()
    }
  }, [userId])
  if (dataUser === undefined) return null

  const deleteFriend = async () => {
    await updateLoggedInUserFollowing(dataDoc.docid, userId, true)
  }
  return (
    <React.Fragment>
      <div>
        <div className="mb-3">
          <Link href="/F/[id]" as={`/F/${userId}`}>
            <a>
              <img
                style={{
                  borderRadius: "10px",
                  height: "250px",
                  width: "250px",
                  display: "inline-block",
                }}
                src={dataUser.avatar === "ND" ? PhotoAvatar : dataUser.avatar}
                alt=""
              />
            </a>
          </Link>
        </div>
        <h2 className="text-xl font-medium text-gray-700">
          {dataUser.firstName}
        </h2>
        <span className="text-blue-500 block mb-5">{dataUser.occupation}</span>

        <div className="inline-block mr-2 mt-2">
          {userId === "Kk7XZpwe3MbBOzLT3eBe1I56C293" ? (
            <button
              type="button"
              className="focus:outline-none  text-gray-base text-sm py-2.5 px-5 rounded-md bg-indigo-tercero hover: bg-indigo-segundary hover:shadow-lg"
            >
              Eliminar
            </button>
          ) : (
            <button
              onClick={deleteFriend}
              type="button"
              className="focus:outline-none  text-gray-base text-sm py-2.5 px-5 rounded-md bg-indigo-tercero hover: bg-indigo-segundary hover:shadow-lg"
            >
              Eliminar
            </button>
          )}
        </div>
      </div>
    </React.Fragment>
  )
}

/* 
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

*/
