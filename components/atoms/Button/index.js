import React from "react"

export default function index({ src, text, onclick, value }) {
  return (
    <React.Fragment>
      <div className="text-center">
        <button onClick={onclick} value={value}>
          <img src={src} style={{ width: "20px", display: "inline-block" }} />{" "}
          {text}
        </button>
      </div>
    </React.Fragment>
  )
}
