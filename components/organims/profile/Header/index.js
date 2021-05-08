import React, { useEffect, useState, useCallback } from "react"
import Link from "next/link"
import { useDropzone } from "react-dropzone"
import Avatar from "../../../atoms/Avatar"
import { v4 as uuidv4 } from "uuid"
import firebase from "../../../../lib/firebase"
import { updatePhotoProfile, deletePhotoProfile } from "../../../../lib/db"
const storage = firebase.storage()

export default function index({ userId }) {
  // const { userId } = props

  const [loaddingForm, setLoaddingForm] = useState(true)
  const [uploadValue, setUploadValue] = useState(0)
  const [picureUrl, setPicureUrl] = useState(null)
  const [fileUpload, setFileUpload] = useState(null)
  const [pantallaModal, setPantallaModal] = useState(false)

  const Toggle = () => {
    setLoaddingForm(!loaddingForm)
  }

  const photoAvatar = async (file) => {
    console.log("aqui estamos")
    const extension = file.name.split(".").pop()
    const filename = `${uuidv4()}.${extension}`
    console.log(filename)
  }

  // Photo portada
  const handleUpload = async (file) => {
    const extension = file.name.split(".").pop()
    const filename = `${uuidv4()}.${extension}`
    const storageRef = await storage.ref(`Portada/${filename}`)
    const task = storageRef.put(file)
    task.on(
      "state_changed",
      (snapshot) => {
        const percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        setUploadValue(percentage)
      },
      (error) => {
        console.log(error.message)
      },
      () => {
        storage
          .ref("Portada")
          .child(filename)
          .getDownloadURL()
          .then((url) => {
            setPicureUrl(url)
            updatePhotoProfile(userId[0].id, url)
            setLoaddingForm(!loaddingForm)
          })
        setUploadValue(100)
        setUploadValue(0)
        setFileUpload(null)
      }
    )
  }

  const handleDelete = () => {
    deletePhotoProfile(userId[0].id)
    setPantallaModal(false)
  }

  const Modal = () => {
    setLoaddingForm(true)
    setPantallaModal(true)
  }
  const onDrop = useCallback((acceptedFile) => {
    const file = acceptedFile[0]
    setFileUpload({
      type: "image",
      file,
      preview: URL.createObjectURL(file),
    })
    handleUpload(file)
  })

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/jpeg,image/png",
    noKeyboard: true,
    multiple: false,
    onDrop,
  })

  return (
    <div>
      <section
        className="mb-4"
        style={{ background: "#d5eceb", padding: "5px 0px 15px 0px" }}
      >
        <div className="container mx-auto">
          <div className="imagenPortada" style={{ height: "320px" }}>
            <div
              style={{
                backgroundImage: `url("${userId[0].profilePhoto}")`,
                height: "280px",
                borderRadius: "0px 0px 30px 30px",
                backgroundRepeat: "no-repeat",
              }}
            >
              <button
                onClick={Toggle}
                style={{
                  position: "relative",
                  top: "230px",
                  background: "#58595B",
                  color: "#fff",
                  padding: "5px 10px",
                  left: "20px",
                  borderRadius: "5px",
                }}
              >
                Actualizar Portada
                <img
                  src="/icons/icon8.png"
                  style={{
                    width: "35px",
                    display: "inline-block",
                    paddingLeft: "13px",
                  }}
                />
              </button>
              {!loaddingForm && (
                <div
                  style={{
                    position: "relative",
                    top: "231px",
                    background: "#58595B",
                    color: "#fff",
                    padding: "4px 0px",
                    left: "20px",
                    borderRadius: "5px",
                    width: "300px",
                  }}
                >
                  <button
                    onClick={handleUpload}
                    {...getRootProps()}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      paddingLeft: "10px",
                    }}
                  >
                    <img
                      src="/icons/icon8.png"
                      style={{
                        width: "35px",
                        display: "inline-block",
                        paddingRight: "15px",
                      }}
                    />
                    <input {...getInputProps()} />
                    Subir Foto
                  </button>

                  <hr style={{ color: "white", padding: "0" }} />
                  <button
                    onClick={Modal}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      paddingLeft: "10px",
                      "&:hover": {
                        background: "#efefef",
                      },
                    }}
                  >
                    <img
                      src="/icons/icon8.png"
                      style={{
                        width: "35px",
                        display: "inline-block",
                        paddingRight: "15px",
                        button: "10px",
                      }}
                    />
                    Eliminar
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 profileOptions">
            <div className="profilePhoto" style={{ textAlign: "center" }}>
              <button
                onClick={photoAvatar}
                {...getRootProps()}
                style={{
                  position: "relative",
                  top: "100px",
                  background: "#58595B",
                  color: "#fff",
                  left: "0px",
                  borderRadius: "5px",
                }}
              >
                <img
                  src="/icons/photo.png"
                  style={{
                    width: "35px",
                    display: "inline-block",
                  }}
                />
                <input {...getInputProps()} />
              </button>
              <Avatar src={userId[0].avatar} alt="Avatar" />
            </div>

            <div className="profileAlias">
              <h1
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                  color: "#00A59B",
                }}
              >
                {userId[0].firstName}
              </h1>
              <h2
                style={{
                  fontSize: "1.8rem",
                  fontWeight: "400",
                  color: "#58595B",
                }}
              >
                {userId[0].occupation}
              </h2>
            </div>
            <div className="profileActions">
              <p className="my-4">
                <Link href="/">
                  <a className="button2">Añadir Historia</a>
                </Link>
              </p>
              <p>
                <button className="button3">Editar Perfil</button>
              </p>
            </div>
            <div className="profileMore text-right">
              <p>
                <Link href="/">
                  <a style={{ fontSize: "1.5rem", color: "#808080" }}>
                    Publicaciones
                  </a>
                </Link>
              </p>
              <p>
                <Link href="/">
                  <a style={{ fontSize: "1.5rem", color: "#808080" }}>
                    Información
                  </a>
                </Link>
              </p>
              <p>
                <Link href="/">
                  <a style={{ fontSize: "1.5rem", color: "#808080" }}>Amigos</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      {pantallaModal && (
        <div className="flex items-center justify-center fixed left-0 bottom-0 w-full h-full bg-gray-800">
          <div className=" bg-black-primario rounded-lg w-1/2">
            <div className="flex flex-col items-start p-4">
              <div className="flex items-center w-full">
                <div className="text-white font-medium text-lg">
                  Eliminar Foto de portada
                </div>
                <svg
                  onClick={() => setPantallaModal(false)}
                  className="ml-auto fill-current text-gray-700 w-6 h-6 cursor-pointer from-indigo-segundary"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 18 18"
                >
                  <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
                </svg>
              </div>
              <hr className="bg-white h-1/5" />
              <div className="text-white">
                Seguro que quieres eliminar tu foto de portada?
              </div>
              <hr />
              <div className="ml-auto">
                <button
                  onClick={handleDelete}
                  className="bg-blue-medium hover:bg-blue-medium text-white font-bold py-2 px-4 rounded"
                >
                  Confirmar
                </button>
                <button
                  onClick={() => setPantallaModal(false)}
                  className="bg-transparent hover:bg-blue-medium text-blue-medium font-semibold hover:text-white py-2 px-4 border border-blue-medium hover:border-transparent rounded"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
