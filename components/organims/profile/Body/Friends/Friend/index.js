import React from "react"
import Avatar from "../../../../../atoms/Avatar/Mediun"
export default function index({ createAt, friend }) {
  return (
    <React.Fragment>
      <Avatar idUser={friend} alt="Avatar" height="80px" width="80px" />
    </React.Fragment>
  )
}
