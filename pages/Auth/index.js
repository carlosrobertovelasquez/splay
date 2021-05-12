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
  const ave1 = {
    maxWidth: "300px",
  }
  const dotmiddle = {
    fontSize: "40px",
  }

  return (
    <React.Fragment>
      <div className="min-w-screen bg-indigo-tercero text-gray-primary min-h-screen bg-gray-primary flex items-center justify-center">
        <div className="md:flex">
          <div className="lg:w-2/3 w-auto px-1 lg:mb-30 mb-20 lg:border-r-4 text-center">
            <Imagen src="/Logo01.png" width={300} height={60} />
            <p
              className="text-5xl mt-16 mx-39 font-bold text-center"
              style={{ color: "#58595B" }}
            >
              Convierte tu red en un mundo de oportunidades
            </p>
            <p className="text-2xl text-indigo-primary mt-4 mx-39 font-bold text-center">
              Descubre <span style={dotmiddle}>&#183;</span> Conecta{" "}
              <span style={dotmiddle}>&#183;</span> Comparte
            </p>

            <div className="bg-rainbow" style={{ color: "#000" }}>
              <p className="text-indigo-primary">
                <Link href="">
                  <a>Crear anuncio</a>
                </Link>{" "}
                |{" "}
                <Link href="">
                  <a>Privacidad</a>
                </Link>{" "}
                |{" "}
                <Link href="">
                  <a>Opciones de anuncio</a>
                </Link>{" "}
                |{" "}
                <Link href="">
                  <a>Política de datos</a>
                </Link>{" "}
                |{" "}
                <Link href="">
                  <a>Contáctenos</a>
                </Link>
              </p>
            </div>
          </div>

          <div className="lg:w-1/3 w-auto lg:ml-20">
            <div className="lg:flex bg-black bg-no-repeat bg-cover bg-center relative items-center opacity-60">
              <form
                onSubmit={handleLogin}
                method="POST"
                className="w-full px-2 text-center"
              >
                {error && (
                  <p className="mb-4 text-xs text text-red-primary font-bold ">
                    {error}
                  </p>
                )}
                <div className="flex-mx-3">
                  <img src="images/ave-1.png" style={ave1} />
                  <div className="w-full mt-0 mb-10">
                    <div className="flex">
                      <input
                        type="email"
                        autoComplete="off"
                        className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="Usuario o número de teléfono"
                        onChange={({ target }) => setEmail(target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex-mx-3">
                  <div className="w-full mb-10">
                    <div className="flex">
                      <input
                        type="password"
                        autoComplete="off"
                        className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="Contraseña"
                        onChange={({ target }) => setPassword(target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex-mx-0 my-10">
                  <button
                    disabled={isInvalid}
                    className={`block w-full bg-indigo-primary hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg py-3 font-semibold ${
                      isInvalid && "opacity-50"
                    } `}
                  >
                    INGRESAR
                  </button>
                </div>
                <div className="flex">
                  <div className="sm:w-auto md:w-1/2 text-center">
                    <Link href="/createAccount">
                      <a
                        href="#"
                        className="button1 hover:text-indigo-primary text-white"
                      >
                        Crear Tu Cuenta
                      </a>
                    </Link>
                  </div>
                  <div className="sm:w-auto md:w-1/2 text-center">
                    <Link href="/createAccount">
                      <a
                        href="#"
                        className="button1 hover:text-indigo-primary text-white"
                      >
                        Olvidé Contraseña
                      </a>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
