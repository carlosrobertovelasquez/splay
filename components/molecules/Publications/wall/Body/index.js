import React, { useState } from "react"
import Comments from "../Comments"
import Counts from "../Comments/Counts"
import Avatar from "../../../../atoms/Avatar/Small"
import ReactPlayer from "react-player"
import Skeleton from "react-loading-skeleton"
import Like from "../../../../atoms/Like"
export default function index({
  comments,
  dateCreate,
  file,
  idUser,
  typeFile,
  id,
  likes,
}) {
  const [isPlaying, setIsPlaying] = useState(false)
  const playMovie = () => {
    setIsPlaying(true)
  }
  const stopMovie = () => {
    setIsPlaying(false)
  }

  return (
    <React.Fragment>
      <div className="mt-5 boxWidget">
        {!typeFile ? (
          <Skeleton count={1} height={250} />
        ) : (
          <div className="grid grid-cols-12">
            <Avatar idUser={idUser} dateCreate={dateCreate} alt="avatar" />

            <div
              className="  md:col-span-1"
              style={{ marginTop: "auto", marginBottom: "auto" }}
            >
              <p className="text-right">
                <button>
                  <img src="/icons/icon2.png" style={{ width: "30px" }} />
                </button>
              </p>
            </div>

            <div className="col-span-12 mt-4 mb-4 px-2">
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

            <Counts publicactionId={id} likes={likes} />
            <div
              className="col-span-12 mb-5"
              style={{
                borderBottom: "2px solid #bbb",
                paddingBottom: "10px",
                paddingTop: "10px",
              }}
            >
              <div className="flex justify-around">
                <div className="text-center">
                  <button>
                    <img
                      src="/icons/comment.png"
                      style={{ width: "20px", display: "inline-block" }}
                    />{" "}
                    Comentar
                  </button>
                </div>
                <div className="text-center">
                  <button>
                    <img
                      src="/icons/icon7.png"
                      style={{ width: "20px", display: "inline-block" }}
                    />{" "}
                    Compartir
                  </button>
                </div>
                <Like likes={likes} docId={id} />
              </div>
            </div>

            <Comments commentId={id} />
          </div>
        )}
      </div>
    </React.Fragment>
  )
}
