import React, { useState } from "react"
import Head from "next/head"

import { useAuth } from "../lib/auth"
import { doesUsernameExist, createFriends } from "../lib/db"
import Link from "next/link"
import Quetzal from "../public/Quetzal.jpeg"
import firebase from "../lib/firebase"
import Router from "next/router"
export default function passwordReset() {
  const { user, signout } = useAuth()
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")

  const isInvalid = email === ""

  const handleLogin = async (event) => {
    event.preventDefault()
    const usernameExists = await doesUsernameExist(email)
    // console.log(usernameExists)
    if (usernameExists.length) {
      try {
        await firebase.auth().sendPasswordResetEmail(email)
        Router.push("/")
      } catch (error) {
        setEmail("")
        setError(error.message)
      }
    } else {
      setError("Correo no esta Registrado")
    }
  }
  return (
    <div className="  min-w-screen min-h-screen bg-gray-primary flex items-center justify-center px-5 py-5">
      <div className="bg-indigo-tercero  rounded-3xl shadow-xl w-full overflow-hidden max-w-full">
        <div className="md:flex w-full text-center">
          <div
            style={{ backgroundImage: `url(${Quetzal})` }}
            className="lg:flex w-1/2 hidden  bg-gray-primary bg-no-repeat bg-cover bg-center relative items-center"
          >
            <div className="absolute bg-black opacity-10 inset-0 z-0" />
            <div className="w-full ml-56  text-center">
              <h1 className="text-5xl text-center font-bold  tracking-wide text-indigo-primary">
                Recuperar contraseña
              </h1>
              <p className="text-2xl  mt-80 text-white">
                Al hacer Click en Registrate aceptas nuestras condiciones y
                politicas. te enviaremos un correo eletronico de activacion
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 py-1 px-1 md:px-10">
            <div className="text-center mt-10 mb-10 text-indigo-primary">
              <h1 className="font-bold text-3xl text-indigo-primary">
                RECUPERAR CONTRASENA
              </h1>
              <p>Ingrese su correo eletronico</p>
            </div>
            {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}
            <form onSubmit={handleLogin} method="POST">
              <div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-1">
                    <label htmlFor="" className="text-xs font-semibold px-1">
                      Correo
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-email-outline text-gray-400 text-lg" />
                      </div>
                      <input
                        type="email"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="johnsmith@example.com"
                        onChange={({ target }) => setEmail(target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex -mx-3 mt-8">
                  <div className="w-full px-3 mb-5">
                    <button
                      disabled={isInvalid}
                      className={`block w-full max-w-xs mx-auto bg-indigo-primary hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold ${
                        isInvalid && "opacity-50"
                      } `}
                    >
                      RECUPERAR
                    </button>
                  </div>
                </div>

                <Link href="/">
                  <p className="mt-8">
                    {" "}
                    ¿Ya tienes{" "}
                    <a
                      href="#"
                      className="text-indigo-primary hover:text-blue-700 font-semibold"
                    >
                      una cuenta?
                    </a>
                  </p>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
