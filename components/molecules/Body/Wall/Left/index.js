import React from "react"
import Link from "next/link"
import { useAuth } from "../../../../../lib/auth"
export default function index() {
  const { signout } = useAuth()
  return (
    <React.Fragment>
      <div className="hidden md:flex flex-col ml-8  ">
        <div className="col-span-4 py-3">
          <Link href="">
            <a>
              <img
                src="/icons/Iconos-Muro-General/my-friends.png"
                style={{
                  width: "60px",
                  display: "inline-block",
                  marginRight: "20px",
                  paddingRight: "10px",
                }}
              />{" "}
              Mis Amigossss
            </a>
          </Link>
        </div>
        <div className="col-span-4 py-3">
          <Link href="">
            <a>
              <img
                src="/icons/Iconos-Muro-General/messages.png"
                style={{
                  width: "60px",
                  display: "inline-block",
                  marginRight: "20px",
                  paddingRight: "10px",
                }}
              />{" "}
              Mensajes
            </a>
          </Link>
        </div>
        <div className="col-span-4 py-3">
          <Link href="">
            <a>
              <img
                src="/icons/Iconos-Muro-General/groups.png"
                style={{
                  width: "60px",
                  display: "inline-block",
                  marginRight: "20px",
                  paddingRight: "10px",
                }}
              />{" "}
              Grupos
            </a>
          </Link>
        </div>

        <div className="col-span-4 py-3">
          <Link href="">
            <a>
              <img
                src="/icons/Iconos-Muro-General/histories.png"
                style={{
                  width: "60px",
                  display: "inline-block",
                  marginRight: "20px",
                  paddingRight: "10px",
                }}
              />{" "}
              Historias
            </a>
          </Link>
        </div>

        <div className="col-span-4 py-3">
          <Link href="">
            <a>
              <img
                src="/icons/Iconos-Muro-General/birthday.png"
                style={{
                  width: "60px",
                  display: "inline-block",
                  marginRight: "20px",
                  paddingRight: "10px",
                }}
              />{" "}
              Cumpleaños
            </a>
          </Link>
        </div>

        <div className="col-span-4 py-3">
          <Link href="">
            <a>
              <img
                src="/icons/Iconos-Muro-General/recent-activity.png"
                style={{
                  width: "60px",
                  display: "inline-block",
                  marginRight: "20px",
                  paddingRight: "10px",
                }}
              />{" "}
              Actividad reciente
            </a>
          </Link>
        </div>
        <div className="col-span-4 py-3">
          <button onClick={() => signout()}>
            <img
              src="/icons/Iconos-Muro-General/recent-activity.png"
              style={{
                width: "60px",
                display: "inline-block",
                marginRight: "20px",
                paddingRight: "10px",
              }}
            />{" "}
            Salir
          </button>
        </div>
      </div>
    </React.Fragment>
  )
}
