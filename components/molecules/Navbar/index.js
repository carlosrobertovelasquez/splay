import React, { useEffect } from "react"
import iconBird from "../../../public/icons/bird.png"
import iconHome from "../../../public/icons/home.png"
import icon1 from "../../../public/icons/icon1.png"
import Logo from "../../../public/Logo02.png"
import Exit from "../../../public/icons/exit.png"
import BurgerMenu from "../../atoms/BurgerMenu"
import Link from "next/link"
import { useAuth } from "../../../lib/auth"
export default function index({ datos }) {
  useEffect(() => {
    const menuWrap = document.querySelector(".bm-menu-wrap")
    if (menuWrap) {
      menuWrap.setAttribute("aria-hidden", true)
    }
  }, [])
  const { user } = useAuth()
  const { signout } = useAuth()
  if (user === null) return null
  return (
    <>
      <nav
        className="flex-row   md:flex justify-between bg-teal-500 py-3 w-screen "
        style={{ background: "#B2DFDD" }}
      >
        <div className="pl-1 md:hidden">
          <BurgerMenu datos={datos} />
        </div>
        <div className="flex justify-evenly">
          <div>
            <img className="fill-current ml-8" width="100" src={Logo}></img>
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
