import {compareDesc,compareAsc,parseISO} from 'date-fns'
import axios from 'axios';
import firebase from './firebase';
const firestore = firebase.firestore();

export async function createUser(uid,data){
    return await firestore.collection('users').doc(uid).set({uid,...data},{merge:true});
}

export async function doesUsernameExist(email){
    const result = await firestore.collection('users').where('email','==',email).get();
    //console.log('result.doc',result.docs)
    return result.docs.map((user)=>user.data().length>0);
}


export async function createSite(data){
    const site =firestore.collection('ghost_sites').doc();//return DocRef
    await site.set(data); //return Promise<void>, so we need to await
    return site;
}

export async function updateSite(siteId,data){
    const site=firestore.collection('ghost_sites').doc(siteId);
    await site.set(data,{merge:true});//return Promise<Void>, so we need to await
    return site;
}
export  async function deleteSite(sideId,token){
    const resp =await axios.delete(`api/auth/site/${siteId}`,{
        headers:{Authorization:`Bearer ${tokem}`},
    });
    return resp;
}
export async function getSite(siteId){
    const doc =await firebase.collection('ghost_sites').doc(siteOd).get();
    const site ={id:doc.id, ...doc.data()};
    return site;
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