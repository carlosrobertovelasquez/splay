import axios from "axios"
import firebase from "./firebase"
const firestore = firebase.firestore()

export async function createUser(uid, data) {
  return await firestore
    .collection("users")
    .doc(uid)
    .set({ uid, ...data }, { merge: true })
}

export async function doesUsernameExist(email) {
  const result = await firestore
    .collection("users")
    .where("email", "==", email)
    .get()
  // console.log('result.doc',result.docs)
  return result.docs.map((user) => user.data().length > 0)
}

export async function getUserByUserId(userid) {
  const result = await firestore
    .collection("users")
    .where("userid", "==", userid)
    .get()
  const user = result.docs.map((item) => ({
    ...item.data(),
    docid: item.id,
  }))
  return user
}

export async function getUserByLikes(idUser, idPublication) {
  const result = await firestore
    .collection("likes")
    .where("idUser", "==", idUser)
    .where("idPublication", "==", idPublication)
    .get()
  const likes = result.docs.map((item) => ({
    ...item.data(),
    docid: item.id,
  }))
  return likes
}

const ActualizarTiempoRealPublication = (doc) => {
  const data = doc.data()
  const id = doc.id
  const { dateCreate } = data

  return {
    ...data,
    id,
    dateCreate: +dateCreate.toDate(),
  }
}

// Consultar comentarios de Publicaciones
const ActualizarTiempoRealComentarios = (doc) => {
  const data = doc.data()
  const id = doc.id
  const { createAt } = data
  return {
    ...data,
    id,
    createAt: +createAt.toDate(),
  }
}

const ActualizarTiempoRealUser = (doc) => {
  const data = doc.data()
  const id = doc.id
  return {
    ...data,
    id,
  }
}

const ActualizarTiempoRealAmigos = (doc) => {
  const data = doc.data()
  const id = doc.id
  return {
    ...data,
    id,
  }
}
const ActualizarTiempoRealLikes = (doc) => {
  const data = doc.data()
  const id = doc.id
  return {
    ...data,
    id,
  }
}

export const listenLatesLikes = (callback) => {
  return firestore.collection("likes").onSnapshot(({ docs }) => {
    const newLikes = docs.map(ActualizarTiempoRealLikes)
    callback(newLikes)
  })
}

export const listenLatesFriends = (callback) => {
  return firestore.collection("friends").onSnapshot(({ docs }) => {
    const newFriends = docs.map(ActualizarTiempoRealAmigos)
    callback(newFriends)
  })
}

export const listenLatesUsers = (callback) => {
  return firestore.collection("users").onSnapshot(({ docs }) => {
    const newUsers = docs.map(ActualizarTiempoRealUser)
    callback(newUsers)
  })
}

export const listenLatesComentarios = (callback) => {
  return firestore.collection("comments").onSnapshot(({ docs }) => {
    const newComentarios = docs.map(ActualizarTiempoRealComentarios)

    callback(newComentarios)
  })
}

export const listenLatesPublications = (callback) => {
  return firestore.collection("Publication").onSnapshot(({ docs }) => {
    const newPiblications = docs.map(ActualizarTiempoRealPublication)

    callback(newPiblications)
  })
}
/*
export async function getCommentsId() {
  return (
    firestore
      .collection("comments")
      //    .where("idPublication", "==", idPublication)
      .get()
      .then((snapshop) => {
        return snapshop.docs.map(ActualizarTiempoRealComentarios)
      })
  )
}
*/
// Publicaciones

/*
export async function getPublicationByUserId() {
  return (
    firestore
      .collection("Publication")
      //.where("idUser", "==", userid)
      .get()
      .then((snapshop) => {
        return snapshop.docs.map(ActualizarTiempoRealPublication)
      })
  )
}
*/
export async function createSite(data) {
  const site = firestore.collection("ghost_sites").doc() // return DocRef
  await site.set(data) // return Promise<void>, so we need to await
  return site
}

export async function updateSite(siteId, data) {
  const site = firestore.collection("ghost_sites").doc(siteId)
  await site.set(data, { merge: true }) // return Promise<Void>, so we need to await
  return site
}

export async function updatePhotoProfile(docUser, photo) {
  firestore.collection("users").doc(docUser).update({
    profilePhoto: photo,
  })
  return true
}

export async function updatePhoto(docUser, photo) {
  firestore.collection("users").doc(docUser).update({
    avatar: photo,
  })
  return true
}

export async function deletePhotoProfile(docUser) {
  firestore.collection("users").doc(docUser).update({
    profilePhoto: "",
  })
  return true
}

export async function deleteSite(sideId, token) {
  const resp = await axios.delete(`api/auth/site/${siteId}`, {
    headers: { Authorization: `Bearer ${tokem}` },
  })
  return resp
}
export async function getSite(siteId) {
  const doc = await firebase.collection("ghost_sites").doc(siteOd).get()
  const site = { id: doc.id, ...doc.data() }
  return site
}

// test to see if this works on the client side
// export async function getUserSites(uid) {
//   const snapshot = await firestore
//     .collection('ghost_sites')
//     .where('authorId', '==', uid)
//     .get();

//   const sites = [];

//   snapshot.forEach((doc) => {
//     sites.push({ id: doc.id, ...doc.data() });
//   });

//   sites.sort((a, b) =>
//     compareDesc(parseISO(a.createdAt), parseISO(b.createdAt))
//   );

//   return { sites };
// }
