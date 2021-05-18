import React from "react"
import Wall from "./wall"
import { useAuth } from "../../../lib/auth"
export default function index() {
  const { user } = useAuth()
  return (
    <React.Fragment>
      <Wall userId={user.uid} />
    </React.Fragment>
  )
}
