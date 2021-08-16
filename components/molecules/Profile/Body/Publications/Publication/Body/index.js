import React, { useEffect, useRef, useState } from "react"
import Comments from "../Comments"
import Counts from "../Comments/Counts"
import ReactPlayer from "react-player"
import Avatar from "../../../../../../atoms/Avatar/Small"
import ToolsButtonPublication from "../../../../../ToolsButtomPublication"

import { deletePost } from "../../../../../../../lib/db"

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
  comments,
  dateCreate,
  file,
  idUser,
  typeFile,
  id,
}) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isPostMenuOpen, setIsPostMenuOpen] = useState(false)

  let domNode = useClickOutside(() => {
    setIsPostMenuOpen(false)
  })

  const playMovie = () => {
    setIsPlaying(true)
  }
  const stopMovie = () => {
    setIsPlaying(false)
  }

  return (
    <React.Fragment>
      <div className="mt-5 boxWidget">
        <div className="grid grid-cols-12">
          <Avatar idUser={idUser} dateCreate={dateCreate} alt="avatar" />

          <div
            ref={domNode}
            className="col-span-1"
            style={{
              marginTop: "auto",
              marginBottom: "auto",
              position: "relative",
            }}
          >
            <p className="text-right">
              <button onClick={()=> setIsPostMenuOpen(!isPostMenuOpen)}>
                <img src="/icons/icon2.png" style={{ width: "30px" }} />
              </button>
              {isPostMenuOpen && (
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
                    onClick={() => deletePost(id)}
                  >
                    Eliminar
                  </p>
                </div>
              )}
            </p>
          </div>
          <div className="col-span-12 mt-4 mb-4">
            <p className="text-left" style={{ fontSize: "0.9rem" }}>
              {comments}
            </p>
          </div>
          {typeFile === "video" ? (
            <div
              className="col-span-12 mt-4 mb-4"
              onMouseOver={playMovie}
              onMouseOut={stopMovie}
            >
              <ReactPlayer
                url={file}
                width="100%"
                height="100%"
                volume={0.8}
                playing={isPlaying}
                controls
              />
            </div>
          ) : (
            <div className="col-span-12 mt-4 mb-4">
              <img src={file} style={{ width: "100%" }} />
            </div>
          )}

          <Counts publicactionId={id} />

          <div
            className="col-span-11 mb-5"
            style={{
              borderBottom: "2px solid #bbb",
              paddingBottom: "10px",
              paddingTop: "10px",
            }}
          >
            <ToolsButtonPublication publicationId={id} />
          </div>

          <Comments commentId={id} />
        </div>
      </div>
    </React.Fragment>
  )
}
