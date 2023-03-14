import { Routes, Route } from 'react-router-dom'
import EventsPage from '../Pages/Events/EventsPage'
import LandingPage from '../Pages/LandingPage/LandingPage'
import SignInPage from '../Pages/SignIn/SignIn'
import Register from '../Register/Register'
import UserPage from '../Pages/UserPage/UserPage'

const Router = () => {
    return (
        <Routes>
            <Route index element={<LandingPage />} />
            <Route index element={<LandingPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/signup" element={<SignInPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<UserPage />} />
        </Routes>
    )
}

export default Router