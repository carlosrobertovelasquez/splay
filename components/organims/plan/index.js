import React from 'react'
import {useAuth} from '../../../lib/auth'
import styles1 from '../plan/style.css'
export default function index() {
 const {user,signout}=useAuth();
    console.log('user wall',user)
    return (
        <div>
            <h1>hola</h1>
           
        </div>
    )
}