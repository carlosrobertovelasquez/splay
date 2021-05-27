import React from "react"
import Wall from "./wall"
export default function index({ datos }) {
  const { userid, following } = datos

  return (
    <React.Fragment>
      <Wall userId={userid} following={following} />
    </React.Fragment>
  )
}
