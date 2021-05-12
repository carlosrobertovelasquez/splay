import React from "react"

export default function index(props) {
  const { profile } = props
  const { userData } = props

  return (
    <div className="boxWidget">
      <h2
        className="mb-4"
        style={{ fontSize: "2.1rem", fontWeight: "bold", color: "#58595B" }}
      >
        Información
      </h2>
      <ul>
        <li className="mb-2" style={{ fontSize: "1.2rem" }}>
          <img
            src="/icons/job.png"
            style={{
              width: "35px",
              display: "inline-block",
              paddingRight: "13px",
            }}
          />
          Trabaja en {userData[0].trabajaEn}
        </li>
        <li className="mb-2" style={{ fontSize: "1.2rem" }}>
          <img
            src="/icons/felling-status.png"
            style={{
              width: "35px",
              display: "inline-block",
              paddingRight: "13px",
            }}
          />
          {userData[0].estadoCivil}
        </li>
        <li className="mb-2" style={{ fontSize: "1.2rem" }}>
          <img
            src="/icons/schedule.png"
            style={{
              width: "35px",
              display: "inline-block",
              paddingRight: "13px",
            }}
          />
          En Splay desde {userData[0].dateCreate}
        </li>
      </ul>

      {profile === "W" ? (
        <p style={{ marginTop: "50px" }}>
          <button className="button1">Editar Perfil</button>
        </p>
      ) : null}
    </div>
  )
}
