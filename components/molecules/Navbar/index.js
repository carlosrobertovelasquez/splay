import React, { useEffect, useState } from "react"
import { useRouter } from 'next/router'
import iconBird from "../../../public/icons/bird2.png"
import iconHome from "../../../public/icons/home.png"
import icon1 from "../../../public/icons/icon1.png"
import Logo from "../../../public/Logo02.png"
import Exit from "../../../public/icons/exit.png"
import BurgerMenu from "../../atoms/BurgerMenu"
import Link from "next/link"
import { useAuth } from "../../../lib/auth"
import { searchAll } from '../../../lib/db'
import styled from "styled-components"
import ModalUpload from '../../organims/Modal/ModalNotificaciones'
const Ul = styled.ul`
position: absolute;
z-index: 1000;

-webkit-box-shadow: 0 3px 13px 0 rgba(60,60,60,.4);
box-shadow: 0 3px 13px 0 rgba(60,60,60,.4);
border-radius: 5px;
border: 1px solid #efeff0;
padding: 5px 0px;
background-color: #fff;
color: #7a7d85;
cursor: default;
-webkit-box-sizing: border-box;
box-sizing: border-box;
width: 24rem;

.active {
  background-color: #f4f4f4;
  cursor: pointer;
  font-weight: 600;
}
`
const Li = styled.li`

:hover {
  background-color: #f4f4f4;
  cursor: pointer;
  font-weight: 600;
}
a { 
  display: block;
  height: 100%;
  padding: 10px;
}
a img {
  width: 35px;
  height: 35px;
  display: inline-block;
  margin-right: 10px;
  border-radius: 50%;
}
`
export default function index({ datos }) {
  const [active, setActive] = useState(0);
  const [filtered, setFiltered] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [input, setInput] = useState("");
  const [fueradeUl, setFueradeUl] = useState(true);
  const [showModal, setShowModal] = useState(false)
  const [resultado, setResultado] = useState(null)
  const router = useRouter();

  useEffect(() => {
    const menuWrap = document.querySelector(".bm-menu-wrap")
    if (menuWrap) {
      menuWrap.setAttribute("aria-hidden", true)
    }
  }, [])
  
  const { user } = useAuth()
  const { signout } = useAuth()
  if (user === null) return null
  const onChangeValue = (val) => {
    let word = val;
    if (word.length > 2)
    {
      searchAll((newSearch) => {
        //setDataComentarios(newSearch)
        console.log(newSearch);

        /*
        const suggestions = ["kevin montero", "kevin kosner"];
        const newFilteredSuggestions = newSearch.filter(
          suggestion =>
            suggestion.toLowerCase().indexOf(word.toLowerCase()) > -1
        );
        */

        setActive(0);
        //setFiltered(newFilteredSuggestions);
        setFiltered(newSearch);
        setIsShow(true);
        setInput(word);
      }, word)
    }
    else {
      setActive(0);
      setFiltered([]);
      setIsShow(false);
    }
  }
  
  
  const onKeyDown = e => {
    //console.log(e.keyCode);
    console.log(input.length);
    if (input.length > 2)
    {
      if (e.keyCode === 13) {
        if (filtered[active])
          window.location.href = "/" + filtered[active].slug;
      }
      else if (e.keyCode === 38) {
        if (active === 0)
        {
          return null;
        }
        else {
          e.target.value = filtered[active - 1].nombre;
          return setActive(active - 1);
        }
        //return (active === 0) ? null : setActive(active - 1);
      }
      else if (e.keyCode === 40) {
        if (active === (filtered.length - 1)) {
          return null;
        }
        else {
          e.target.value = filtered[active + 1].nombre;
          return setActive(active + 1);
        }
        //return (active === (filtered.length - 1)) ? null : setActive(active + 1);
      }
      else if (e.keyCode === 27)
      {
        setActive(0);
        //setFiltered([]);
        setIsShow(false);
      }
    }
  };
  
  const onBlur = e => {
    
    if (e.target.value.length > 2)
    {
      
      //setActive(0);
      //setFiltered([]);
      //setIsShow(false);
      
      if (fueradeUl === true)
      {
        setActive(0);
        setIsShow(false);
      }
      else {
        setIsShow(true);
      }
    }
    
   
  }

  const onFocus = e => {
    if (e.target.value !== '')
    {
      setIsShow(true);
      console.log(isShow);
      console.log(input);
      console.log();
    }
  }
    const notificaciones=()=>{
      setShowModal(!showModal)
    }

  const onMouseEnter = (e, index) => {
    setActive(index);
    //setIsShow(true);
    console.log("on mouse enter li");
  }

  const onMouseEnterUl = e => {
    //console.log("aqui dentro de ul");
    setFueradeUl(false);
  }
  const onMouseLeaveUl = e => {
    setFueradeUl(true);
  }
  const renderAutocomplete = () => {
    if (isShow && input) {
      if (filtered.length) {
        return (
          <Ul className="autocomplete" onMouseEnter={onMouseEnterUl} onMouseLeave={onMouseLeaveUl}>
            {filtered.map((suggestion, index) => {
              let className;
              
              if (index === active) {
                className = "active";
              } 
              return (
                <Li className={className} key={suggestion.nombre} onMouseEnter={(e) => onMouseEnter(e,index)}>
                  <Link href={suggestion.slug}><a><img src={suggestion.imagen}/>{suggestion.nombre}</a></Link>
                </Li>
              );
            })}
          </Ul>
        );
      } else {
        return (
          <div className="no-autocomplete">
            <em>Not found</em>
          </div>
        );
      }
    }
    
    return (<p></p>);
  }

  return (
    <>
      
      <nav
        className="flex-row  sticky top-0   md:flex justify-between bg-teal-500 py-3 w-screen "
        style={{ background: "#B2DFDD" }}
      >
        <div className="pl-1 md:hidden">
          <BurgerMenu datos={datos} />
        </div>
        <div className="flex justify-evenly">
          <div>
            <img className="fill-current ml-8" width="100" src={Logo}></img>
          </div>

          <div className="pl-1">
            <input
              type="text"
              className="px-2 w-40 h-10 md:w-96 "
              style={{
                borderRadius: "7px",
                background: "#d5eceb",
              }}
              placeholder="Buscar"
              onChange={(val)=>onChangeValue(val.target.value)}
              onKeyDown={onKeyDown}
              onBlur = {onBlur}
              onFocus = {onFocus}
            />
            {renderAutocomplete()}
          </div>
          
          
          
        </div>

        <div className=" flex justify-evenly ">
          <div>
            <Link href="/">
              <a className="inline-block text-sm px-4 leading-none mt-4 lg:mt-0">
                <img style={{ width: "40px" }} src={iconHome} />
              </a>
            </Link>
          </div>
          <div>
            <Link href="/W/[id]" as={`/W/${user.uid}`}>
              <a className="inline-block text-sm px-4 leading-none mt-4 lg:mt-0">
                <img style={{ width: "40px" }} src={icon1} />
              </a>
            </Link>
          </div>
          <div onClick={()=>notificaciones()}>
            <span
              
              className="inline-block relative text-sm px-2 leading-none mt-4 lg:mt-0"
            >
              <img className="countImagen" src={iconBird} />
              <span className="countNotificaciones" >{resultado}</span>
            </span>
          </div>
          <div onClick={() => signout()}>
            <a
              href="#"
              className="inline-block text-sm   leading-none mt-4 lg:mt-0"
            >
              <img style={{ width: "50px" }} src={Exit} />
            </a>
          </div>
        </div>
        <ModalUpload
        show={showModal}
        setShowModal={setShowModal}
        datos={datos}
        setResultado={setResultado}
      />
      </nav>
    </>
  )
}
