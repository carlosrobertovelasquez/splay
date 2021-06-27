import React, { useState, useCallback } from "react"
import Avatar from "../../../../atoms/Avatar"
import Link from "next/link"
import { useDropzone } from "react-dropzone"
import { v4 as uuidv4 } from "uuid"
import { updatePhoto } from "../../../../../lib/db"
import firebase from "../../../../../lib/firebase"
import AvatarAve from "../../../../../public/Quetzal.jpeg"
const storage = firebase.storage()
export default function index({
  avatar,
  firstName,
  occupation,
  userId,
  profile,
}) {
  const [fileUpload, setFileUpload] = useState(null)
  const [pictureUrl, setPictureUrl] = useState(null)
  const [uploadValue, setUploadValue] = useState(0)

  const handleUploadAvatar = async (file) => {
    const extension = file.name.split(".").pop()
    const filename = `${uuidv4()}.${extension}`
    const storageRef = await storage.ref(`Avatar/${filename}`)
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
          .ref("Avatar")
          .child(filename)
          .getDownloadURL()
          .then((url) => {
            setPictureUrl(url)
            updatePhoto(userId, url)
          })
        setUploadValue(0)
        setFileUpload(null)
      }
    )
  }

  const onDrop = useCallback((acceptedFile) => {
    const file = acceptedFile[0]
    setFileUpload({
      type: "image",
      file,
      preview: URL.createObjectURL(file),
    })
    handleUploadAvatar(file)
  })

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/jpeg,image/png",
    noKeyboard: true,
    multiple: false,
    onDrop,
  })

  return (
    <>
      <div className="  md:flex justify-between">
        <div className=" flex  justify-evenly ">
          <div className="profilePhoto" style={{ textAlign: "center" }}>
            {profile === "W" ? (
              <button
                onClick={handleUploadAvatar}
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
            ) : null}
            <div>
              <Avatar src={avatar === "ND" ? AvatarAve : avatar} alt="Avatar" />
            </div>
          </div>
          <div className=" pt-8">
            <h1
              style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                color: "#00A59B",
              }}
            >
              {firstName}
            </h1>
            <h2
              style={{
                fontSize: "1.8rem",
                fontWeight: "400",
                color: "#58595B",
              }}
            >
              {occupation}
            </h2>
          </div>
        </div>
        <div className=" flex justify-center ">
          <div className="profileActions">
            {profile === "W" ? (
              <>
                <p className="my-4">
                  <Link href="/">
                    <a className="button2">Añadir Historia</a>
                  </Link>
                </p>
                <p>
                  <button className="button3">Editar Perfil</button>
                </p>
              </>
            ) : null}
          </div>
        </div>
        <div className=" hidden  md:profileMore text-right md:block">
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
        {fileUpload && (
          <progress className="w-full" value={uploadValue} max="100"></progress>
        )}
      </div>
    </>
  )
}
