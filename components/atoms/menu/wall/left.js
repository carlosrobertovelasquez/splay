import React from "react"
import Link from "next/link"
import { useAuth } from "../../../../lib/auth"
function left({ datos }) {
  const countFollowing = datos[0].following.length
  const countFollowers = datos[0].followers.length
  const { signout } = useAuth()
  const { user } = useAuth()

  return (
    <>
      <div className="col-span-4 py-3">
        <Link href="friend/[friends]" as={`/friend/${user.uid}`}>
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
            Seguidores {countFollowing}
          </a>
        </Link>
      </div>
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
            Seguidos {countFollowers}
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
        <Link href="plan/[id]" as={`/plan/${user.uid}`}>
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
            Membresia
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
            Plan de Inversion
          </a>
        </Link>
      </div>
      <div className="col-span-4 py-3">
        <button onClick={() => signout()}>
          <img
            src="/icons/exit.png"
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
    </>
  )
}

export default left
