import React from "react"
import Link from "next/link"
import { useAuth } from "../../../../lib/auth"
import styled from 'styled-components';
import { AiOutlineSave } from 'react-icons/ai';
import { BiCodeAlt } from 'react-icons/bi';
import { IoIosNotificationsOutline} from 'react-icons/io';
import { GoReport } from 'react-icons/go';
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Button = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: #141414;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`;
function left({ datos }) {
  const countFollowing = datos[0].following.length
  const countFollowers = datos[0].followers.length
  const { signout } = useAuth()
  const { user } = useAuth()

  return (
    <>
    <div className="px-4 grid grid-cols-4 gap-4 text-left leftBar">
      <div className="col-span-2 md:col-span-4 py-4">
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
      <div className="col-span-2 md:col-span-4 py-3">
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
      <div className="col-span-2 md:col-span-4 py-3">
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

      <div className="col-span-2 md:col-span-4 py-3">
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

      <div className="col-span-2 md:col-span-4 py-3">
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

      <div className="col-span-2 md:col-span-4 py-3">
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
      <div className="col-span-2 md:col-span-4 py-3">
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
      </div>
    </>
  )
}

export default left
