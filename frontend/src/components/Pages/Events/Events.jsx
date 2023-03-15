import "./Events.scss";
import beachfun from "../../../images/IMG_6610.jpg";
import { NavLink } from "react-router-dom";
import EventCards from "../../EventCards/EventCards";

const EventsPage = () => {
  return (
    <>
      <img className="beachfun" src={beachfun} alt="peopleonbeach" />

      <article className="articleOne">
        <h2>Upcoming Events</h2>
        <p>
          The events that are being held by us or the volunteers on this app, is
          to spread awareness about the environment as it’s pretty common that
          people throw trash around on the beach and doesn’t clean up after
          themselves. The purpose of these events is to help the planet, but
          we’re also trying to make it fun at the same time.
        </p>
      </article>
      <div className="eventBtn">
        <NavLink to="/createevent">
          <button>Create Event</button>
        </NavLink>
      </div>

<<<<<<< HEAD
      <section className="eventSection">
        <span>
          <p>name and location</p>
          <p>time and date</p>
        </span>
        <p>
          We’re gonna meet up at Las canteras in Las Palmas at 16:00 to start
          cleaning the beach from trash. There will be free drinks and snacks at
          the end of the day for those who are going to participate.{" "}
        </p>
      </section>


      <section className="eventSection">
        <span>
          <p>name and location</p>
          <p>time and date</p>
        </span>
        <p>
          We’re gonna meet up at Las canteras in Las Palmas at 16:00 to start
          cleaning the beach from trash. There will be free drinks and snacks at
          the end of the day for those who are going to participate.{" "}
        </p>
      </section>


      <section className="eventSection">
        <span>
          <p>name and location</p>
          <p>time and date</p>
        </span>
        <p>
          We’re gonna meet up at Las canteras in Las Palmas at 16:00 to start
          cleaning the beach from trash. There will be free drinks and snacks at
          the end of the day for those who are going to participate.{" "}
        </p>
      </section>
=======
      <EventCards></EventCards>
      
>>>>>>> 43062ec52c090648dca4954893bb371b71f1f83a
    </>
  );
};

export default EventsPage;
