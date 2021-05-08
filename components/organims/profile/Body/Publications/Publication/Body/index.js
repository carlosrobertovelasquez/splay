import React, { useState } from "react"
import Comments from "../Comments"
import Counts from "../Counts"
import ReactPlayer from "react-player"

import Avatar from "../../../../../../atoms/Avatar/Small"
export default function index({
  comments,
  dateCreate,
  file,
  idUser,
  typeFile,
  id,
}) {
  return (
    <React.Fragment>
      <div className="mt-5 boxWidget">
        <div className="grid grid-cols-12">
          <Avatar idUser={idUser} dateCreate={dateCreate} alt="avatar" />

          <div
            className="col-span-1"
            style={{ marginTop: "auto", marginBottom: "auto" }}
          >
            <p className="text-right">
              <button>
                <img src="/icons/icon2.png" style={{ width: "30px" }} />
              </button>
            </p>
          </div>
          <div className="col-span-12 mt-4 mb-4">
            <p className="text-left" style={{ fontSize: "0.9rem" }}>
              {comments}
            </p>
          </div>
          {typeFile === "video" ? (
            <div className="col-span-12 mt-4 mb-4">
              <ReactPlayer
                url={file}
                width="100%"
                height="100%"
                volume={0.8}
                controls
              />
            </div>
          ) : (
            <div className="col-span-12 mt-4 mb-4">
              <img src={file} style={{ width: "100%" }} />
            </div>
          )}

          <Counts />

          <div
            className="col-span-11 mb-5"
            style={{
              borderBottom: "2px solid #bbb",
              paddingBottom: "10px",
              paddingTop: "10px",
            }}
          >
            <div className="grid grid-cols-3">
              <div className="text-center">
                <button>
                  <img
                    src="/icons/icon6.png"
                    style={{ width: "20px", display: "inline-block" }}
                  />{" "}
                  Guardar
                </button>
              </div>
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
                    src="/icons/like.png"
                    style={{ width: "20px", display: "inline-block" }}
                  />{" "}
                  Me gusta
                </button>
              </div>
            </div>
          </div>

          <Comments commentId={id} />
        </div>
      </div>
    </React.Fragment>
  )
}
