import React from "react"
import Avatar from "../../../atoms/Avatar/friend"
export default function index({ friend }) {
  return (
    <>
      <div className="   sm:w-1/4 p-2">
        <div className=" bg-indigo-segundary px-6 py-8 rounded-lg shadow-lg text-center">
          <Avatar userId={friend} />
        </div>
      </div>
    </>
  )
}
