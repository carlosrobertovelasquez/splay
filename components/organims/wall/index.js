import React from 'react'
import {useAuth} from '../../../lib/auth'
export default function index() {
 const {user,signout}=useAuth();
    console.log('user wall',user)
    return (
        <div>
            <h1>Aqui va el muro esta en codificacion en este momento</h1>
             <div className="md:float-right sm:float-none py-6 ">
                  <button onClick={()=>signout()} type="submit" className=" rounded-xl mt-5 p-3 text-white text-sm bg-blue-medium hover:bg-blue-medium focus:outline-none focus:bg-blue-700 duration-300">Salir</button>
              </div>
           
        </div>
    )
}