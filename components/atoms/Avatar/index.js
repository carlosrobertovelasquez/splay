import React from "react"

export default function index({ alt, src, text }) {
  return (
    <React.Fragment>
      <div>
        <img
          style={{
            borderRadius: "50%",
            height: "150px",
            width: "150px",
          }}
          alt={alt}
          src={src}
          title={alt}
        />
        <p>{text && <strong>{text}</strong>}</p>
      </div>
    </React.Fragment>
  )
}
