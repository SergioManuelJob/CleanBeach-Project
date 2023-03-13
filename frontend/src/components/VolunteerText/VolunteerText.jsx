import './VolunteerText.scss';

const AboutUs = () => {
  return (
    <>
      <div className="AboutUs">
        <article>
          <h2>ABOUT US</h2>
        <p>
          We are a group of students from Gran Canaria, Denmark & Iceland who
          want to make a difference here in Gran Canaria. <br />
          We want to keep the beaches clean, and we will do that through this
          app, but also by putting up signs etc.
        </p>  
        </article>
      </div>
    </>
  );
};

const VolunteerText = () => {
  return (
    <>
      <div className="Volunteer">
        <article>
          <h2>MAKE A DIFFERENCE</h2>
        <p>
          Sign up today and become a volunteer to help clean the beaches and
          help our beautiful planet!
        </p>
        <button>VOLUNTEER NOW</button>  
        </article>
        
      </div>
    </>
  );
};

export { AboutUs, VolunteerText };
