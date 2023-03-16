import Cards from "../../Cards/Cards";
import { FaTrashAlt } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";
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

      <div className="containerIcons">
        <div className="reactIcons">
          <NavLink>
            <BiEdit size={40} />
          </NavLink>
          <NavLink>
            <FaTrashAlt size={35} />
          </NavLink>
        </div>
        <Cards />

      </div>
    </>
  );
};

export default AdminPage;
