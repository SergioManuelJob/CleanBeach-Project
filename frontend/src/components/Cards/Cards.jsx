import "./Cards.scss";
import { NavLink } from "react-router-dom";
import beachService from "../../services/beachService";
import { useEffect, useState } from "react";
// import axios from "axios";

const Cards = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const result = await beachService.getAllBeaches;
    
      setData(result.data);
      console.log(result.data);
    };
    getData();
  }, [setData]);

  return (
    <>
      <div className="container">
        {data &&
          data.map((beach, key) => {
            return (
              <NavLink key={key} to="/specificbeach">
                <figure className="mainFigure">
                  <img src={beach.image} alt="PhotoOfBeach" />
                  <figcaption className="mainFigcap">
                    <hgroup className="hGroups">
                      <h3>
                        {beach.name}, <br /> {beach.address}
                      </h3>
                      <h4>Status: {beach.status}</h4>
                    </hgroup>
                    <p>{beach.description}</p>
                  </figcaption>
                </figure>
              </NavLink>
            );
          })}
      </div>
    </>
  );
};

export default Cards;
