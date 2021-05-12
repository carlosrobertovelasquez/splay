import React from "react"
import Link from "next/link"
import { useAuth } from "../../../lib/auth"
export default function index() {
  const { user, signout } = useAuth()

  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">¿Listo para sumergirte?</span>
          <span className="block text-indigo-600">
            Comience su prueba gratis hoy {user.name}
          </span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Link href="/[profile]/[id]" as={`/W/${user.uid}`}>
              <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-700">
                Ver Perfil
              </a>
            </Link>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <button
              onClick={() => signout()}
              type="submit"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-700"
            >
              Salir
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
