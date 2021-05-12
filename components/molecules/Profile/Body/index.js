import React from "react"
import Information from "../../../molecules/Profile/Body/Information"
import Friends from "../../../molecules/Profile/Body/Friends"
import Photo from "./Photos"
import Section01 from "../../../molecules/Profile/Body/Section01"
import Section02 from "../../../molecules/Profile/Body/Section02"
import Publications from "../../../molecules/Profile/Body/Publications"
export default function index(props) {
  const { profile } = props
  const { userData } = props
  return (
    <React.Fragment>
      <section>
        <div className="container2 mx-auto">
          <div className="grid grid-cols-5 gap-4 profileOptions">
            <div className="col-span-2 navbar">
              <Information userData={userData} profile={profile} />
              <Friends userData={userData} />
              <Photo userData={userData} />
            </div>
            <div className="col-span-3">
              {profile === "W" ? <Section01 userData={userData} /> : null}

              <Section02 userData={userData} />
              <Publications userData={userData} />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}
