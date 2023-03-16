import axios from "axios";
const url = "https://backend-cleanbeach-production.up.railway.app/api/participantsLists/"

const createParticipantsList = (userId, eventId) => {
  
    var data = JSON.stringify({
        "userId": userId,
        "eventId": eventId
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

const getAllParticipantsList = () => {
      
    var config = {
        method: 'get',
        url: url +'getAll',
        headers: { }
    };
  
    return axios(config)
};

const getOneParticipantsList = (id) => {
      
    var config = {
        method: 'get',
        url: url + id,
        headers: { }
    };
  
    return axios(config)
};

const deleteParticipantsList = (id) => {
      
    var config = {
        method: 'delete',
        url: url + id,
        headers: { }
    };
  
    return axios(config)
};

const participantsListService = {
    createParticipantsList,
    getAllParticipantsList,
    getOneParticipantsList,
    deleteParticipantsList
};
   
 export default participantsListService;