import axios from "axios";
url = env("URL_EVENT")

const createEvent = (beachId, name, organizerId, description) => {
  
    var data = JSON.stringify({
        "beachId": beachId,
        "name": name,
        "organizerId": organizerId,
        "description": description
    });
      
    var config = {
        method: 'post',
        url: url +'create',
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
        headers: { }
    };
  
    return axios(config)
};

const getOneEvent = (id) => {
      
    var config = {
        method: 'get',
        url: url + id,
        headers: { }
    };
  
    return axios(config)
};

const deleteEvent = (id) => {
      
    var config = {
        method: 'delete',
        url: url + id,
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