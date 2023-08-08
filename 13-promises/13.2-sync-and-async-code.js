/* 

METAPHOR TIME: ORDERING SOME FOOD AND DOING SOME TASKS WHILE WAITING FOR THE FOOD TO BE READY.

-WHAT ARE SOME TASKS YOU CAN DO WHILE WAITING FOR THE FOOD? 
    - check phone/news/social media/text
    - get a table
    - talk to a friend
    - play games on phone
    - look for some cups/utensils/condiments

-WHAT ARE SOME TASKS YOU CAN ONLY DO ONCE YOU GET THE FOOD?
    - drink/eat the food you ordered

MAIN POINT: WE HAVE SYNC CODE AND ASYNC CODE IN JAVASCRIPT. WHEN JAVASCRIPT RUNS, IT WILL RUN THE SYNC CODE FIRST, THEN IT WILL RUN THE ASYNC CODE

THIS ALLOWS US TO RUN SOME CODE WHILE WAITING FOR SOME OTHER CODE TO RUN, WITHOUT CREATING A BOTTLENECK IN OUR CODE. 


SOME EXAMPLES OF ASYNC CODE: setTimeout(), setInterval(), file system operations, api calls, database calls, any type of request over the internet
*/


//1. SET TIMEOUT WITH NUMBERS FIRST

/* 
console.log("1") //sync

setTimeout(()=>{ //async
    console.log("2")
},2000)

console.log("3"); //sync

*/


//2. SET TIMEOUT WITH 0 SECONDS

/* 

console.log("1") //sync

setTimeout(()=>{ //async
    console.log("2")
}, 0)

console.log("3"); //sync

*/

//3. TWO ASYNC CODE RUNNING
/* 

console.log("1")

setTimeout(()=>{
    console.log("2")
}, 0)

setTimeout(()=>{
    console.log("3")
}, 0)

console.log("4");


*/



// NOW LETS TAKE A LOOK AT HOW AN EXAMPLE WHERE WE ARE MIMIKING A FILE DOWNLOAD AND FILE PROCESS AFTER DOWNLOADING

function download(url) {
    console.log(`Start downloading video from ${url} ...`); //sync
    let fileName; //sync
    setTimeout(() => {
        fileName = url.split("/").pop();
        console.log(`Video downloaded from ${url} to ${fileName}.`);
        
    }, 2000); //async

    return fileName; //sync
}

function process(videoFile) {
    console.log(`Start processing ${videoFile} ...`);

    setTimeout(() => {
        console.log(`Video processing complete: ${videoFile}.`);
    }, 4000);
}

const url = "https://www.thinkful.com/sync-and-async.mov";

const fileName = download(url);
// console.log(url.split("/"))
console.log(fileName)
process(fileName);


// setInterval(() => console.log("some other work is happening here"), 500);

// setInterval(()=>{
//     console.log("wazzap")
// },1000)
/* 
LETS GROUP THE SYNC CODE AND ASYNC CODE-> REMEMBER THAT THE SYNC CODE RUNS FIRST, THEN THE ASYNC CODE RUNS AFTERWARDS




*/
