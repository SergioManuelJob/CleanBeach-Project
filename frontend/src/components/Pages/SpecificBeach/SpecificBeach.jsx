import { useParams } from "react-router-dom";
import { VolunteerText } from "../../VolunteerText/VolunteerText";
import "./SpecificBeach.scss";
import { useState, useEffect } from "react";
import axios from "axios";

const SpecificBeach = () => {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(
        `http://localhost:27017/api/beaches/${id}`
      );
      setData(result.data);
      console.log(result);
    };
    getData();
  }, [id]);

  return (
    <section className="beachSectionOne">
      {data &&
           (
            <>
              <div className="specificbeachText">
                <img className="beachIMG" src={data.image} alt="Beach" />
                <div className="centered">
                  <h2>{data.name}</h2>
                </div>
              </div>
              <hgroup className="info">
                <h3>{data.name}</h3>
                <h4>Status: {data.status}</h4>
              </hgroup>
              <span className="spanP">
                <p>{data.description}</p>
              </span>
              <div className="googlemaps">
                  <iframe
                    title="map"
                    width="310"
                    height="418"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?width=310&amp;height=418&amp;hl=en&amp;q=Las%20Canteras%20Las%20Palmas%20de%20Gran%20Canaria+(Las%20Canteras%20Beach)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  ></iframe>
              </div>
              <div className="reviews">
                <h4>Reviews</h4>
                <p>Reviews from other people</p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill="#7FD4D1"
                  fillOpacity="1"
                  d="M0,128L48,149.3C96,171,192,213,288,192C384,171,480,85,576,58.7C672,32,768,64,864,112C960,160,1056,224,1152,234.7C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
              </svg>
              <VolunteerText />
            </>
          )
        }
    </section>
  );
};

export default SpecificBeach;
