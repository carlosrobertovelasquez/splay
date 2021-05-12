import React from "react"

export default function index({ file }) {
  return (
    <React.Fragment>
      <div>
        <p style={{ textAlign: "center" }}>
          <img
            src={file}
            style={{
              display: "inline-block",
              borderRadius: "20px",
              width: "125px",
              height: "125px",
            }}
          />
        </p>
      </div>
    </React.Fragment>
  )
}
