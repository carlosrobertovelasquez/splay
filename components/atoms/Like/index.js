import React from "react"
import { useAuth } from "../../../lib/auth"
import { updateLikes } from "../../../lib/db"
export default function index(props) {
  const userdata = useAuth()
  const { user } = userdata
  const { likes } = props
  const { docId } = props

  const userLikes = likes.filter((el) => {
    return el.userId === user.uid
  })

  const Like = async () => {
    if (userLikes.length === 0) {
      await updateLikes(docId, user.uid, false)
    }
  }

  /*  console.log("Likes", userLikes) */
  return (
    <div className="text-center" onClick={Like}>
      <button>
        <img
          src={userLikes.length > 0 ? "/icons/like1.png" : "/icons/like.png"}
          style={{ width: "20px", display: "inline-block" }}
        />{" "}
        Me gustas
      </button>
    </div>
  )
}

//  src="/icons/like.png"
// src={userLikes.length > 0 ? "/icons/like1.png" : "/icons/like.png"}
