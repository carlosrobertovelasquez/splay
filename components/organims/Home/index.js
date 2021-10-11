import React, { useState, useEffect } from "react"
import Navbar from "../../molecules/Navbar"
import styled from 'styled-components';
import Header from "../../molecules/Header/Wall"
import Center from "../../molecules/Body/Wall/Center"
import Left from "../../molecules/Body/Wall/Left"
import Ritgh from "../../molecules/Body/Wall/Ritgh"
import Publication from "../../molecules/Publications"
import { listenLatesUsers } from "../../../lib/db"
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

export default function index(props) {
  const { user } = props
  const { profile } = props
  const [dataComentarios, setDataComentarios] = useState(undefined)

  useEffect(() => {
    let unsubscribe

    if (user) {
      unsubscribe = listenLatesUsers((newUsers) => {
        setDataComentarios(newUsers)
      })
      return () => unsubscribe && unsubscribe()
    }
  }, [user])

  if (dataComentarios === undefined) return null
  const datos = dataComentarios
    .filter((e) => e.userid === user.uid)
    .sort((a, b) => a.createAt - b.createAt)

  if (datos === undefined) return null
  return (
    <>
      <Navbar opt="2" datos={datos} />
      <Header datos={datos} profile={profile} />

      <section className="movil">
        <div className="mx-auto">
          <div className="grid grid-cols-7 gap-6 profileOptions" style={{ gap : '4rem' }}>
            <Left datos={datos} />
            <div className="col-span-7 md:col-span-3  profileAlias">
              <Center
                avatar={datos[0].avatar}
                firstName={datos[0].firstName}
                userid={datos[0].userid}
              />

              <Publication datos={datos[0]} />
            </div>

            <Ritgh />
          </div>
        </div>
      </section>
    </>
  )
}
