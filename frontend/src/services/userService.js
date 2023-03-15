import axios from "axios";

const logIn = (email, password) => {
  
    var data = JSON.stringify({
        "email": email,
        "password": password
    });
  
    var config = {
        method: 'post',
        url: 'http://localhost:27017/api/users/login',
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

const register = (name, email, password) => {
  
    var data = JSON.stringify({
        "name": name,
        "email": email,
        "password": password
      });
  
    
    var config = {
        method: 'post',
        url: 'http://localhost:27017/api/users/signin',
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

const getAllUsers = () => {
   
    var config = {
        method: 'get',
        url: 'http://localhost:27017/api/users/getAll',
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

const getOneUser = (id) => {
   
    var config = {
        method: 'get',
        url: 'http://localhost:27017/api/users/getAll' + id,
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

const deleteUser = (id, token) => {
   
    var config = {
        method: 'delete',
        url: 'http://localhost:27017/api/users/' + id,
        headers: { 
          'Authorization': 'Bearer ' + token
        }
      };
  
    axios(config)
    .then(function (response) {
      return(response.data);
    })
    .catch(function (error) {
    console.log(error);
    });
};

const updateUser = (name, email, password, id, token) => {

    var data = JSON.stringify({
        "name": name,
        "email": email,
        "password": password
      });
   
    var config = {
        method: 'put',
        url: 'http://localhost:27017/api/users/' + id,
        headers: { 
          'Authorization': 'Bearer ' + token,
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

const userService = {
   logIn,
   register,
   getAllUsers,
   getOneUser,
   deleteUser,
   updateUser
};
  
export default userService;