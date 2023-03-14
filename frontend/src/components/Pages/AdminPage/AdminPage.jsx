import Cards from "../../Cards/Cards";
import { FaTrashAlt } from 'react-icons/fa'
import { BiEditAlt } from 'react-icons/bi'
import { NavLink } from "react-router-dom";

const AdminPage = () => {
    return(
        <>
        <div>
            Admin page
        </div>
        <div>
        <NavLink><FaTrashAlt /></NavLink>
        <NavLink><BiEditAlt /></NavLink>
        <Cards />
        </div>
        </>
    )
}

export default AdminPage;