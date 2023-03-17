import React, { useState ,useEffect} from "react";
import useFetch from "./useFetch";


  const  movieContext = React.createContext()

   const  MovieContextProvider = ({children})=>{
    const [query, setQuery] = useState("man");
       
    const {loading,isError,movieData} = useFetch(`s=${query}`)

   

    return(
  <movieContext.Provider value={{loading,isError,movieData,query, setQuery}}> 
 
    {children}
  </movieContext.Provider>
  )
  }


  export {movieContext,MovieContextProvider}
