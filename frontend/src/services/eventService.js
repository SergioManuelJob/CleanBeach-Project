import axios from "axios";

const createEvent = (beachId, name, organizerId, description) => {
  
    var data = JSON.stringify({
        "beachId": beachId,
        "name": name,
        "organizerId": organizerId,
        "description": description
    });
      
    var config = {
        method: 'post',
        url: 'http://localhost:27017/api/events/create',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
    };
  
    axios(config)
    .then(function (response) {
    console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
    console.log(error);
    });
};

const getAllEvents = () => {
      
    var config = {
        method: 'get',
        url: 'http://localhost:27017/api/events/getAll',
        headers: { }
    };
  
    axios(config)
    .then(function (response) {
    console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
    console.log(error);
    });
};

const getOneEvent = (id) => {
      
    var config = {
        method: 'get',
        url: 'http://localhost:27017/api/events/' + id,
        headers: { }
    };
  
    axios(config)
    .then(function (response) {
    console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
    console.log(error);
    });
};

const deleteEvent = (id) => {
      
    var config = {
        method: 'delete',
        url: 'http://localhost:27017/api/events/' + id,
        headers: { }
    };
  
    axios(config)
    .then(function (response) {
    console.log(JSON.stringify(response.data));
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
        url: 'http://localhost:27017/api/events/' + id,
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
    };
  
    axios(config)
    .then(function (response) {
    console.log(JSON.stringify(response.data));
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