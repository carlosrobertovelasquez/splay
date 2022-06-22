import { useState, useEffect, useCallback } from "react";
import { listenLatesPublications } from "../../../../../lib/db"

import axios from "axios";
import { Result } from "postcss";

function useFetch(query, page, pagina) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [list, setList] = useState([]);
    const [posts, setPosts] = useState([]);
    const [allposts, setAllposts] = useState([]);
    const [to, setTo] = useState(10);
    

    const sendQuery = useCallback(async () => {
        try {
            await setLoading(true);
            await setError(false);
            /*
            const res = await axios.get(
                `https://openlibrary.org/search.json?q=${query}&page=${page}`
                );*/
                /*
                await setList((prev) => [
                    ...new Set([...prev, ...res.data.docs.map((d) => d.title)])
                ]);*/
                let result = [];
                if ((allposts.length > 1))
                {
                    let lim = null;
                    if (page > 1)
                    {
                        if ((page * 5) > (allposts.length))
                        {
                            lim = allposts.length;
                            console.log("no hay mas");
                        }
                        else
                        {
                            lim = (page * 5);
                            
                        }

                        
                        let from1 = ((page * 5) - 5);
                        console.log('valor from: ' + from1);
                        
                        for(let i = from1; i < lim; i++)
                        {
                            result.push(allposts[i]);
                            //result.push(newPublications[a]);    
                        }
                        
                        
                        console.log('tamano: ' + result.length);
                        setPosts((prev) => [...result, ...prev]);
                    }
                    
                }
                
                setLoading(false);
                
            }
            catch (err) {
                setError(err);
            }
        }, [query, page]);
        useEffect(()=>{
            listenLatesPublications((newPublications) => {
                setAllposts(newPublications);
                let firstsPosts = [];
                for(let a = 0; a < 10; a++)
                {
                    firstsPosts.push(newPublications[a]);
                }
                setPosts(firstsPosts);
            });
        },[]);
        useEffect(() => {
            sendQuery(query);
            
    }, [query, sendQuery, page]);

    return { loading, error, list, posts };
}

export default useFetch;