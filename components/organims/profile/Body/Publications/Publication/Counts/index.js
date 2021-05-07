import React from "react"

export default function index() {
  return (
    <React.Fragment>
      <div
        className="col-span-11"
        style={{
          borderBottom: "1px solid #ddd",
          paddingBottom: "10px",
          color: "#9d9d9d",
        }}
      >
        <div className="grid grid-cols-12">
          <div className="col-span-4">
            <p style={{ fontSize: "0.8rem" }}>12 comentarios</p>
          </div>
          <div className="col-span-4">
            <p style={{ fontSize: "0.8rem" }}>8 veces guardado</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
