import React from "react"
import Left from "../Profile/Left/index"
import Center from "../Profile/Center"
export default function index() {
  return (
    <div className=" flex  justify-center border-2  border-indigo-primary ">
      <div className="   border-2 border-red-primary">
        <Left />
      </div>
      <div className=" border-2  border-red-primary ">
        <Center />
      </div>
    </div>
  )
}
