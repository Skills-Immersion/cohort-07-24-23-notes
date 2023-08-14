const axios = require("axios");
const BASE_URL = "http://localhost:5000";

function bulkFind(ids=[]){
  const arrayOfPromises = ids.map((id)=>{
    return axios.get(`${BASE_URL}/players/${id}`)
  })
  return Promise.all(arrayOfPromises)
    .then((response=[])=>{
      //the code in the .then will only run if ALL the promises in the arrayOfPromises resolve. Respose will be an array of response objects
      console.log("response recieved, all promises have been resolved")
      const dataOnly = response.map(responseObj=>responseObj.data);
      console.log(dataOnly)
      return dataOnly
    })
    .catch((error)=>{
      //the code in the .catch will only run if ANY of the promises in the arrayOfPromises reject
      console.log("error caught, here is error message:", error.message)
    })
  // console.log(arrayOfPromises)
}


function bulkFindAllSettled(ids=[]){
  const arrayOfPromises = ids.map((id)=>{
    return axios.get(`${BASE_URL}/players/${id}`)
  })
  return Promise.allSettled(arrayOfPromises)
    .then((response=[])=>{
      //the code in the .then will only run no matter if all the promsies resolve or reject. Response is still an array of objects
      // console.log(response)
      const resolved = response.filter(responseObj=>responseObj.status === "fulfilled")
      const rejected = response.filter(responseObj=>responseObj.status === "rejected")
      console.log(resolved)
      console.log(rejected)
      // console.log(response[0].value.data) //if its resolved
      // console.log(response[0].reason) //if its rejected

    })
    .catch((error)=>{
      console.log("error caught, here is error message:", error.message)
    })
  // console.log(arrayOfPromises)
}

bulkFindAllSettled([1,30,5])



function bulkDelete(ids=[]) {
  //map the ids to axios.delete requests (promises)
  const result =[]
  const arrayOfPromises = ids.map(id=>{
    result.push({id})
    return axios.delete(`${BASE_URL}/players/${id}`)
  })
  return Promise.all(arrayOfPromises)
    .then((response=[])=>{
      //need to return an array of ids of the things that were deleted
      // const result = ids.map(id=>({id}))
      console.log(result)
      return result
    })
}

// bulkDelete([1,3,5])
