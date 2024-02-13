import { GenreList } from '../../Components/GenreList/GenreList'
import { Outlet } from 'react-router-dom'
import { ContentWrapper } from "../../Components/ContentWrapper/ContentWrapper.jsx"


export const PosterPage = () => {
    return (

        <ContentWrapper title='Posters'>
            <GenreList />
            <Outlet />
        </ContentWrapper>
    )
}