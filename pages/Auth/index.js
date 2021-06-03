import React, { useState, useEffect } from "react"
import Head from "next/head"
import Imagen from "next/image"
import { useAuth } from "../../lib/auth"
import Link from "next/link"
import Quetzal from "../../public/Quetzal.jpeg"

import Logo from "../../public/Logo01.png"
import { useRouter } from "next/router"
import { doesUsernameExist, createFriends } from "../../lib/db"
import firebase from "../../lib/firebase"
export default function index() {
  const auth = useAuth()
  const { user } = useAuth()
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [crearCuenta, setCrearCuenta] = useState(false)
  const [actionModal, setActionModal] = useState(false)
  const [ocultarBoton, setOcultarBoton] = useState(true)
  // Crear Cuenta
  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [sexo, setSexo] = useState("")
  const [dia, setDia] = useState("")
  const [mes, setMes] = useState("")
  const [ano, setAno] = useState("")
  const [referido, setReferido] = useState("")
  const isInvalidNewCuenta =
    email === "" ||
    password === "" ||
    nombre === "" ||
    apellido === "" ||
    dia === "00" ||
    mes === "00" ||
    ano === "00" ||
    sexo === ""
  const handleLoginNew = async (event) => {
    setOcultarBoton(false)
    event.preventDefault()
    const usernameExists = await doesUsernameExist(email)
    // console.log(usernameExists)
    if (!usernameExists.length) {
      try {
        const createdUserResult = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
        createdUserResult.user.sendEmailVerification()
        createdUserResult.user.updateProfile({
          displayName: nombre,
        })
        await firebase.firestore().collection("users").add({
          userid: createdUserResult.user.uid,
          firstName: nombre,
          lastName: apellido,
          email: email.toLowerCase(),
          gender: sexo.toUpperCase(),
          birthdayDay: dia,
          birthdayMonth: mes,
          birthdayYear: ano,
          avatar:
            "https://firebasestorage.googleapis.com/v0/b/splay7-8f0b9.appspot.com/o/Avatar%2Fbcac4514-387c-48d4-afa4-23cc459244a2.jpeg?alt=media&token=634a3d34-79fb-419f-85d1-df17d0ddd9cb",
          profilePhoto:
            "https://firebasestorage.googleapis.com/v0/b/splay7-8f0b9.appspot.com/o/Portada%2Fcd791fbf-cd54-402b-8d35-022b4c3091fc.png?alt=media&token=a97a1823-fb26-4e35-89c6-b17b8eb2acc8",
          trabajaEn: "ND",
          estadoCivil: "ND",
          occupation: "ND",
          estado: false,
          dateCreate: Date.now(),
          followers: [],
          following: [],
          referido: referido,
          emailVerified: false,
          membership: "F",
        })
        // Pendiente de cambiar el id de Splay oficial
        //   await createFriends(
        //   "klYYiY1LIzVSd6NinFog5jiplXF3",
        //  createdUserResult.user.uid
        // )
        //   signout()
        setActionModal(true)
        setCrearCuenta(false)
        setOcultarBoton(true)
      } catch (error) {
        setNombre("")
        setApellido("")
        setEmail("")
        setPassword("")
        setDia("")
        setMes("")
        setAno("")
        setSexo("")
        setError(error.message)
      }
    } else {
      setError("Correo ya existe por favor ingresar otro")
    }
  }

  //

  const statePage = router.query.ref
  useEffect(() => {
    if (statePage) {
      setCrearCuenta(true)
      setReferido(statePage)
    }
  }, [statePage])

  const isInvalid = email === "" || password === ""
  const handleLogin = async (event) => {
    event.preventDefault()

    auth
      .signinWithEmail(email, password, "/")
      .then(() => {
        if (user === false) {
          setError("Su cuenta no esta Validad revise su buzon de correo")
        } else {
          console.log("aqui estamos")
          router.push("/")
        }
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
  const olvideContrasena = () => {
    router.push("/passwordReset")
  }
  return (
    <React.Fragment>
      {!crearCuenta ? (
        <div className="min-w-screen bg-indigo-tercero text-gray-primary min-h-screen bg-gray-primary flex items-center justify-center">
          <div className="mt-10  md:flex">
            <div className="  mb-5   lg:w-2/3 w-auto px-1 lg:mb-30  lg:border-r-4 text-center">
              <Imagen
                src="/Logo01.png"
                className="mt-16"
                width={300}
                height={60}
              />
              <p
                className="text-xl md:text-5xl mt-5  md:mt-16 mx-39 font-bold text-center"
                style={{ color: "#58595B" }}
              >
                Convierte tu red en un mundo de oportunidades
              </p>
              <p className="text-sm  md:text-2xl text-indigo-primary mt-4 mx-39 font-bold text-center">
                Descubre <span style={dotmiddle}>&#183;</span> Conecta{" "}
                <span style={dotmiddle}>&#183;</span> Comparte
              </p>

              <div className="bg-rainbow" style={{ color: "#000" }}>
                <p className="text-indigo-primary ">
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
                          placeholder="Correo eletronico"
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
                    <div className=" mb-10 w-1/2  text-center">
                      <button
                        onClick={() => setCrearCuenta(true)}
                        className="bg-indigo-primary hover:bg-gray-splay text-gray-800 font-bold  py-2 px-4 rounded inline-flex items-center"
                      >
                        Crear tu cuenta
                      </button>
                    </div>
                    <div className="w-auto  text-center">
                      <button
                        onClick={olvideContrasena}
                        className="bg-indigo-primary hover:bg-gray-splay text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
                      >
                        Olvidé Contraseña
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : (
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
                    Registrate
                  </h1>
                  <p className="text-2xl  mt-80 text-white">
                    Al hacer Click en Registrate aceptas nuestras condiciones y
                    politicas. te enviaremos un correo eletronico de activacion
                  </p>
                </div>
              </div>

              <div className="w-full md:w-1/2 py-1 px-1 md:px-10">
                <div className="text-center mb-10 text-indigo-primary">
                  <h1 className="font-bold text-3xl text-indigo-primary">
                    CREAR CUENTA
                  </h1>
                  <p>Ingrese su información para registrarse</p>
                </div>
                {error && (
                  <p className="mb-4 text-xs text-red-primary">{error}</p>
                )}
                <form onSubmit={handleLoginNew} method="POST">
                  <div>
                    {referido ? (
                      <div className="flex -mx-3">
                        <div className="w-full px-3 mb-1">
                          <label
                            htmlFor=""
                            className="text-xs font-semibold px-1"
                          >
                            ID de Referido
                          </label>
                          <div className="flex">
                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                              <i className="mdi mdi-email-outline text-gray-400 text-lg" />
                            </div>
                            <input
                              type="text"
                              className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                              disabled={true}
                              value={referido}
                            />
                          </div>
                        </div>
                      </div>
                    ) : null}

                    <div className="flex -mx-3">
                      <div className="w-1/2 px-3 mb-1">
                        <label
                          htmlFor=""
                          className="text-xs font-semibold px-1"
                        >
                          Nombres
                        </label>
                        <div className="flex">
                          <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center" />
                          <input
                            type="text"
                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                            placeholder="John"
                            onChange={({ target }) => setNombre(target.value)}
                          />
                        </div>
                      </div>
                      <div className="w-1/2 px-3 mb-1">
                        <label
                          htmlFor=""
                          className="text-xs font-semibold px-1"
                        >
                          Apellidos
                        </label>
                        <div className="flex">
                          <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                            <i className="mdi mdi-account-outline text-gray-400 text-lg" />
                          </div>
                          <input
                            type="text"
                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                            placeholder="Smith"
                            onChange={({ target }) => setApellido(target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex -mx-3">
                      <div className="w-full px-3 mb-1">
                        <label
                          htmlFor=""
                          className="text-xs font-semibold px-1"
                        >
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
                    <div className="flex -mx-3">
                      <div className="w-full px-2 mb-5">
                        <label
                          htmlFor=""
                          className="text-xs font-semibold px-1"
                        >
                          Contraseña
                        </label>
                        <div className="flex">
                          <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                            <i className="mdi mdi-lock-outline text-gray-400 text-lg" />
                          </div>
                          <input
                            type="password"
                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                            placeholder="************"
                            onChange={({ target }) => setPassword(target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mb-1 -mx-2  flex items-end">
                      <div className="px-2 w-1/2 ">
                        <label className="font-bold text-sm mb-1 ml-1">
                          Fecha de Cumpleaños
                        </label>
                        <div>
                          <select
                            className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"
                            onChange={({ target }) => setDia(target.value)}
                          >
                            <option value="00">Dia</option>
                            <option value="01">01</option>
                            <option value="02">02</option>
                            <option value="03">03</option>
                            <option value="04">04</option>
                            <option value="05">05</option>
                            <option value="06">06</option>
                            <option value="07">07</option>
                            <option value="08">08</option>
                            <option value="09">09</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                            <option value="31">31</option>
                          </select>
                        </div>
                      </div>
                      <div className="px-2 w-1/2">
                        <select
                          className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"
                          onChange={({ target }) => setMes(target.value)}
                        >
                          <option value="00">Mes</option>
                          <option value="01">01 - Enero</option>
                          <option value="02">02 - Febrero</option>
                          <option value="03">03 - Marzo</option>
                          <option value="04">04 - Abril</option>
                          <option value="05">05 - Mayo</option>
                          <option value="06">06 - Junio</option>
                          <option value="07">07 - Julio</option>
                          <option value="08">08 - Agosto</option>
                          <option value="09">09 - Septiembre</option>
                          <option value="10">10 - Octubre</option>
                          <option value="11">11 - Noviembre</option>
                          <option value="12">12 - Diciembre</option>
                        </select>
                      </div>
                      <div className="px-2 w-1/2">
                        <select
                          className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"
                          onChange={({ target }) => setAno(target.value)}
                        >
                          <option value="00">Año</option>
                          <option value="2005">2005</option>
                          <option value="2004">2004</option>
                          <option value="2003">2003</option>
                          <option value="2002">2002</option>
                          <option value="2001">2001</option>
                          <option value="2000">2000</option>
                          <option value="1999">1999</option>
                          <option value="1998">1998</option>
                          <option value="1997">1997</option>
                          <option value="1996">1996</option>
                          <option value="1995">1995</option>
                          <option value="1994">1994</option>
                          <option value="1993">1993</option>
                          <option value="1992">1992</option>
                          <option value="1991">1991</option>
                          <option value="1990">1990</option>
                          <option value="1989">1989</option>
                          <option value="1988">1988</option>
                          <option value="1987">1987</option>
                          <option value="1986">1986</option>
                          <option value="1985">1985</option>
                          <option value="1984">1984</option>
                          <option value="1983">1983</option>
                          <option value="1982">1982</option>
                          <option value="1981">1981</option>
                          <option value="1980">1980</option>
                          <option value="1979">1979</option>
                          <option value="1978">1978</option>
                          <option value="1977">1977</option>
                          <option value="1976">1978</option>
                          <option value="1975">1975</option>
                          <option value="1974">1974</option>
                          <option value="1973">1973</option>
                          <option value="1972">1972</option>
                          <option value="1971">1971</option>
                          <option value="1970">1970</option>
                          <option value="1969">1969</option>
                          <option value="1968">1968</option>
                          <option value="1967">1967</option>
                          <option value="1966">1966</option>
                          <option value="1965">1965</option>
                          <option value="1964">1964</option>
                          <option value="1963">1963</option>
                          <option value="1962">1062</option>
                          <option value="1961">1961</option>
                          <option value="1960">1960</option>
                        </select>
                      </div>
                    </div>

                    <div className="mt-4">
                      <span className="text-gray-700">Sexo</span>
                      <div className="mt-2">
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            className="form-radio"
                            name="accountType"
                            value="femenino"
                            onChange={({ target }) => setSexo(target.value)}
                          />
                          <span className="ml-2">Femenino</span>
                        </label>
                        <label className="inline-flex items-center ml-6">
                          <input
                            type="radio"
                            className="form-radio"
                            name="accountType"
                            value="masculino"
                            onChange={({ target }) => setSexo(target.value)}
                          />
                          <span className="ml-2">Masculino</span>
                        </label>
                        <label className="inline-flex items-center ml-6">
                          <input
                            type="radio"
                            className="form-radio"
                            name="accountType"
                            value="nodefinido"
                            onChange={({ target }) => setSexo(target.value)}
                          />
                          <span className="ml-2">No definido</span>
                        </label>
                      </div>
                    </div>

                    <div className="flex -mx-3 mt-8">
                      <div className="w-full px-3 mb-5">
                        {ocultarBoton && (
                          <button
                            disabled={isInvalidNewCuenta}
                            className={`block w-full max-w-xs mx-auto bg-indigo-primary hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold ${
                              isInvalidNewCuenta && "opacity-50"
                            } `}
                          >
                            REGÍSTRATE AHORA
                          </button>
                        )}
                      </div>
                    </div>

                    <p className="mt-8">
                      {" "}
                      ¿Ya tienes{" "}
                      <a
                        onClick={() => setCrearCuenta(false)}
                        href="#"
                        className="text-indigo-primary hover:text-blue-700 font-semibold"
                      >
                        una cuenta?
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      {actionModal && (
        <div
          class="min-w-screen h-screen overflow-x-hidden overflow-y-auto fixed  my-auto inset-0 z-50 outline-none focus:outline-none  items-center flex justify-center"
          id="modal-id"
        >
          <div class="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-indigo-tercero ">
            <div class="">
              <div class="text-center p-5 flex-auto justify-center">
                <img src="images/ave-1.png" style={ave1} />

                <h2 class="text-xl font-bold py-4 ">
                  Felicidades !!!!!! Ya eres parte de red Splay7
                </h2>
                <p class="text-sm text-gray-500 px-8">
                  te enviamos un correo eletronico a tu cuenta sino lo
                  encuentras buscalo en la bandeja de no deseados o spam
                </p>
              </div>

              <div class="p-3  mt-2 text-center space-x-4 md:block">
                <button
                  onClick={() => setActionModal(false)}
                  class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
                >
                  Aceptar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  )
}
