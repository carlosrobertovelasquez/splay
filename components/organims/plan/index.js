import Head from "next/head"
import React, { useState, useEffect } from "react"
import { useAuth } from "../../../lib/auth"
import { listenLatesUsers } from "../../../lib/db"
import Navbar from "../../molecules/Navbar"
export default function index() {
  const { user } = useAuth()

  const [dataUser, setDataUser] = useState(undefined)

  useEffect(() => {
    let unsubscribe
    if (user) {
      unsubscribe = listenLatesUsers((newUsers) => {
        setDataUser(newUsers)
      })
      return () => unsubscribe && unsubscribe()
    }
  }, [user])

  if (dataUser === undefined) return null

  const datos = dataUser.filter((e) => e.userid === user.uid)

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
        />
        <title>Plan de Compensación</title>
      </Head>
      <Navbar datos={datos} />
      <div className="font-sans bg-indio-primary">
        <div className="min-h-screen flex justify-center items-center">
          <div className=" pt-0">
            <div className="text-center font-semibold">
              <h1 className="text-5xl">
                <span className="text-blue-700 tracking-wide">Tipos de </span>
                <span>Membresia</span>
              </h1>
              <p className="pt-2 text-xl text-gray-400 font-normal w-full px-8 md:w-full">
                Elija la mejor membresia
                <br /> para usted
              </p>
            </div>
            <div className=" pt-14 flex flex-row">
              <div className="w-96 p-8 bg-gray-splay text-center rounded-3xl pr-16 shadow-xl">
                <h1 className="text-black font-semibold text-2xl">Bronce</h1>
                <p className="pt-2 tracking-wide">
                  <span className="text-gray-400 align-top">$ </span>
                  <span className="text-3xl font-semibold">10</span>
                  <span className="text-gray-400 font-medium">/ user</span>
                </p>

                <hr className="mt-4 border-1" />
                <div className="pt-8">
                  <p className="font-semibold text-gray-400 text-left">
                    <span className="material-icons align-middle">done</span>
                    <span className="pl-2">
                      Get started with{" "}
                      <span className="text-black">messaging</span>
                    </span>
                  </p>

                  <p className="font-semibold text-gray-400 text-left pt-5">
                    <span className="material-icons align-middle">done</span>
                    <span className="pl-2">
                      Flexible <span className="text-black">team meetings</span>
                    </span>
                  </p>
                  <p className="font-semibold text-gray-400 text-left pt-5">
                    <span className="material-icons align-middle">done</span>
                    <span className="pl-2">
                      <span className="text-black">5 TB</span> cloud storage
                    </span>
                  </p>
                  <a href="#" className="">
                    <p className="w-full py-4 bg-indigo-primary mt-8 rounded-xl text-white">
                      <span className="font-medium">Choose Plan</span>
                      <span className="pl-2 material-icons align-middle text-sm"></span>
                    </p>
                  </a>
                </div>
              </div>
              <div className="w-80 p-8 bg-black-primario text-center rounded-3xl text-white border-4 shadow-xl border-white transform scale-125">
                <h1 className="text-white font-semibold text-2xl">Plata</h1>
                <p className="pt-2 tracking-wide">
                  <span className="text-gray-400 align-top">$ </span>
                  <span className="text-3xl font-semibold">24</span>
                  <span className="text-gray-400 font-medium">/ user</span>
                </p>
                <hr className="mt-4 border-1 border-gray-600" />
                <div className="pt-8">
                  <p className="font-semibold text-gray-400 text-left">
                    <span className="material-icons align-middle">done</span>
                    <span className="pl-2">
                      All features in <span className="text-white">Basic</span>
                    </span>
                  </p>
                  <p className="font-semibold text-gray-400 text-left pt-5">
                    <span className="material-icons align-middle">done</span>
                    <span className="pl-2">
                      Flexible{" "}
                      <span className="text-white">call scheduling</span>
                    </span>
                  </p>
                  <p className="font-semibold text-gray-400 text-left pt-5">
                    <span className="material-icons align-middle">done</span>
                    <span className="pl-2">
                      <span className="text-white">15 TB</span> cloud storage
                    </span>
                  </p>

                  <a href="#">
                    <p className="w-full py-4 bg-indigo-primary mt-8 rounded-xl text-white">
                      <span className="font-medium">Choose Plan</span>
                      <span className="pl-2 material-icons align-middle text-sm">
                        east
                      </span>
                    </p>
                  </a>
                </div>
                <div className="absolute top-4 right-4">
                  <p className="bg-blue-700 font-semibold px-4 py-1 rounded-full uppercase text-xs">
                    Popular
                  </p>
                </div>
              </div>
              <div className="w-96 p-8 bg-gray-splay text-center rounded-3xl pl-16 shadow-xl">
                <h1 className="text-black font-semibold text-2xl">Oro</h1>
                <p className="pt-2 tracking-wide">
                  <span className="text-gray-400 align-top">$ </span>
                  <span className="text-3xl font-semibold">35</span>
                  <span className="text-gray-400 font-medium">/ user</span>
                </p>
                <hr className="mt-4 border-1" />
                <div className="pt-8">
                  <p className="font-semibold text-gray-400 text-left">
                    <span className="material-icons align-middle">done</span>
                    <span className="pl-2">
                      All features in{" "}
                      <span className="text-black">Startup</span>
                    </span>
                  </p>
                  <p className="font-semibold text-gray-400 text-left pt-5">
                    <span className="material-icons align-middle">done</span>
                    <span className="pl-2">
                      Growth <span className="text-black">oriented</span>
                    </span>
                  </p>
                  <p className="font-semibold text-gray-400 text-left pt-5">
                    <span className="material-icons align-middle">done</span>
                    <span className="pl-2">
                      <span className="text-black">Unlimited</span> cloud
                      storage
                    </span>
                  </p>

                  <a href="#">
                    <p className="w-full py-4 bg-indigo-primary mt-8 rounded-xl text-white">
                      <span className="font-medium">Choose Plan</span>
                      <span className="pl-2 material-icons align-middle text-sm"></span>
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
