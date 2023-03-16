import "./Cards.scss";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import {AiFillCaretDown} from 'react-icons/ai';

const Cards = () => {
  let [data, setData] = useState([]);
  let [filter, setFilter] = useState(false)
  const[isActive, setIsActive] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  function handleClick(event) {
    setSelectedValue(event.target.getAttribute('name'));
    setFilter(true)
    
  }
  if(filter){
      data = data.filter(element => element.status === selectedValue)
  }

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get('http://localhost:27017/api/beaches/getAll')
      setData(result.data);
      console.log(result.data)
    }
    getData();
  }, [setData]);

  return (
    <>
        <div className='dropdown'>
                <div className='dropdown-btn' onClick={(e) => setIsActive(!isActive)}>
                    Sort by <AiFillCaretDown style={{ color: 'white' }}/>
                </div>
                {isActive && (
                <div className='dropdown-content'>
                    <div className='dropdown-item' name="EXCELLENT" onClick={handleClick}>Excellent</div>
                    <div className='dropdown-item' name="GOOD" onClick={handleClick}>Good</div>
                    <div className='dropdown-item' name="SUFFICIENT" onClick={handleClick}>Sufficient</div>
                    <div className='dropdown-item' name="POOR" onClick={handleClick}>Poor</div>
                </div>
                )}
        </div>
        
      <div className="container">
        {data &&
          data.map((beach, key) => {
            return (
              <NavLink key={key} to={`/specificbeach/${beach.bid}`}>
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
