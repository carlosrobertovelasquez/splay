import React from "react"

import MenuWall from "../../../../atoms/menu/wall/left"

export default function index({ datos }) {
  return (
    <React.Fragment>
      <div className="hidden md:flex flex-col ml-8  ">
        <MenuWall datos={datos} />
      </div>
    </React.Fragment>
  )
}
