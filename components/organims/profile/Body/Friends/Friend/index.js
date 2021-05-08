import React from "react"
import Link from "next/link"
import Avatar from "../../../../../atoms/Avatar/Mediun"
export default function index({ createAt, friend }) {
  return (
    <React.Fragment>
      <div>
        <p className="text-center">
          <Link href="/profile/[id]" as={`/profile/${friend}`}>
            <a>
              <Avatar idUser={friend} alt="Avatar" height="80px" width="80px" />
            </a>
          </Link>
        </p>
        <p className="text-center friendname">
          <Link href="/profile/[id]" as={`/profile/${friend}`}>
            <a>Melvin Antonio</a>
          </Link>
        </p>
      </div>
    </React.Fragment>
  )
}
