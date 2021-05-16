import React from "react"
import Link from "next/link"
import NotFriends from "../../notFriends"
import Skeleton from "react-loading-skeleton"
export default function index({ datos, profile }) {
  return (
    <React.Fragment>
      {datos.length === 0 ? (
        <>
          <Skeleton count={1} height={100} />
        </>
      ) : (
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
                <div className="grid grid-cols-3 ">
                  <div className="col-span-auto">
                    <p className="text-center">
                      <img
                        src={datos[0].avatar}
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
                      {datos[0].firstName}
                    </h1>
                    <h2
                      style={{
                        fontSize: "1.2rem",
                        fontWeight: "400",
                        color: "#58595B",
                      }}
                    >
                      {datos[0].occupation}
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
              <NotFriends datos={datos} />
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
      )}
    </React.Fragment>
  )
}
