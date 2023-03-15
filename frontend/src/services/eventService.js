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
  
    axios(config)
    .then(function (response) {
        return (response.data);
    })
    .catch(function (error) {
    console.log(error);
    });
};

const getAllEvents = () => {
      
    var config = {
        method: 'get',
        url: url +'getAll',
        headers: { }
    };
  
    axios(config)
    .then(function (response) {
        return (response.data);
    })
    .catch(function (error) {
    console.log(error);
    });
};

const getOneEvent = (id) => {
      
    var config = {
        method: 'get',
        url: url + id,
        headers: { }
    };
  
    axios(config)
    .then(function (response) {
         return (response.data);
    })
    .catch(function (error) {
    console.log(error);
    });
};

const deleteEvent = (id) => {
      
    var config = {
        method: 'delete',
        url: url + id,
        headers: { }
    };
  
    axios(config)
    .then(function (response) {
        return (response.data);
    })
    .catch(function (error) {
    console.log(error);
    });
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
  
    axios(config)
    .then(function (response) {
        return(response.data);
    })
    .catch(function (error) {
    console.log(error);
    });
};

const eventService = {
    createEvent,
    getAllEvents,
    getOneEvent,
    deleteEvent,
    updateEvent
};
   
export default eventService;