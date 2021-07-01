import React from "react"
import { slide as Menu } from "react-burger-menu"
import MenuWall from "../menu/wall/left"
const toggleMenu = ({ isOpen }) => {
  const menuWrap = document.querySelector(".bm-menu-wrap")
  isOpen
    ? menuWrap.setAttribute("aria-hidden", false)
    : menuWrap.setAttribute("aria-hidden", true)
}

const BurgerMenu = ({ datos }) => {
  return (
    <Menu noOverlay onStateChange={toggleMenu}>
      <MenuWall datos={datos} />
    </Menu>
  )
}

export default BurgerMenu
