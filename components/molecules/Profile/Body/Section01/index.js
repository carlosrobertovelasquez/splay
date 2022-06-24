import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone"
import ModalUpload from "../../../../organims/Modal/ModalPublication"
export default function index(props) {
  const [showModal, setShowModal] = useState(false)
    const Modal = () => {
      setShowModal(true)
    }
  const { userData } = props
   
  if (userData[0].length === 0 || userData[0] === undefined) return null
  const Nombre =
    userData[0].firstName === null ? null : userData[0].firstName.split(" ")
    
    const id=userData[0].userid
    

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

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/jpeg,image/png",
    noKeyboard: true,
    multiple: false,
    onDrop,
  })

  const onDrop = useCallback((acceptedFile) => {
    const file = acceptedFile[0]
    setFileUpload({
      type: "image",
      file,
      preview: URL.createObjectURL(file),
    })
    handleUploadAvatar(file)
  })

  return (
    <>
      <div className="flex-row justify-center md: boxWidget md:grid-cols-5 gap-4">
        <div>
          <p style={{ textAlign: "center" }}>
            <img
              src={userData[0].avatar}
              style={{
                display: "inline-block",
                borderRadius: "50%",
                height: "80px",
                width: "80px",
              }}
            />
          </p>
        </div>
        <div className="text-center  " onClick={Modal}>
          <p
            style={{
              marginBottom: "2rem",
              height: "45px",
              background: "initial",
              fontSize: "1.5rem",
            }}
          >
            <span
              style={{
                borderBottom: "1px solid #333",
                paddingBottom: "12px",
              }}
            >
              ¿Que está pensando, {Nombre[0]} ?
            </span>
          </p>
        </div>
        <div className="flex ">
          <div className="text-center">
            <img
              src="/icons/icon5.png"
              style={{
                width: "48px",
                display: "inline-block",
                paddingRight: "10px",
              }}
            />
            Multimedia
          </div>
          <div className="text-center">
            <p>
              <img
                src="/icons/icon4.png"
                style={{
                  width: "38px",
                  display: "inline-block",
                  paddingRight: "10px",
                }}
              />
              Etiqueta amigo
            </p>
          </div>
          <div className="text-center">
            <p>
              <img
                src="/icons/icon3.png"
                style={{
                  width: "38px",
                  display: "inline-block",
                  paddingRight: "10px",
                }}
              />
              Ubicación
            </p>
          </div>
        </div>
      </div>
      <ModalUpload
        show={showModal}
        setShowModal={setShowModal}
        userData={id}
      />
    </>
  )
}
