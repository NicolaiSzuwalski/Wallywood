import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { ContentWrapper } from "../ContentWrapper/ContentWrapper"




export const PosterList = () => {
  const [posterData, setPosterData] = useState([])
  const { genreSlug } = useParams()

  const getData = async () => {
    const url = `http://localhost:3000/posters/list_by_genre/${genreSlug}`
    const result = await axios.get(url)
    console.log(result.data);
    setPosterData(result.data)
  }
  useEffect(() => {
    getData();
  }, [genreSlug])


  return (
    <ContentWrapper title={`Plakater - ${genreSlug}`}>
      {posterData && posterData.map(poster => {
        return(
          <div key={poster.id}>{poster.name}</div>
          
        )
      })}
    </ContentWrapper>
  )
}