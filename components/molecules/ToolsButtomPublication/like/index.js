import React, { useEffect, useState } from "react"
import Button from "../../../atoms/Button"
import firebase from "../../../../lib/firebase"

export default function index({ datos }) {
  const Like = async () => {
    if (docid === undefined) {
      // Adicionamos el likes
      console.log("guardamos", userId, publicationId)
      await firebase
        .firestore()
        .collection("likes")
        .add({
          idUser: userId,
          idPublication: publicationId,
          createAt: firebase.firestore.Timestamp.fromDate(new Date()),
        })
    } else {
      await firebase

        .firestore()
        .collection("likes")
        .doc("docid.docid")
        .delete()
        .then(() => {
          console.log("documento barroado")
        })
        .catch((error) => {
          console.log("error al borrar", error)
        })
    }
  }

  return (
    <React.Fragment>
      <Button
        src={datos ? "/icons/like1.png" : "/icons/like.png"}
        text={"Me gusta"}
        onclick={Like}
      />
    </React.Fragment>
  )
}
