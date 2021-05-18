import React, { useState, useEffect } from "react"
import Skeleton from "react-loading-skeleton"
import { getNotFriends } from "../../../lib/db"
import NotFriend from "./notFriend"
export default function index({ datos }) {
  const [notFriend, setNotFriend] = useState(null)

  useEffect(() => {
    async function suggerNotFriends() {
      const response = await getNotFriends(datos[0].userid)
      setNotFriend(response)
    }
    if (datos) {
      suggerNotFriends()
    }
  }, [datos])
  const contenedorPrincipal = {
    display: "flex",
    alignitems: "center",
    position: "relative",
    borderRadius: "10px",
    overflow: "hidden",
  }
  const buttonIzqDer = {
    fontSize: "40px",
    with: "50px",
    cursor: "pointer",
  }

  return (
    <React.Fragment>
      <div className="col-span-7 md:col-span-3  profileAlias">
        {!notFriend ? (
          <Skeleton count={1} height={250} />
        ) : (
          <div
            className="grid grid-cols-4 gap-4 items-center"
            style={contenedorPrincipal}
          >
            {notFriend
              .map((notfriend) => (
                <NotFriend
                  key={notfriend.userid}
                  firstName={notfriend.firstName}
                  lastName={notfriend.lastName}
                  avatar={notfriend.avatar}
                  profilePhoto={notfriend.profilePhoto}
                  friendId={notfriend.userid}
                />
              ))
              .reverse()}
          </div>
        )}
      </div>
    </React.Fragment>
  )
}
