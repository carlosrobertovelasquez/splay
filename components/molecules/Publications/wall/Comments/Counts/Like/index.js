import React from "react"

export default function index({ publicationId, likes }) {
  const countLikes = likes.length - 1
  return (
    <React.Fragment>
      <div className="col-span-4 ">
        <p style={{ fontSize: "0.8rem" }}>{countLikes} Me gusta</p>
      </div>
    </React.Fragment>
  )
}
