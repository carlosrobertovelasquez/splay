import React from "react"
import Information from "./Information"
import Friends from "./Friends"
import Photo from "./Photo"
import Section01 from "./Section01"
import Section02 from "./Section02"
import Publications from "./Publications"
export default function Index(props) {
  const { userData } = props
  return (
    <React.Fragment>
      <section>
        <div className="container2 mx-auto">
          <div className="grid grid-cols-5 gap-4 profileOptions">
            <div className="col-span-2 navbar">
              <Information userData={userData} />
              <Friends userData={userData} />
              <Photo userData={userData} />
            </div>
            <div className="col-span-3">
              <Section01 userData={userData} />
              <Section02 userData={userData} />
              <Publications userData={userData} />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}
