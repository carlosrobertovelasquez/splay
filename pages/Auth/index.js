import React, { useState } from "react"
import Head from "next/head"
import Imagen from "next/image"
import { useAuth } from "../../lib/auth"
import Link from "next/link"
import Quetzal from "../../public/Quetzal.jpeg"
import Logo from "../../public/Logo01.png"
import { useRouter } from "next/router"

export default function index() {
  const auth = useAuth()
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const isInvalid = email === "" || password === ""
  const handleLogin = async (event) => {
    event.preventDefault()

    auth
      .signinWithEmail(email, password, "/")
      .then(() => {
        router.push("/")
      })
      .catch((error) => {
        setError(error.message)
      })
  }

  return (
    <div className="  min-w-screen min-h-screen bg-gray-primary flex items-center justify-center px-5 py-5">
      <div className="bg-indigo-tercero text-gray-primary rounded-3xl shadow-xl w-full overflow-hidden max-w-full">
        <div className="md:flex w-full  ">
          <div className="w-full px-8 mt-20 z-10  text-center ">
            <Imagen src="/Logo01.png" width={300} height={60} />
            <p className="text-5xl mt-16 mx-39 font-bold text-center">
              Convierte tu red en un mundo de oportunidades
            </p>
            <p className="text-2xl text-indigo-primary mt-4 mx-39 font-bold text-center">
              Descubre-Conecta-Comparte
            </p>
          </div>
          <div className="w-full bg-gray-primary">
            <div
              style={{ backgroundImage: `url(${Quetzal})` }}
              className="lg:flex  hidden bg-black bg-no-repeat bg-cover bg-center relative items-center  opacity-60 "
            >
              <form
                onSubmit={handleLogin}
                method="POST"
                className="w-full px-24 text-center"
              >
                {error && (
                  <p className="mb-4 text-xs text text-red-primary font-bold ">
                    {error}
                  </p>
                )}
                <div className="flex -mx-3  ">
                  <div className="w-full px-3 mt-10 mb-10">
                    <div className="flex w-96 ml-20">
                      <input
                        type="email"
                        autoComplete="off"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="johnsmith@example.com"
                        onChange={({ target }) => setEmail(target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-10">
                    <div className="flex w-96 ml-20">
                      <input
                        type="password"
                        autoComplete="off"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="************"
                        onChange={({ target }) => setPassword(target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3 mt-64">
                  <div className="w-full px-3 mb-5">
                    <button
                      disabled={isInvalid}
                      className={`block w-full max-w-xs mx-auto bg-indigo-primary hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold ${
                        isInvalid && "opacity-50"
                      } `}
                    >
                      INGRESAR
                    </button>
                  </div>
                </div>
                <Link href="/createAccount">
                  <p className="my-8 mx-32">
                    <a
                      href="#"
                      className=" text-white  hover:text-indigo-primary   font-semibold"
                    >
                      ¿Crear Tu cuenta ?
                    </a>
                  </p>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
