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
                  <Link href="/W/[id]" as={`/W/${datos[0].userid}`}>
                    <a>
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
                    </a>
                  </Link>

                  <div className="col-span-2 text-left">
                    <Link href="/W/[id]" as={`/W/${datos[0].userid}`}>
                      <a>
                        <h1
                          style={{
                            fontSize: "2rem",
                            fontWeight: "bold",
                            color: "#00A59B",
                          }}
                        >
                          {datos[0].firstName}
                        </h1>
                      </a>
                    </Link>
                    <h2
                      style={{
                        fontSize: "1.2rem",
                        fontWeight: "400",
                        color: "#58595B",
                      }}
                    >
                      {datos[0].occupation}
                    </h2>
                    <div>
                      <input
                        disabled={true}
                        style={{ width: "100%", fontSize: "10px" }}
                        value={`https://splay7.com/createAccount/?ref=${datos[0].userid}`}
                      ></input>
                    </div>

                    <p className="my-4">
                      <button
                        className="bg-gray-splay2 hover:bg-white text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
                        onClick={() =>
                          navigator.clipboard.writeText(
                            `https://splay7.com/?ref=${datos[0].userid}`
                          )
                        }
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                          />
                        </svg>
                        <span>Copy Link Referidos</span>
                      </button>
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
