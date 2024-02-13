import { Route, Routes } from "react-router-dom"
import {HomePage} from '../../Pages/HomePage/HomePage';
import { PosterPage } from "../../Pages/PosterPage/PosterPage";
import { NotFoundPage } from "../../Pages/NotFoundPage/NotFoundPage";
import { AboutPage } from "../../Pages/AboutPage/AboutPage";
import { ContactPage } from "../../Pages/ContactPage/ContactPage";
import {LoginPage} from "../../Pages/LoginPage/LoginPage";
import { PosterList } from "../PosterList/PosterList";
import { PosterDetails } from "../PosterDetails/PosterDetails";

export const AppRouter = () => {
    return(
        <Routes>
            <Route index element={<HomePage />}></Route>
            <Route path='/posters' element={<PosterPage />}>
                <Route path=':genreSlug' element={<PosterList />}/>
                <Route path=':genreSlug/:posterSlug' element={<PosterDetails />}/>
            </Route>
            <Route path="/about" element={<AboutPage/>}></Route>
            <Route path="/contact" element={<ContactPage/>}></Route>
            <Route path="/login" element={<LoginPage/>}></Route>
            <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
    )
}