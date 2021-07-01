import React from "react"
import iconBird from "../../../public/icons/bird.png"
import iconHome from "../../../public/icons/home.png"
import icon1 from "../../../public/icons/icon1.png"
import Logo from "../../../public/Logo02.png"
import Exit from "../../../public/icons/exit.png"

import Link from "next/link"
import { useAuth } from "../../../lib/auth"
export default function index() {
  const { user } = useAuth()
  const { signout } = useAuth()
  if (user === null) return null
  return (
    <>
      <nav
        className="flex-row   md:flex justify-between bg-teal-500 py-3 w-screen "
        style={{ background: "#B2DFDD" }}
      >
        <div className="flex justify-evenly">
          <div>
            <img className="fill-current ml-2" width="100" src={Logo}></img>
          </div>

          <div className="pl-1">
            <input
              type="text"
              className="px-2 w-40 h-10 md:w-96 "
              style={{
                borderRadius: "7px",
                background: "#d5eceb",
              }}
              placeholder="Buscar"
            />
          </div>
          <div className="block pl-1 lg:hidden">
            <button className="flex items-center px-3 pt-2 pb-4 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
        </div>

        <div className=" flex justify-evenly ">
          <div>
            <Link href="/">
              <a className="inline-block text-sm px-4 leading-none mt-4 lg:mt-0">
                <img style={{ width: "40px" }} src={iconHome} />
              </a>
            </Link>
          </div>
          <div>
            <Link href="/W/[id]" as={`/W/${user.uid}`}>
              <a className="inline-block text-sm px-4 leading-none mt-4 lg:mt-0">
                <img style={{ width: "40px" }} src={icon1} />
              </a>
            </Link>
          </div>
          <div>
            <a
              href="#"
              className="inline-block text-sm px-2 leading-none mt-4 lg:mt-0"
            >
              <img style={{ width: "80px" }} src={iconBird} />
            </a>
          </div>
          <div onClick={() => signout()}>
            <a
              href="#"
              className="inline-block text-sm   leading-none mt-4 lg:mt-0"
            >
              <img style={{ width: "50px" }} src={Exit} />
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}
