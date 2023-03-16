import "../../Pages/CreateEvent/CreateEvent.scss";
import Fun from "../../../images/IMG_9529.jpg";

import { useState, useEffect } from "react";
import axios from "axios";

const collectISOString = (date) => date.toISOString().substring(0, 10);

const today = collectISOString(new Date());
const CreateEvent = () => {
  const [user, setUser] = useState(undefined);
  const [beaches, setBeaches] = useState([]);
  const [beachesFetchError, setBeachesFetchError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const initialValues = { name: "", beachId: -1, date: today, description: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [submitError, setSubmitError] = useState({});

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Provide a name for the event!";
    }

    if (!values.beachId || parseInt(values.beachId) === -1) {
      errors.beachId = "Please select a beach!";
    }

    if (!values.date || collectISOString(values.date) < today) {
      errors.date = "Please provide today's date or a future date!";
    }

    if (!values.description) {
      errors.description = "Please provide a description for the event!";
    }

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    if (Object.keys(formErrors) !== 0) return;

    console.log(formValues);
  };

  useEffect(() => {
    setUser(localStorage.getItem("user"));

    const getBeaches = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(
          "backend-cleanbeach-production.up.railway.app/api/beaches/getAll"
        );
        const failure = res.data.code || res.status !== 200;
        setBeachesFetchError(failure);
        setBeaches(failure ? {} : res.data);
      } catch (err) {
        setBeachesFetchError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getBeaches();
  }, [setUser, setBeaches, setBeachesFetchError, setIsLoading]);

  return (
    <div className="image-container">
      <img className="fun" src={Fun} alt="MyImage" />

      <div className="text-container">
        <h1 className="h1">Create new event</h1>
        { !user
        ? <div style={{color: 'red', fontSize: '20px'}} className='ui message failure'>
                  To create a new event, you need to be logged in!
                </div>
        : <>
            <div className="title-li">
            <label htmlFor="name">Name</label>
            <input name="name" type="text" placeholder="Name of event" />
            </div>

            <div className="starts-">
              <div className="startswrap">
                <label htmlFor="beachId">Beach</label>
                { isLoading 
                ? <div style={{color: 'blue', fontSize: '20px'}} className='ui message'>
                    Loading...
                  </div>
                :   beachesFetchError
                    ? <div style={{color: 'red', fontSize: '20px'}} className='ui message failure'>
                        Something went wrong while fetching the beaches!
                      </div>
                    : <select className="starts" htmlFor="beachId" defaultValue="-1">
                          <option value="-1" key="-1">Select a beach...</option>
                          { beaches && 
                          beaches.map((beach, index) => (
                              <option value={beach.bid} key={index}>{beach.name}</option>
                          )) 
                        }
                    </select>
              }
              </div>
            </div>

            <div className="starts-">
              <div className="startswrap">
                <label className="starts" htmlFor="date">
                  Date
                </label>
                <input name="date" type="date" />
              </div>
            </div>

            <div className="category-li">
              <label htmlFor="description">Description</label>
              <input name="description" type="text" />
            </div>

            <button className="button" onClick={handleSubmit}>Create Event</button>
    </> 
    }
      </div>
    </div>
  );
};
export default CreateEvent;
