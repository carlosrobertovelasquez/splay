import React, { useEffect, useState, useRef, useCallback } from "react"
import Link from "next/link"
import { listenLatesFriends, listenLatesUsers }  from '../../../../../lib/db';

export default function index() {
  const [lastUsers, setLastUsers ] = useState([]);
  useEffect(() => {
    listenLatesUsers((newContact) => {
      setLastUsers(newContact);
      console.log(newContact);
    });
  },[]);
  return (
    <React.Fragment>
      <div className="col-span-7 md:col-span-2 profileMore px-4 text-left">
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
                left: "7px"
              }}
            />
            <input
              type="text"
              style={{
                padding: "5px 5px",
                paddingLeft: "45px",
                borderRadius: "10px",
                width: "100%"
                
              }}
            />
          </div>
        </div>
        <div style={{heigt: 'auto', paddingBottom: '10px', background: '#f4eeee'}}>
          <div style={{ height: '400px', overflowY: 'auto' }}>
            { lastUsers.map((contact) => (
              <Link href={contact.slug || ''}>
                <a>
                  <div className="col-span-4 m-3" key={contact.id}>
                    <img
                      src={ contact.profilePhoto }
                      style={{
                        borderRadius: "50%",
                        width: "45px",
                        height: "45px",
                        display: "inline-block",
                        marginRight: "20px",
                        paddingRight: "0px",
                      }}
                    />
                    { contact.firstName + ' ' + contact.lastName }
                  </div>
                </a>
              </Link> 
            )) }
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}