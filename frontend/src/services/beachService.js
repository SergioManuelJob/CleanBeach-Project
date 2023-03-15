import axios from "axios";


const createBeach = (name, status, description, location, file) => {
  
    var FormData = require('form-data');
    // var fs = require('fs');
    var data = new FormData();
    data.append('name', name);
    data.append('status', status);
    data.append('description', description);
    data.append('location', location);
    data.append('file', file)
      
    var config = {
        method: 'post',
        url: 'http://localhost:27017/api/beaches/create',
        headers: { 
          ...data.getHeaders()
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

const getAllBeaches = () => {
      
    var config = {
        method: 'get',
        url: 'http://localhost:27017/api/beaches/getAll',
        headers: { }
    };
  
    axios(config)
    .then(function (response) {
        return response.data;
    // console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
    console.log(error);
    });
};

const getOneBeach = (id) => {
      
    var config = {
        method: 'get',
        url: 'http://localhost:27017/api/beaches/' + id,
        headers: { }
    };
  
    axios(config)
    .then(function (response) {
        return response.data
    // console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
    console.log(error);
    });
};

const deleteBeach = (id) => {
      
    var config = {
        method: 'delete',
        url: 'http://localhost:27017/api/beaches/' + id,
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
        url: 'http://localhost:27017/api/beaches/' + id,
        headers: { 
          ...data.getHeaders()
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

const beachService = {
    createBeach,
    getAllBeaches,
    getOneBeach,
    deleteBeach,
    updateBeach
};
   
export default beachService;