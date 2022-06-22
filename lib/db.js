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

export async function doesSlugUserExist(slug) {
  const result = await firestore
  .collection('users')
  .where('slug', '==', slug)
  .get();

  return result.docs.map((user)=> user.data().length > 0);
}

export async function createSlugUser(name, lastname) {
  const fullname = name.toLowerCase() + lastname.toLowerCase();
  
  
  let result = fullname;
  
  let exist = await doesSlugUserExist(fullname);
  
  if (exist.length) {
    let n = 1;
    let a = await doesSlugUserExist(result);
    let c = a.length;
    
    while(c > 0)
    {
      
      result = result + n;
      n +=1;
      
      a = await doesSlugUserExist(result);
      c = a.length;
    }
    
    return result;
  }

  //console.log('tipo: ' + typeof (var2));
  /*
  existSlugUser(fullname).then((res)=>{
    console.log('res');
  });*/
  /*
  if (existSlugUser(fullname))
  {
      let n = 1;
      result = result + n;
      //console.log("esto existe" + fullname);
      
      while(existSlugUser(result))
      {
          n += 1;
          result = result + n;
          console.log(n);
      }

  }
  */
  
  return result;
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

export const listenLatesUsersbyslug = (callback, userId) => {
  return firestore.collection("users").where("slug","==",userId).onSnapshot(({ docs }) => {
    const newUsers = docs.map(ActualizarTiempoRealUser)
    console.log(newUsers);
    callback(newUsers)

  })
}

export const searchAll = (callback, word) => {
    
  firestore.collection("users").onSnapshot(({ docs }) => {
    let arrayResult = [];
    const newSearch = docs.map((doc, index, array) => {
      const data = doc.data()
      let fN = data.firstName + "";
      let lN = data.lastName + "";
        
      const firstName = fN.toLowerCase().normalize('NFD').replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,"$1")
      .normalize();
      const lastName = lN.toLowerCase().normalize('NFD').replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,"$1")
      .normalize();
        
      if (firstName.includes(word.toLowerCase()) || lastName.includes(word.toLowerCase()))
      {
        const id = doc.id
        
        return {
          ...data,
          id,
          type: 'user'
        }
      }    
    });
    const result = newSearch.filter((x)=> {
      if (x !== undefined)
      {
        arrayResult.push({"nombre": `${x.firstName} ${x.lastName}`, "slug": x.slug, "tipo": 'user', "imagen": x.avatar});
      }
      return x != undefined;
    });
    callback(arrayResult)
  })

  /**
   * buscar en users y publications y filtrar
   */
}

export const searchUser = (callback, word) => {
    
  firestore.collection("users").onSnapshot(({ docs }) => {
    const newSearch = docs.map(ActualizaTiempoRealSearch)
    callback(newSearch)
  })

  /**
   * buscar en users y publications y filtrar
   */
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

export const deleteComment = (commentId) => {
  return firestore.collection("comments").doc(commentId).delete();
}


export const deletePost = (postId) => {
  return firestore.collection("Publication").doc(postId).delete();
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

export async function createFriends(friend, userId) {
  const friendNew = await firebase.firestore().collection("friends").add({
    createAt: Date.now(),
    friend: friend,
    userId: userId,
  })
  return friendNew
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

export async function verificarEstadoUsuario(userId) {
  const resultado = await getUserByUserId(userId)
  const docUid = resultado[0].docid
  if (!resultado[0].emailVerified) {
    firestore.collection("users").doc(docUid).update({
      emailVerified: true,
      estado: true,
    })
  }
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

// export async function deleteSite(sideId, token) {
//   const resp = await axios.delete(`api/auth/site/${siteId}`, {
//     headers: { Authorization: `Bearer ${tokem}` },
//   })
//   return resp
// }
// export async function getSite(siteId) {
//   const doc = await firebase.collection("ghost_sites").doc(siteOd).get()
//   const site = { id: doc.id, ...doc.data() }
//   return site
// }

export async function getSuggestedProfile(userId, following) {
  const result = await firestore
    .collection("users")
    .where("estado", "==", true)
    .get()
  return result.docs
    .map((user) => ({ ...user.data(), docId: user.id }))
    .filter(
      (profile) =>
        profile.userid !== userId && !following.includes(profile.userid)
    )
}

export async function updateLoggedInUserFollowing(
  id,
  userid,
  isFollowingProfile
) {
  return firestore
    .collection("users")
    .doc(id)
    .update({
      following: isFollowingProfile
        ? firebase.firestore.FieldValue.arrayRemove(userid)
        : firebase.firestore.FieldValue.arrayUnion(userid),
    })
}

export async function updateFollowedUserFollowers(
  docId,
  userid,
  isFollowingProfile
) {
  return firestore
    .collection("users")
    .doc(docId)
    .update({
      followers: isFollowingProfile
        ? firebase.firestore.FieldValue.arrayRemove(userid)
        : firebase.firestore.FieldValue.arrayUnion(userid),
    })
}

export async function updateLikes(docId, userId, isFollowingProfile) {
  const dateCreate = firebase.firestore.Timestamp.fromDate(new Date())
  return firestore
    .collection("Publication")
    .doc(docId)
    .update({
      likes: isFollowingProfile
        ? firebase.firestore.FieldValue.arrayRemove({ userId, dateCreate })
        : firebase.firestore.FieldValue.arrayUnion({ userId, dateCreate }),
    })
}

export async function getNotFriends(userId) {
  const result = await firestore.collection("users").get()
  const users = result.docs.map((item) => ({
    ...item.data(),
  }))
  const arrayUser = []

  for await (const user of users) {
    const result = await firestore
      .collection("friends")
      .where("userId", "==", userId)
      .where("friend", "==", user.userid)
      .get()

    const isFind = result.docs.map((item) => ({
      ...item.data(),
      docid: item.id,
    }))

    if (isFind.length === 0) {
      if (user.userid !== userId) {
        arrayUser.push(user)
      }
    }
  }

  return arrayUser
}

export async function createRefPlan(userId, userRef) {
  //return await firestore.collection('refplan').doc()
}

//
//    if (isFind.length === 0) {
//
//    }

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
