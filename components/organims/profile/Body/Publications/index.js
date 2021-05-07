import React from "react"
import Publication from "./Publication"
export default function index(props) {
  const { userData } = props
  return (
    <React.Fragment>
      <Publication userData={userData[0]} />
    </React.Fragment>
  )
}
