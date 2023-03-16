import axios from "axios";
const url = "http://localhost:27017/api/users/"

const logIn = (email, password) => {
  
    var data = JSON.stringify({
        "email": email,
        "password": password
    });
  
    var config = {
        method: 'post',
        url: "http://localhost:27017/api/users/login",
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
    };
  
    return axios(config)
};

const register = (name, email, password) => {
  
    var data = JSON.stringify({
        "name": name,
        "email": email,
        "password": password
      });
    
    var config = {
        method: 'post',
        url: "http://localhost:27017/api/users/signin",
        headers: { 
        'Content-Type': 'application/json'
        },
        data : data
    };
  
    return axios(config)
};

const getAllUsers = () => {
   
    var config = {
        method: 'get',
        url: url +'getAll',
        headers: { }
    };
  
    return axios(config)
};

const getOneUser = (id) => {
   
    var config = {
        method: 'get',
        url: url + id,
        headers: { }
    };
  
    return axios(config)
};

const deleteUser = (id, token) => {
   
    var config = {
        method: 'delete',
        url: url + id,
        headers: { 
          'Authorization': 'Bearer ' + token
        }
      };
  
    return axios(config)
};

const updateUser = (name, password, id, token) => {

    var data = JSON.stringify({
        "name": name,
        "password": password
      });
   
    var config = {
        method: 'put',
        url: "http://localhost:27017/api/users/" + id,
        headers: { 
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/json'
        },
        data : data
      };
  
    return axios(config)
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