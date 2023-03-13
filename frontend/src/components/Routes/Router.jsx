import { Routes, Route } from 'react-router-dom'
import EventsPage from '../Pages/Events/EventsPage'
import SpecificBeach from '../Pages/SpecificBeach/SpecificBeach'
import LandingPage from '../Pages/LandingPage/LandingPage'
import SignInPage from '../Pages/SignIn/SignIn'
import AdminPage from '../Pages/AdminPage/AdminPage'
import UserPage from '../Pages/UserPage/UserPage'
import UpdatePage from '../Pages/UpdatePage/UpdatePage'

const Router = () => {
    return (
        <Routes>
            <Route index element={<LandingPage />} />
            <Route index element={<LandingPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/specificbeach" element={<SpecificBeach />} />
            <Route path="/signup" element={<SignInPage />} />
            <Route path="/profile" element={<UserPage />} />
            <Route path="/update" element={<UpdatePage />} />
            <Route path="/admin" element={<AdminPage />} />
        </Routes>
    )
}

export default Router