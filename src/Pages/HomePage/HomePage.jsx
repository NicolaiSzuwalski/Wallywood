
import image from '../../assets/images/wallywood.png'
import styles from './HomePage.module.scss'
import { PosterRandom } from '../../Components/PosterRandom/PosterRandom'

export const HomePage = () => {
    return(
        <>
        <img src={image} alt="curtains" />
        <PosterRandom></PosterRandom>
       </>
    )
}