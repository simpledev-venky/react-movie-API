import React,{useState,useEffect, useContext} from 'react'

const useFetch = (qry)=>{

    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState({ status: false, msg: "" });
    const [movieData, setMovieData] = useState([]);
  
    const URL = `http://www.omdbapi.com/?apikey=9e9fc5b4&`;


   
    const fetchMovies = async () => {
      setLoading(true);
      setIsError({ status: false, msg: "" });
      try {
        const response = await fetch(`${URL}${qry}`);
        const data = await response.json();
        console.log(data);
        setMovieData(data.Search || data);
        setLoading(false);
        setIsError({ status: false, msg: "" });
      } catch (error) {
        console.log(error || "something went wrong");
        setLoading(false);
        setIsError({
          status: true,
          msg: error.message || "something went wrong",
        });
      }
    };

    useEffect(() => {

      const timeOut = setTimeout(()=>{
        fetchMovies(`${URL}${qry}`);
      },600)
        
        return ()=> clearTimeout(timeOut) 
    }, [qry]);

   


    return {loading,isError,movieData}
}
export default useFetch