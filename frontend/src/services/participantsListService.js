import axios from "axios";

const createParticipantsList = (userId, eventId) => {
  
    var data = JSON.stringify({
        "userId": userId,
        "eventId": eventId
    });
      
  
    
    var config = {
        method: 'post',
        url: 'http://localhost:27017/api/participantsLists/create',
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

const getAllParticipantsList = () => {
      
    var config = {
        method: 'get',
        url: 'http://localhost:27017/api/participantsLists/getAll',
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

const getOneParticipantsList = (id) => {
      
    var config = {
        method: 'get',
        url: 'http://localhost:27017/api/participantsLists/' + id,
        headers: { }
    };
  
    axios(config)
    .then(function (response) {
        return(response.data);
    })
    .catch(function (error) {
    console.log(error);
    });
};

const deleteParticipantsList = (id) => {
      
    var config = {
        method: 'delete',
        url: 'http://localhost:27017/api/participantsLists/' + id,
        headers: { }
    };
  
    axios(config)
    .then(function (response) {
        return(response.data);
    })
    .catch(function (error) {
    console.log(error);
    });
};

const participantsListService = {
    createParticipantsList,
    getAllParticipantsList,
    getOneParticipantsList,
    deleteParticipantsList
};
   
 export default participantsListService;