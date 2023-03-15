import axios from "axios";
url = env("URL_REVIEW")

const createReview = (userId, beachId, rating, comment) => {
  
    var data = JSON.stringify({
        "userId": userId,
        "beachId": beachId,
        "rating": rating,
        "comment": comment
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
        return(response.data);
    })
    .catch(function (error) {
    console.log(error);
    });
};

const getAllReviews = () => {
    
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

const getOneReview = (id) => {
    
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

const deleteReview = (id) => {
    
    var config = {
        method: 'delete',
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

const updateReview = (userId, beachId, rating, comment, id, token) => {
  
    var data = JSON.stringify({
        "userId": userId,
        "beachId": beachId,
        "rating": rating,
        "comment": comment
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

const reviewService = {
    createReview,
    getAllReviews,
    getOneReview,
    deleteReview,
    updateReview
};
   
 export default reviewService;