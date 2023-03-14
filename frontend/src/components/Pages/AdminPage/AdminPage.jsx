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
          <FaTrashAlt />
        </NavLink>
        <NavLink>
          <BiEditAlt />
        </NavLink>
        <Cards />
      </div>
    </>
  );
};

export default AdminPage;
