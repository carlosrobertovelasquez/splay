
import React, { useEffect, useState, useRef, useCallback } from "react"
import { listenLatesPublications } from "../../../../lib/db"
import Body from "./Body"
// ya casi lo tengo, todo lo puedo en Cristo que me fortalece, Bendito sea el nombre del SEÑOR
import useFetch from "./hooks/useFetch";
export default function index({ userId, following, createObserver }) {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const { loading, error, list, posts } = useFetch(query, page);
  const loader = useRef(null);


  const [dataPublication, setDataPublication] = useState(undefined)
  //const [posts, setPosts] = useState([]);
  const limite = useRef(null);
  
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  /**
   * const handleObserver = useCallback((entries) => {
   * 
   * }, []);
   */
  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage((prev) => prev + 1);
      //console.log("Scrolling mouse");
      //alert(page);
      //alert();
    }
    //console.log(page);
  }, []);
  
  useEffect(() => {
    
    let unsubscribe;
    const option = {
      root: null,
      rootMargin: "5px",
      threshold: 1
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
    /*
    if (userId) {
      
      unsubscribe = listenLatesPublications((newPublications) => {
        setDataPublication(newPublications)
        console.log(newPublications);
        // solo toma los primeros diez
        let firstsPosts = [];
        for(let a = 0; a < 10; a++)
        {
          firstsPosts.push(newPublications[a]);
        }
        
        setPosts(firstsPosts);
      })
      
      

      //createObserver(limite.current);
      
      
        
      
      return () => unsubscribe && unsubscribe()
    }
    */
   
  }, [handleObserver, userId]);
  //}, [userId])

  //if (dataPublication === undefined) return null
  
  const userExits = (arry) => {
    const resul = arry.includes(userId)
    if (!resul) {
      following.push(userId)
    }
    return following
  }

  userExits(following)

  const datos = []
  /*
  dataPublication.forEach(function (task) {
    for (let index = 0; index < following.length; index++) {
      // para que solo muestre las publicaciones del usuario entonces filtra
      ///if (following[index] === task.idUser) {
        //
        
      //}
    }
    datos.push(task)
  })
  */
 
  return (
    <React.Fragment>
      
      
      {
        
        posts.map((publi) => (
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
        )).reverse()
        
      }
      
      {loading && <p>Loading...</p>}
      {error && <p>Error!</p>}
      <div ref={loader} />
    </React.Fragment>
  );
}