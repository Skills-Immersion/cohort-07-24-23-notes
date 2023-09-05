const fs = require("fs");


function download(url) {
  console.log(`Start downloading video from ${url} ...`); //sync
  let fileName; //sync
  const x = new Promise((resolve,reject)=>{
    setTimeout(() => {
      if(url.length === 0){
        return reject("URL was too short to generate file name from")
      }
      fileName = url.split("/").pop();
      console.log(`Video downloaded from ${url} to ${fileName}.`);
      return resolve(fileName)
    }, 2000); //async
  })

  return x //sync
}


function process(videoFile) {
  console.log(`Start processing ${videoFile} ...`);

  setTimeout(() => {
    console.log(`Video processing complete: ${videoFile}.`);
  }, 4000);
}

const url = "https://www.thinkful.com/sync-and-async.mov";


const fileNamePromise = download(url);

// setTimeout(()=>{
//   console.log(fileName)
// },1999)
// process(fileName);
fileNamePromise
  .then((resolvedVal)=>{
    console.log(resolvedVal)
    process(resolvedVal)
  })