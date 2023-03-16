import axios from "axios";
const url = "http://backend-cleanbeach-production.up.railway.app/api/beaches/"


const createBeach = (name, status, description, location, file) => {
  
    var FormData = require('form-data');
    var data = new FormData();
    data.append('name', name);
    data.append('status', status);
    data.append('description', description);
    data.append('location', location);
    data.append('file', file)
      
    var config = {
        method: 'post',
        url: url +'create',
        headers: { 
          ...data.getHeaders()
        },
        data : data
    };
  
    return axios(config)
};

const getAllBeaches = () => {
      
    var config = {
        method: 'get',
        url: url +'getAll',
        headers : { }
    };
  
    return axios(config)
};

const getOneBeach = (id) => {
      
    var config = {
        method: 'get',
        url: url + id,
        headers: { }
    };
  
    return axios(config)
    
};

const deleteBeach = (id) => {
      
    var config = {
        method: 'delete',
        url: url + id,
        headers: { }
      };
  
    return axios(config)
};

const updateBeach = (name, status, description, location, file, id) => {
  
    var FormData = require('form-data');
    var data = new FormData();
    data.append('name', name);
    data.append('status', status);
    data.append('description', description);
    data.append('location', location);
    data.append('file', file)
      
    var config = {
        method: 'post',
        url: url + id,
        headers: { 
          ...data.getHeaders()
        },
        data : data
    };
  
    return axios(config)
};

const beachService = {
    createBeach,
    getAllBeaches,
    getOneBeach,
    deleteBeach,
    updateBeach
};
   
export default beachService;