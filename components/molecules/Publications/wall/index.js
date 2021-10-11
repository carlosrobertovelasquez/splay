import React, { useEffect, useState } from "react"
import { listenLatesPublications } from "../../../../lib/db"

import Body from "./Body"
export default function index({ userId, following }) {
  const [dataPublication, setDataPublication] = useState(undefined)
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1); 

  useEffect(() => {
    let unsubscribe
    if (userId) {
      //const notInclude = ['1pBRHrysz5IdDZJ4rgSK','406kjj4kAw0t7MdVmcZm','5JJ3FNUy8ugAYH2ImEv0','5UDVF5DTA0LBpiYVveJk'];
      /*unsubscribe = listenLatesPublications((newPiblications) => {
        setDataPublication(newPiblications)
      })*/
      unsubscribe = listenLatesPublications((newPublications) => {
        setDataPublication(newPublications)
        console.log(newPublications);
        // solo toma los primeros diez
        let firstsPosts = [];
        for(let a = 0; a < 10; a++)
        {
          firstsPosts.push(newPublications[a]);
        }
        //console.log(firstsPosts);
        setPosts(firstsPosts);
      })
      
      return () => unsubscribe && unsubscribe()
    }
  }, [userId])

  if (dataPublication === undefined) return null
  
  const userExits = (arry) => {
    const resul = arry.includes(userId)
    if (!resul) {
      following.push(userId)
    }
    return following
  }

  userExits(following)

  const datos = []
  dataPublication.forEach(function (task) {
    for (let index = 0; index < following.length; index++) {
      // para que solo muestre las publicaciones del usuario entonces filtra
      ///if (following[index] === task.idUser) {
        //
        
      //}
    }
    datos.push(task)
  })
  const mas = () => {
    setPage(()=> page + 1);
  }
  const more = useCallback => (()=> {
    let lastPostShowed = (page + 1) * 10;
    setPage((prev)=> prev + 1);
    const lastPostToShow = (lastPostShowed <= posts.length) ? ((page * 10) - 1): (posts.length - 1);
    console.log(lastPostToShow);
    console.log("aqui dentro");
  }, [page])
  return (
    <React.Fragment>
      {
        
      posts
        .map((publi) => (
          <Body
            key={publi.id}
            comments={publi.comments}
            dateCreate={publi.dateCreate}
            file={publi.file}
            idUser={publi.idUser}
            typeFile={publi.typeFile}
            id={publi.id}
            likes={publi.likes}
          />
        ))
        .reverse()}
        

        {
        /*datos
        .sort((a, b) => a.dateCreate - b.dateCreate)
        .map((publi) => (
          <Body
            key={publi.id}
            comments={publi.comments}
            dateCreate={publi.dateCreate}
            file={publi.file}
            idUser={publi.idUser}
            typeFile={publi.typeFile}
            id={publi.id}
            likes={publi.likes}
          />
        ))
        .reverse()*/
        }
      <button style={{ marginBottom: '100px' }} onClick={mas}>
        more images
      </button>
    
    </React.Fragment>
  )
}

function useFetch(query, page) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);
  const [list2, setList2] = useState([]);

  const sendQuery = useCallback(async () => {
    try {
      await setLoading(true);
      await setError(false);
      
      const res = await axios.get(
        `https://openlibrary.org/search.json?q=${query}&page=${page}`
        );
        
        await setList((prev) => [
          ...new Set([...prev, ...res.data.docs.map((d) => d.title)])
        ]);
        
        /*
        llena de otros 10 elementos la lista
        */
       
       console.log(`vamos por: ${page}`);
      let inicioCount = (page - 1) * 10;
      let finCount = ((page - 1) * 10) + 10;
      let res2 = null;
      for(let i = inicioCount; i < finCount; i++)
      {
        res2.push(i);
      }
      await setList2((prev) => [
        ...new Set([...prev, ...res2.map((r) => r)])
      ]);
      setLoading(false);
    } catch (err) {
      setError(err);
    }
  }, [query, page]);

  useEffect(() => {
    sendQuery(query);
  }, [query, sendQuery, page]);

  return { loading, error, list };
}