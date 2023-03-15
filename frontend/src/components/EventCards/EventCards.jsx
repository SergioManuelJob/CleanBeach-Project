import { useEffect, useState } from "react";
import eventService from "../../services/eventService";
import axios from "axios";

const EventCards = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const getData = async () => {
        await eventService.getAllEvents().then(data => {
            const result = data
            setData(result.data);
            console.log(result.data)
        })
      }
      getData();
    }, [setData]);

    return (
        <>
        <div className="container">
            {data &&
            data.map((event, key) => {
                return (
                <section>
                <span>
                    {/* <p>event.name {address(event.beachId)}</p> */}
                    <p>event.date</p>
                </span>
                <p>
                    event.description
                </p>
                </section>
                );
            })}
        </div>
        </>
    );
};


export default EventCards;