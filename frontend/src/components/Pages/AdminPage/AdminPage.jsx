import Cards from "../../Cards/Cards";
import { FaTrashAlt } from "react-icons/fa";
import { BiEditAlt } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import "./AdminPage.scss";

const AdminPage = () => {
  return (
    <>
      <div className="buttons">
        <button>EVENTS</button>
        <button>BEACHES</button>
        <button>USERS</button>
      </div>
      <div className="NewBtn">
        <button>NEW</button>
      </div>
      <div>
        <NavLink>
          <FaTrashAlt size={25} />
        </NavLink>
        <NavLink>
          <BiEditAlt size={25} />
        </NavLink>
        <Cards />
      </div>
    </>
  );
};

export default AdminPage;
