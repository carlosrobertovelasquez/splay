import React,{useState,useEffect,useContext,createContext} from 'react'
import Router from 'next/router'
import firebase from './firebase'
import {createUser} from './db'

const authContext=createContext()


export function AuthProvider({children}){
    const auth =useProvideAuth()
    return <authContext.Provider value={auth}>{children}</authContext.Provider>
}
export const useAuth=()=>{
    return useContext(authContext)
}


function useProvideAuth(){
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    const handleUser = async (rawUser)=>{
        //console.log('handleUser called',new Date(),rawUser);
        if (rawUser){
            const user = await formatUser(rawUser);
            const {token, ...userWithoutToken}=user;
       //     createUser(user.uid,userWithoutToken);
            setUser(user);
            setLoading(false);
            return user;
        }else{
            setUser(false);
            setLoading(false);
            return false;
        }
    };
    
   const createAccount = (email,password)=>{
       return firebase.auth().createUserWithEmailAndPassword(email,password).then((response)=>{
           handleUser(response.user);
           if(redirect){
               Router.push(redirect);
           }
       });
   };

    const signinWithEmail = (email,password,redirect)=>{
        setLoading(true);
        return firebase.auth().signInWithEmailAndPassword(email,password).then((response)=>{
            handleUser(response.user);
            if(redirect){
                Router.push(redirect);
            }
        });
        
    };
    const signinWithTwitter = (redirect) => {
        setLoading(true);
        return firebase
          .auth()
          .signInWithPopup(new firebase.auth.TwitterAuthProvider())
          .then((response) => {
            handleUser(response.user);
    
            if (redirect) {
              Router.push(redirect);
            }
          });
      };
    
      const signinWithGoogle = (redirect) => {
        setLoading(true);
        return firebase
          .auth()
          .signInWithPopup(new firebase.auth.GoogleAuthProvider())
          .then((response) => {
            handleUser(response.user);
    
            if (redirect) {
              Router.push(redirect);
            }
          });
      };
 
      const sendPasswordResetEmail=(email)=>{
        setLoading(true);
        return firebase.auth().sendPasswordResetEmail(email).then(()=>{
            return true;
        })
      }
    const signout = ()=>{
        return firebase.auth().signOut().then(()=>handleUser(false));
    };
    useEffect(() => {
        const unsubscribe=firebase.auth().onIdTokenChanged(handleUser);
        return ()=>unsubscribe()
    }, [])

    const getFreshToken=async ()=>{
        console.log('getFreshToken called',new Date());
        const currentUser = firebase.auth().currentUser;
        if (currentUser){
            const token=await currentUser.getIdToken(false);
            return `${token}`;
        }else{
            return '';
        }
    };

    return {
        user,
        loading,
        createContext,
        signinWithEmail,
        sendPasswordResetEmail,
        signinWithGoogle,
        signinWithTwitter,
        signout,
        getFreshToken,
    }
}

const formatUser =async (user)=>{
    const decodedToken=await user.getIdTokenResult(/*forceRefresh*/ true);
    const {token,expirationTime}=decodedToken;
  //  console.log(token);
    return {
        uid:user.uid,
        email:user.email,
        name:user.displayName,
        provider: user.providerData[0].providerId,
       // photoUrl:user.photoUrl,
        token,
        expirationTime,
    };
}