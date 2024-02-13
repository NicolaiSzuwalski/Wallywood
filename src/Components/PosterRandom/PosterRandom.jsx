import axios from 'axios'
import { useState, useEffect } from 'react'
import {ContentWrapper} from '../ContentWrapper/ContentWrapper'
import styles from './PosterRandom.module.scss'





export const PosterRandom = () => {
    const [data, setData] = useState([])

    const getData = async() => {
        const url=`http://localhost:3000/posters?sort_key=random&limit=2&attributes=id,name,description,image`
        const result = await axios.get(url)
        setData(result.data)
        console.log(result)
    }

    useEffect(() => {
        getData()
    },[setData])
  return (
    <ContentWrapper title='Udvalgte plakater'>
        {data && data.map(data =>{
            return(
                <div key={data.id}>
                    
                    <div className={styles.randomContainer}>
                    <img src={data.image} alt={data.name} />
                    <h3>{data.name}</h3>
                    {data.description}
                   
                    </div>
                </div>
                
            )
        })}
    </ContentWrapper>
  )
}
