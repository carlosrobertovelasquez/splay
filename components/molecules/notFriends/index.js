import React, { useState, useEffect } from "react"
import Skeleton from "react-loading-skeleton"
import { getSuggestedProfile } from "../../../lib/db"
import NotFriend from "./notFriend"
export default function index({ datos }) {
  const [notFriend, setNotFriend] = useState(null)
  const { userid, following, id } = datos[0]
  useEffect(() => {
    async function suggestedProfiles() {
      const response = await getSuggestedProfile(userid, following)
      setNotFriend(response)
    }
    if (datos) {
      suggestedProfiles()
    }
  }, [userid])

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

    border: "none",
  }
  const contenedorControles = {
    display: "flex",
    alignitems: "center",
    position: "relative",
    borderRadius: "10px",
    marginRight: "20px",
    paddingRight: "0px",
    cursor: "pointer",
  }

  const derecha = () => {
    const fila = document.querySelector(".contenedor")
    fila.scrollLeft += fila.offsetWidth
  }

  const izquierda = () => {
    const fila = document.querySelector(".contenedor")
    fila.scrollLeft -= fila.offsetWidth
  }
  return (
    <React.Fragment>
      <div className="col-span-7 md:col-span-3  profileAlias">
        {!notFriend ? (
          <Skeleton count={1} height={250} />
        ) : (
          <div
            id="contenedor"
            className="grid grid-cols-4 gap-4 items-center contenedor "
            style={contenedorPrincipal}
          >
            <div style={contenedorControles}>
              <button
                onClick={derecha}
                role="button"
                id="flecha-izquierda"
                style={buttonIzqDer}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              {notFriend
                .map((notfriend) => (
                  <NotFriend
                    key={notfriend.userid}
                    firstName={notfriend.firstName}
                    lastName={notfriend.lastName}
                    avatar={notfriend.avatar}
                    profilePhoto={notfriend.profilePhoto}
                    friendId={notfriend.userid}
                    userid={userid}
                    docId={notfriend.docId}
                    id={id}
                  />
                ))
                .reverse()}
              <button onClick={izquierda} role="button" id="flecha-derecho">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  )
}
