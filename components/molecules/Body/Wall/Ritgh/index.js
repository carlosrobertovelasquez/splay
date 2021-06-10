import React from "react"
import Link from "next/link"
export default function index() {
  return (
    <React.Fragment>
      <div className=" hidden md:flex flex-col">
        <div
          className="col-span-4 py-5"
          style={{
            borderBottom: "1px solid #e1e1e1",
            borderTop: "1px solid #e1e1e1",
          }}
        >
          <Link href="">
            <a>
              <img
                src="/icons/Iconos-Muro-General/calendar-activities.png"
                style={{
                  width: "60px",
                  display: "inline-block",
                  marginRight: "20px",
                  paddingRight: "10px",
                }}
              />{" "}
              Calendario de actividades
            </a>
          </Link>
        </div>
        <div
          className="col-span-4 pb-5"
          style={{ borderBottom: "1px solid #e1e1e1" }}
        >
          <Link href="">
            <a>
              <img
                src="/icons/Iconos-Muro-General/friendship-request.png"
                style={{
                  width: "60px",
                  display: "inline-block",
                  marginRight: "20px",
                  paddingRight: "10px",
                }}
              />{" "}
              Solicitudes de amistad
            </a>
          </Link>
        </div>
        <div className="flex flex-col mt-8">
          <label style={{ marginRight: "10px", fontWeight: "bold" }}>
            Contactos
          </label>
          <div style={{ position: "relative", display: "inline-block" }}>
            <img
              src="/icons/search-black.png"
              style={{
                width: "30px",
                display: "inline-block",
                position: "absolute",
                top: "3px",
                left: "7px",
              }}
            />
            <input
              type="text"
              style={{
                padding: "5px 5px",
                paddingLeft: "45px",
                borderRadius: "10px",
                width: "200px",
              }}
            />
          </div>
        </div>
        <div className="col-span-4 m-3">
          <img
            src="/Quetzal.jpeg"
            style={{
              borderRadius: "50%",
              width: "45px",
              height: "45px",
              display: "inline-block",
              marginRight: "20px",
              paddingRight: "0px",
            }}
          />{" "}
          Melvin Antonio
        </div>
        <div className="col-span-4 m-3 ">
          <img
            src="/Quetzal.jpeg"
            style={{
              borderRadius: "50%",
              width: "45px",
              height: "45px",
              display: "inline-block",
              marginRight: "20px",
              paddingRight: "0px",
            }}
          />{" "}
          Juan Ramón
        </div>
        <div className="col-span-4 m-3">
          <img
            src="/Quetzal.jpeg"
            style={{
              borderRadius: "50%",
              width: "45px",
              height: "45px",
              display: "inline-block",
              marginRight: "20px",
              paddingRight: "0px",
            }}
          />{" "}
          Orlando Ceraz
        </div>
        <div className="col-span-4 m-3">
          <img
            src="/Quetzal.jpeg"
            style={{
              borderRadius: "50%",
              width: "45px",
              height: "45px",
              display: "inline-block",
              marginRight: "20px",
              paddingRight: "0px",
            }}
          />{" "}
          Melvin Antonio
        </div>
        <div className="col-span-4 m-3">
          <img
            src="/Quetzal.jpeg"
            style={{
              borderRadius: "50%",
              width: "45px",
              height: "45px",
              display: "inline-block",
              marginRight: "20px",
              paddingRight: "0px",
            }}
          />{" "}
          Elbert Martínez
        </div>
        <div className="col-span-4 m-5 ">
          <img
            src="/icons/Iconos-Muro-General/new-group.png"
            style={{
              width: "35px",
              height: "35px",
              display: "inline-block",
              marginRight: "20px",
              paddingRight: "0px",
            }}
          />{" "}
          Crear un grupo nuevo
        </div>
        <div className="col-span-4 m-5">
          <img
            src="icons/Iconos-Muro-General/send-new-message.png"
            style={{
              width: "35px",
              height: "35px",
              display: "inline-block",
              marginRight: "20px",
              paddingRight: "0px",
            }}
          />{" "}
          Enviar mensaje nuevo
        </div>
      </div>
    </React.Fragment>
  )
}
