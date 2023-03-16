import { useEffect, useState } from "react";
import axios from "axios"
import './EventCards.scss';

const EventCards = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const getData = async () => {
        const result = await axios.get('http://localhost:27017/api/events/getAll')
        setData(result.data);
        for(let i = 0; i< result.data.length; i++){
            const text = JSON.stringify(result.data[0].date).slice(1,11)
            result.data[i].date = text
        } 
      }
      getData();
    }, [setData]);

    return (
        <>
        <div className="container">
            {data &&
            data.map((event, key) => {
                return (
                <section className="sectionContainer" key={key}>
                <span>
                    <p>{event.name}</p>
                    <p>{event.date}</p>
                </span>
                <p>
                    {event.description}
                </p>
                </section>
                );
            })}
        </div>
        </>
    );
};


export default EventCards;