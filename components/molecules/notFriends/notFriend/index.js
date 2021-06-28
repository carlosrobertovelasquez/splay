import React, { useState } from "react"
import {
  updateLoggedInUserFollowing,
  updateFollowedUserFollowers,
} from "../../../../lib/db"

export default function index({
  avatar,
  firstName,
  lastName,
  profilePhoto,
  friendId,
  docId,
  id,
  userid,
}) {
  const [followed, setFollowed] = useState(false)
  const avatarOverCard = {
    position: "absolute",
    top: "-5px",
    left: "-5px",
    boxShadow: "1px 1px 1px #333",
    border: "#00A59B solid 3px",
    borderRadius: "50%",
    width: "45px",
    height: "45px",
    display: "inline-block",
    marginRight: "20px",
    paddingRight: "0px",
  }
  const cardHistory = {
    position: "relative",
    background: "#ddd",
    borderRadius: "10px",
    border: "1px solid #00A59B",
    // marginRight: "1px",
    // marginLeft: "1px",
  }

  async function handleFollowUser() {
    setFollowed(true)

    await updateLoggedInUserFollowing(id, friendId, false)
    await updateFollowedUserFollowers(docId, userid, false)
    //   console.log("followin", id, "Mi usuario", userid)
    //   console.log("followin", docId, "Mi usuario", userid)
  }
  return !followed ? (
    <React.Fragment>
      <div className="col-span-2 md:col-span-1 my-5  " style={cardHistory}>
        <img src={avatar} style={avatarOverCard} />
        <p className="p-4" style={{ textAlign: "center" }}>
          <img
            src={profilePhoto}
            style={{
              display: "inline-block",
              height: "80px",
              minWidth: "initial",
              borderRadius: "10px",
            }}
          />
        </p>
        <p className="px-4" style={{ fontSize: "0.9rem", fontWeight: "bold" }}>
          {firstName} {lastName}
        </p>

        <p className="text-center px-4 mt-2">
          <button
            onClick={handleFollowUser}
            className="button2 mb-2"
            style={{
              minWidth: "initial",
              width: "100%",
              padding: "2px initial",
            }}
          >
            <span style={{ marginRight: "5px" }}>+</span> Seguir
          </button>
        </p>
      </div>
    </React.Fragment>
  ) : null
}
