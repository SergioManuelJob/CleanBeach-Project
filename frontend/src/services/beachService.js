import axios from "axios";
url = env("URL_BEACH")


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
  
    axios(config)
    .then(function (response) {
        return response.data;
    })
    .catch(function (error) {
    console.log(error);
    });
};

const getAllBeaches = () => {
      
    var config = {
        method: 'get',
        url: url +'getAll',
        headers: { }
    };
  
    axios(config)
    .then(function (response) {
        return response.data;;
    })
    .catch(function (error) {
    console.log(error);
    });
};

const getOneBeach = (id) => {
      
    var config = {
        method: 'get',
        url: url + id,
        headers: { }
    };
  
    axios(config)
    .then(function (response) {
        return response.data
    })
    .catch(function (error) {
    console.log(error);
    });
};

const deleteBeach = (id) => {
      
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
  
    axios(config)
    .then(function (response) {
    return (response.data);
    })
    .catch(function (error) {
    console.log(error);
    });
};

const beachService = {
    createBeach,
    getAllBeaches,
    getOneBeach,
    deleteBeach,
    updateBeach
};
   
export default beachService;