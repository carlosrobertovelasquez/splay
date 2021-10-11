import React from "react"

import MenuWall from "../../../../atoms/menu/wall/left"

export default function index({ datos }) {
  return (
    <React.Fragment>
      <div className="col-span-7 md:col-span-2 profilePhoto px-1 md:px-4" style={{ textAlign: 'center' }}>
        <MenuWall datos={datos} />
      </div>
    </React.Fragment>
  )
}
