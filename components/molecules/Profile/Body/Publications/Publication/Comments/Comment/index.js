import React, { useEffect, useState, useRef } from "react"
import useTimeAgo from "../../../../../../../../hooks/useTimeAgo"
import { getUserByUserId, deleteComment } from "../../../../../../../../lib/db"
import Avatar from "../Avatar"

let useClickOutside = (handler) => {
  let domNode = useRef()

  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler()
      }
    }

    document.addEventListener("mousedown", maybeHandler)

    return () => {
      document.removeEventListener("mousedown", maybeHandler)
    }
  })

  return domNode
}

export default function index({
  comment,
  createAt,
  idUser,
  commentId,
  currentUserId,
}) {
  const fecha = useTimeAgo(createAt)
  const [dataUser, setDataUser] = useState(undefined)
  const [isCommentMenuOpen, setIsCommentMenuOpen] = useState(false)

  let domNode = useClickOutside(() => {
    setIsCommentMenuOpen(false)
  })
  
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
          <div className="col-span-1">
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
              <div ref={domNode} className="flex justify-between">
                <p>{dataUser.firstName}</p>
                {idUser === currentUserId && (
                  <div style={{ position: "relative" }}>
                    <img
                      onClick={() => setIsCommentMenuOpen(!isCommentMenuOpen)}
                      src="/icons/icon2.png"
                      style={{ width: "20px", cursor: "pointer" }}
                    />
                    {isCommentMenuOpen && (
                      <div
                        style={{
                          bottom: -45,
                          right: 0,
                          zIndex: 2,
                          padding: "10px 15px",
                          backgroundColor: "white",
                          borderRadius: "5px",
                          position: "absolute",
                        }}
                      >
                        <p
                          style={{ cursor: "pointer" }}
                          onClick={() => deleteComment(commentId)}
                        >
                          Eliminar
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <p>{comment}</p>
            </div>
          </div>
        </div>
        <p className="mx-11">{fecha}</p>
      </div>
    </React.Fragment>
  )
}
