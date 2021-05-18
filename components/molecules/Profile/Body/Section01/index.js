import React, { useState } from "react"
import ModalUpload from "../../../../organims/Modal/ModalPublication"
export default function index(props) {
  const { userData } = props

  if (userData[0].length === 0 || userData[0] === undefined) return null
  const Nombre =
    userData[0].firstName === null ? null : userData[0].firstName.split(" ")
  const [showModal, setShowModal] = useState(false)
  const Modal = () => {
    setShowModal(true)
  }
  return (
    <React.Fragment>
      <div className="boxWidget">
        <div className="grid grid-cols-5 gap-4">
          <div>
            <p style={{ textAlign: "center" }}>
              <img
                src={userData[0].avatar}
                style={{
                  display: "inline-block",
                  borderRadius: "50%",
                  height: "80px",
                  width: "80px",
                }}
              />
            </p>
          </div>
          <div className="col-span-4">
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-3" onClick={Modal}>
                <p
                  style={{
                    marginBottom: "2rem",
                    height: "45px",
                    background: "initial",
                    fontSize: "1.5rem",
                  }}
                >
                  <span
                    style={{
                      borderBottom: "1px solid #333",
                      paddingBottom: "12px",
                    }}
                  >
                    ¿Que está pensando,{Nombre[0]} ?
                  </span>
                </p>
              </div>
              <div>
                <p>
                  <img
                    src="/icons/icon5.png"
                    style={{
                      width: "48px",
                      display: "inline-block",
                      paddingRight: "10px",
                    }}
                  />
                  Multimedia
                </p>
              </div>
              <div>
                <p>
                  <img
                    src="/icons/icon4.png"
                    style={{
                      width: "38px",
                      display: "inline-block",
                      paddingRight: "10px",
                    }}
                  />
                  Etiqueta amigo
                </p>
              </div>
              <div>
                <p>
                  <img
                    src="/icons/icon3.png"
                    style={{
                      width: "38px",
                      display: "inline-block",
                      paddingRight: "10px",
                    }}
                  />
                  Ubicación
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalUpload
        show={showModal}
        setShowModal={setShowModal}
        userData={userData[0].userid}
      />
    </React.Fragment>
  )
}
