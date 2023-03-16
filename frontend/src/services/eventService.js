import axios from "axios";
const url = "http://backend-cleanbeach-production.up.railway.app/api/events/"
const createEvent = (name, beachId, organizerId, date, description) => {
  
    var data = JSON.stringify({
        "beachId": beachId,
        "name": name,
        "organizerId": organizerId,
        "date":date,
        "description": description
    });
      
    var config = {
        method: 'post',
        url: url +'create',
        withCredentials: false,
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
    };
  
    return axios(config)
};

const getAllEvents = () => {
      
    var config = {
        method: 'get',
        url: url +'getAll',
        withCredentials: false,
        headers: { }
    };
  
    return axios(config)
};

const getOneEvent = (id) => {
      
    var config = {
        method: 'get',
        url: url + id,
        withCredentials: false,
        headers: { }
    };
  
    return axios(config)
};

const deleteEvent = (id) => {
      
    var config = {
        method: 'delete',
        url: url + id,
        withCredentials: false,
        headers: { }
    };
  
    return axios(config)
};

const updateEvent = (beachId, name, organizerId, description, id, date) => {
  
    var data = JSON.stringify({
        "beachId": beachId,
        "name": name,
        "organizerId": organizerId,
        "description": description,
        "date": date
    });
      
    var config = {
        method: 'put',
        url: url + id,
        withCredentials: false,
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
    };
  
    return axios(config)
};

const eventService = {
    createEvent,
    getAllEvents,
    getOneEvent,
    deleteEvent,
    updateEvent
};
   
export default eventService;