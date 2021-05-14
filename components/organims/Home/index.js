import React from "react"
import Header from "../../molecules/Navbar"
import Link from "next/link"
import { useAuth } from "../../../lib/auth"
import Auth from "../../../pages/Auth"
export default function index() {
  const { user, signout } = useAuth()
  if (!user) {
    ;<Auth />
  }

  const avatarOverCard = {
    position: "absolute",
    top: "-5px",
    left: "-5px",
    boxShadow: "1px 1px 1px #333",
    border: "#00A59B solid 3px",
    borderRadius: "50%",
    width: "45px",
    height: "45px",
    display: "inline-block",
    marginRight: "20px",
    paddingRight: "0px",
  }
  const cardHistory = {
    position: "relative",
    background: "#ddd",
    borderRadius: "10px",
  }

  return (
    <React.Fragment>
      <Header opt="2" />
      <section
        className="mb-0"
        style={{ background: "#d5eceb", padding: "5px 0px 15px 0px" }}
      >
        <div className="mx-auto">
          <div
            className="grid items-center grid-cols-7 gap-6 profileOptions"
            style={{ gap: "4rem" }}
          >
            <div
              className="col-span-2 md:col-span-2 profilePhoto"
              style={{ textAlign: "center" }}
            >
              <div className="grid grid-cols-3">
                <div className="col-span-auto">
                  <p className="text-center">
                    <img
                      src="/Quetzal.jpeg"
                      style={{
                        display: "inline",
                        borderRadius: "50%",
                        height: "70px",
                        width: "70px",
                      }}
                    />
                  </p>
                </div>
                <div className="col-span-2 text-left">
                  <h1
                    style={{
                      fontSize: "2rem",
                      fontWeight: "bold",
                      color: "#00A59B",
                    }}
                  >
                    Juan Pineda
                  </h1>
                  <h2
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "400",
                      color: "#58595B",
                    }}
                  >
                    Desarollador
                  </h2>
                  <p className="my-4">
                    <Link href="/">
                      <a className="button2">
                        <span style={{ marginRight: "5px" }}>+</span> Añadir
                        Historia
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-7 md:col-span-3  profileAlias">
              <div className="grid grid-cols-4 gap-4 items-center">
                <div className="col-span-2 md:col-span-1" style={cardHistory}>
                  <img src="/Quetzal.jpeg" style={avatarOverCard} />
                  <p className="p-4" style={{ textAlign: "center" }}>
                    <img
                      src="/Quetzal.jpeg"
                      style={{ display: "inline-block", borderRadius: "10px" }}
                    />
                  </p>
                  <p
                    className="px-4"
                    style={{ fontSize: "0.9rem", fontWeight: "bold" }}
                  >
                    Juan Alberto Suarez
                  </p>
                  <p className="px-4" style={{ fontSize: "0.8rem" }}>
                    14 Contactos es común
                  </p>
                  <p className="text-center px-4 mt-2">
                    <button
                      className="button2 mb-2"
                      style={{
                        minWidth: "initial",
                        width: "100%",
                        padding: "2px initial",
                      }}
                    >
                      <span style={{ marginRight: "5px" }}>+</span> Agregar
                    </button>
                  </p>
                </div>
                <div className="col-span-2 md:col-span-1" style={cardHistory}>
                  <img src="/Quetzal.jpeg" style={avatarOverCard} />
                  <p className="p-4" style={{ textAlign: "center" }}>
                    <img
                      src="/Quetzal.jpeg"
                      style={{ display: "inline-block", borderRadius: "10px" }}
                    />
                  </p>
                  <p
                    className="px-4"
                    style={{ fontSize: "0.9rem", fontWeight: "bold" }}
                  >
                    Juan Alberto Suarez
                  </p>
                  <p className="px-4" style={{ fontSize: "0.8rem" }}>
                    14 Contactos es común
                  </p>
                  <p className="text-center px-4 mt-2">
                    <button
                      className="button2 mb-2"
                      style={{
                        minWidth: "initial",
                        width: "100%",
                        padding: "2px initial",
                      }}
                    >
                      <span style={{ marginRight: "5px" }}>+</span> Agregar
                    </button>
                  </p>
                </div>
                <div className="col-span-2 md:col-span-1" style={cardHistory}>
                  <img src="/Quetzal.jpeg" style={avatarOverCard} />
                  <p className="p-4" style={{ textAlign: "center" }}>
                    <img
                      src="/Quetzal.jpeg"
                      style={{ display: "inline-block", borderRadius: "10px" }}
                    />
                  </p>
                  <p
                    className="px-4"
                    style={{ fontSize: "0.9rem", fontWeight: "bold" }}
                  >
                    Juan Alberto Suarez
                  </p>
                  <p className="px-4" style={{ fontSize: "0.8rem" }}>
                    14 Contactos es común
                  </p>
                  <p className="text-center px-4 mt-2">
                    <button
                      className="button2 mb-2"
                      style={{
                        minWidth: "initial",
                        width: "100%",
                        padding: "2px initial",
                      }}
                    >
                      <span style={{ marginRight: "5px" }}>+</span> Agregar
                    </button>
                  </p>
                </div>
                <div className="col-span-2 md:col-span-1" style={cardHistory}>
                  <img src="/Quetzal.jpeg" style={avatarOverCard} />
                  <p className="p-4" style={{ textAlign: "center" }}>
                    <img
                      src="/Quetzal.jpeg"
                      style={{ display: "inline-block", borderRadius: "10px" }}
                    />
                  </p>
                  <p
                    className="px-4"
                    style={{ fontSize: "0.9rem", fontWeight: "bold" }}
                  >
                    Juan Alberto Suarez
                  </p>
                  <p className="px-4" style={{ fontSize: "0.8rem" }}>
                    14 Contactos es común
                  </p>
                  <p className="text-center px-4 mt-2">
                    <button
                      className="button2 mb-2"
                      style={{
                        minWidth: "initial",
                        width: "100%",
                        padding: "2px initial",
                      }}
                    >
                      <span style={{ marginRight: "5px" }}>+</span> Agregar
                    </button>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-2 md:col-span-2 profileMore text-left">
              <div className="grid grid-cols-4 items-center ml-4 pl-4">
                <div className="col-span-1 text-right px-4">
                  <img
                    src="/icons/Iconos-Muro-General/birthday.png"
                    style={{ width: "40px", display: "inline-block" }}
                  />
                </div>
                <div className="col-span-3">
                  <p>
                    <Link href="/">
                      <a style={{ fontSize: "1.1rem", color: "#808080" }}>
                        Juan Ramón Crús está <br />
                        cumpliendo años ahora
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#fbf4f4", padding: "30px 15px 0px" }}>
        <div className="mx-auto">
          <div
            className="grid grid-cols-7 gap-6 profileOptions"
            style={{ gap: "4rem" }}
          >
            <div
              className="col-span-2 md:col-span-2 profilePhoto px-4"
              style={{ textAlign: "center" }}
            >
              <div className="px-4 grid grid-cols-4 gap-4 text-left">
                <div className="col-span-4 py-4">
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
                      Mis Amigos
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
            </div>
            <div className="col-span-7 md:col-span-3  profileAlias">
              <div className="boxWidget">
                <div className="grid grid-cols-5 gap-4">
                  <div>
                    <p style={{ textAlign: "center" }}>
                      <img
                        src="/Quetzal.jpeg"
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
                      <div className="col-span-3">
                        <p
                          style={{
                            marginBottom: "2rem",
                            height: "45px",
                            background: "initial",
                            fontSize: "2.2rem",
                          }}
                        >
                          <span
                            style={{
                              borderBottom: "1px solid #333",
                              paddingBottom: "12px",
                            }}
                          >
                            ¿Que está pasando?
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

              <div className="mt-5 boxWidget">
                <div className="grid grid-cols-12">
                  <div className="col-span-1">
                    <p
                      className="text-left"
                      style={{ fontSize: "1.8rem", fontWeight: "bold" }}
                    >
                      <img
                        src="/Quetzal.jpeg"
                        style={{
                          display: "inline-block",
                          borderRadius: "50%",
                          width: "40px",
                          height: "40px",
                        }}
                      />
                    </p>
                  </div>
                  <div className="col-span-10">
                    <p
                      className=""
                      style={{
                        fontSize: "1rem",
                        color: "#00A59B",
                        fontWeight: "bold",
                      }}
                    >
                      Juan Pineda
                    </p>
                    <p style={{ fontSize: "0.8rem", color: "#9d9d9d" }}>
                      12 de Marzo 2010 a las 5:45 P.M
                    </p>
                  </div>
                  <div
                    className="col-span-1"
                    style={{ marginTop: "auto", marginBottom: "auto" }}
                  >
                    <p className="text-right">
                      <button>
                        <img src="/icons/icon2.png" style={{ width: "30px" }} />
                      </button>
                    </p>
                  </div>
                  <div className="col-span-12 mt-4 mb-4">
                    <p className="text-left" style={{ fontSize: "0.9rem" }}>
                      Bienvenidos a Splay, la plataforma de conectividad más
                      completa
                    </p>
                  </div>
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
                  <div
                    className="col-span-11 mb-5"
                    style={{
                      borderBottom: "2px solid #bbb",
                      paddingBottom: "10px",
                      paddingTop: "10px",
                    }}
                  >
                    <div className="grid grid-cols-3">
                      <div className="text-center">
                        <button>
                          <img
                            src="/icons/icon6.png"
                            style={{ width: "20px", display: "inline-block" }}
                          />{" "}
                          Guardar
                        </button>
                      </div>
                      <div className="text-center">
                        <button>
                          <img
                            src="/icons/comment.png"
                            style={{ width: "20px", display: "inline-block" }}
                          />{" "}
                          Comentar
                        </button>
                      </div>
                      <div className="text-center">
                        <button>
                          <img
                            src="/icons/like.png"
                            style={{ width: "20px", display: "inline-block" }}
                          />{" "}
                          Me gusta
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-12 mb-5">
                    <div
                      className="grid grid-cols-10 gap-1"
                      style={{
                        gridTemplateColumns: "repeat(16, minmax(0, 1fr))",
                      }}
                    >
                      <div className="col-span-1">
                        <p className="text-left">
                          <img
                            src="/Quetzal.jpeg"
                            style={{
                              display: "inline-block",
                              borderRadius: "50%",
                              width: "30px",
                              height: "30px",
                            }}
                          />
                        </p>
                      </div>
                      <div
                        className="col-span-9"
                        style={{ gridColumn: "span 14 / span 14" }}
                      >
                        <div
                          style={{
                            padding: "7px 15px",
                            background: "#ddd",
                            borderRadius: "10px",
                            border: "1px solid #ccc",
                          }}
                        >
                          <p>Melvin Antonio</p>
                          <p>Exelente, bienvenido!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-12 mb-5">
                    <div
                      className="grid grid-cols-10 gap-1"
                      style={{
                        gridTemplateColumns: "repeat(16, minmax(0, 1fr))",
                      }}
                    >
                      <div className="col-span-1">
                        <p className="text-left">
                          <img
                            src="/Quetzal.jpeg"
                            style={{
                              display: "inline-block",
                              borderRadius: "50%",
                              width: "30px",
                              height: "30px",
                            }}
                          />
                        </p>
                      </div>
                      <div
                        className="col-span-9"
                        style={{ gridColumn: "span 14 / span 14" }}
                      >
                        <div
                          style={{
                            padding: "7px 15px",
                            background: "#ddd",
                            borderRadius: "10px",
                            border: "1px solid #ccc",
                          }}
                        >
                          <p style={{ fontSize: "1.1rem", fontWeight: "bold" }}>
                            Juan Pineda
                          </p>
                          <p>
                            <textarea
                              placeholder="Escribe un comentario"
                              style={{
                                width: "100%",
                                background: "unset",
                                fontSize: "0.8rem",
                              }}
                            ></textarea>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 boxWidget">
                <div className="grid grid-cols-12">
                  <div className="col-span-1">
                    <p
                      className="text-left"
                      style={{ fontSize: "1.8rem", fontWeight: "bold" }}
                    >
                      <img
                        src="/Quetzal.jpeg"
                        style={{
                          display: "inline-block",
                          borderRadius: "50%",
                          width: "40px",
                          height: "40px",
                        }}
                      />
                    </p>
                  </div>
                  <div className="col-span-10">
                    <p
                      className=""
                      style={{
                        fontSize: "1rem",
                        color: "#00A59B",
                        fontWeight: "bold",
                      }}
                    >
                      Juan Pineda
                    </p>
                    <p style={{ fontSize: "0.8rem", color: "#9d9d9d" }}>
                      12 de Marzo 2010 a las 5:45 P.M
                    </p>
                  </div>
                  <div
                    className="col-span-1"
                    style={{ marginTop: "auto", marginBottom: "auto" }}
                  >
                    <p className="text-right">
                      <button>
                        <img src="/icons/icon2.png" style={{ width: "30px" }} />
                      </button>
                    </p>
                  </div>
                  <div className="col-span-12 mt-4 mb-4">
                    <video width="100%" height="240">
                      <source
                        src="https://www.w3schools.com/html/mov_bbb.mp4"
                        type="video/mp4"
                      />
                      Tu browser no soporte est tipo de formato de video.
                    </video>
                  </div>
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
                  <div
                    className="col-span-11 mb-5"
                    style={{
                      borderBottom: "2px solid #bbb",
                      paddingBottom: "10px",
                      paddingTop: "10px",
                    }}
                  >
                    <div className="grid grid-cols-3">
                      <div className="text-center">
                        <button>
                          <img
                            src="/icons/icon6.png"
                            style={{ width: "20px", display: "inline-block" }}
                          />{" "}
                          Guardar
                        </button>
                      </div>
                      <div className="text-center">
                        <button>
                          <img
                            src="/icons/comment.png"
                            style={{ width: "20px", display: "inline-block" }}
                          />{" "}
                          Comentar
                        </button>
                      </div>
                      <div className="text-center">
                        <button>
                          <img
                            src="/icons/like.png"
                            style={{ width: "20px", display: "inline-block" }}
                          />{" "}
                          Me gusta
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-12 mb-5">
                    <div
                      className="grid grid-cols-10 gap-1"
                      style={{
                        gridTemplateColumns: "repeat(16, minmax(0, 1fr))",
                      }}
                    >
                      <div className="col-span-1">
                        <p className="text-left">
                          <img
                            src="/Quetzal.jpeg"
                            style={{
                              display: "inline-block",
                              borderRadius: "50%",
                              width: "30px",
                              height: "30px",
                            }}
                          />
                        </p>
                      </div>
                      <div
                        className="col-span-9"
                        style={{ gridColumn: "span 14 / span 14" }}
                      >
                        <div
                          style={{
                            padding: "7px 15px",
                            background: "#ddd",
                            borderRadius: "10px",
                            border: "1px solid #ccc",
                          }}
                        >
                          <p>Melvin Antonio</p>
                          <p>Exelente, bienvenido!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-12 mb-5">
                    <div
                      className="grid grid-cols-10 gap-1"
                      style={{
                        gridTemplateColumns: "repeat(16, minmax(0, 1fr))",
                      }}
                    >
                      <div className="col-span-1">
                        <p className="text-left">
                          <img
                            src="/Quetzal.jpeg"
                            style={{
                              display: "inline-block",
                              borderRadius: "50%",
                              width: "30px",
                              height: "30px",
                            }}
                          />
                        </p>
                      </div>
                      <div
                        className="col-span-9"
                        style={{ gridColumn: "span 14 / span 14" }}
                      >
                        <div
                          style={{
                            padding: "7px 15px",
                            background: "#ddd",
                            borderRadius: "10px",
                            border: "1px solid #ccc",
                          }}
                        >
                          <p style={{ fontSize: "1.1rem", fontWeight: "bold" }}>
                            Juan Pineda
                          </p>
                          <p>
                            <textarea
                              placeholder="Escribe un comentario"
                              style={{
                                width: "100%",
                                background: "unset",
                                fontSize: "0.8rem",
                              }}
                            ></textarea>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-2 md:col-span-2 profileMore px-4 text-left">
              <div className="px-4 grid grid-cols-4 gap-4 text-left">
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
              </div>
              <div className="px-4 grid grid-cols-4 gap-4 text-left">
                <div className="col-span-4 py-5">
                  <label style={{ marginRight: "10px", fontWeight: "bold" }}>
                    Contactos
                  </label>
                  <div
                    style={{ position: "relative", display: "inline-block" }}
                  >
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
              </div>
              <div className="px-4 grid grid-cols-4 gap-4 text-left">
                <div className="col-span-4 mx-5">
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
                <div className="col-span-4 mx-5">
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
                <div className="col-span-4 mx-5">
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
                <div className="col-span-4 mx-5">
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
                <div className="col-span-4 mx-5">
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
              </div>
              <div className="px-4 grid grid-cols-4 gap-4 text-left ml-4">
                <div className="col-span-4 mx-5 mt-4">
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
                <div className="col-span-4 mx-5">
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
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}
