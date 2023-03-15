import axios from "axios";
url = env("URL_USER")

const logIn = (email, password) => {
  
    var data = JSON.stringify({
        "email": email,
        "password": password
    });
  
    var config = {
        method: 'post',
        url: url +'login',
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
        url: url +'signin',
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
        url: url +'getAll',
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
        url: url + id,
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
        url: url + id,
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
        url: url + id,
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