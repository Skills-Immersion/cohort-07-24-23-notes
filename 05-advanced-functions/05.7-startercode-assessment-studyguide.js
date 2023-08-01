const books = [
  {
    id: 1,
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    publisher: {
      name: "Simon & Schuster",
      state: "Maryland",
    },
  },

  {
    id: 2,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    publisher: {
      name: "Warner Books",
      state: "California",
    },
  },
  {
    id: 3,
    title: "How to win friends and influence People",
    author: "Dale Carnegie",
    publisher: {
      name: "Simon & Schuster",
      state: "Maryland",
    },
  },
  {
    id: 4,
    title: "Atomic Habits",
    author: "James Clear",
    publisher: {
      name: "Penguin Books",
      state: "Maryland",
    },
  },
];

const students = {
  Spongebob: {
    finished: [1, 2],
    notFinished: [3, 4],
  },
  Squidward: {
    finished: [1],
    notFinished: [2, 3, 4],
  },
  Sandy: {
    finished: [1, 3, 4],
    notFinished: [5,8,9],
  },
  Krabs: {
    finished: [2],
    notFinished: [1,3],
  },
  Plankton: {
    finished: [3],
    notFinished: [1,2],
  },
};

/*
1. GET BOOKS BY PUBLISHER NAME
*/
function getBooksByPublisher(books=[], publisherName="") {
  const result = books.filter((element,idx)=>{
    // if(element.publisher.name === publisherName){
    //   return true
    // }else{
    //   return false;
    // }
    return element.publisher.name === publisherName
  })

  return result;
}

// console.log(getBooksByPublisher(books, "Simon & Schuster"));

/* 
2. GET A STUDENTS FINISHED BOOKS

WRITE A FUNCTION THAT TAKES AN ARRAY OF BOOKS, OBJECT CONTAINING ALL STUDENTS, AND A STUDENT NAME.
IT WILL RETURN AN ARRAY OF BOOK OBJECTS THAT REPRESENT THE BOOKS THAT THE GIVEN USER HAS FINISHED.
*/

function getFinishedBooksFromStudent(books=[], students={}, studentName=""){
  //look at and remember the finished books of given student [1,2]
  // const finishedBooks = students[studentName].finished
  const {finished} = students[studentName];
  //filter through the books array and filter in only the books whos id# is included in the given stuents finished books
  const result = books.filter((bookObj)=>{
    return finished.includes(bookObj.id)
  })
  return result;
}

// console.log(getFinishedBooksFromStudent(books, students, "Spongebob"))
// console.log(getFinishedBooksFromStudent(books, students, "Squidward"))


/* 
3. FIND IF A GIVEN STUDENT HAS READ ALL THE BOOKS FROM A GIVEN PUBLISHER. RETURN TRUE OR FALSE

FUNCTION INPUTS: LIST OF BOOKS, OBJECT CONTAINING ALL STUDENTS, PUBLISHER NAME, STUDENT NAME

*/

function hasStudentReadAllBooksFromPublisher(books=[], students={}, publisherName="", studentName=""){
  //look in students object get the given students finished books array [1, 2]
  const {finished} = students[studentName]; //[1,2]
  /* 
    look in the books array to get all the books from the given publisher
    [
      {
        id: 1,
        title: "Think and Grow Rich",
        author: "Napoleon Hill",
        publisher: {
          name: "Simon & Schuster",
          state: "Maryland",
        },
      },
      {
        id: 3,
        title: "How to win friends and influence People",
        author: "Dale Carnegie",
        publisher: {
          name: "Simon & Schuster",
          state: "Maryland",
        },
      }
    ]
  */
  //filter through the books array to get only books from simon & schuster
  const booksFromPublisher = books.filter(element=> element.publisher.name===publisherName)
  const result = booksFromPublisher.every((element,id)=>{
    // if(finished.includes(element.id)){
    //   return true;
    // }else{
    //   return false;
    // }
    return finished.includes(element.id)
  })
  return result;
}


// console.log(hasStudentReadAllBooksFromPublisher(books, students, "Simon & Schuster", "Spongebob"))

/* 
4. GIVEN AN OBJECT CONTAINING ALL STUDENTS, AND TWO STUDENT NAMES, DETERMINE IF THE FIRST STUDENT HAS READ ANY BOOKS THAT THE SECOND STUDENT HAS NOT READ YET. IF SO, RETURN TRUE. IF THE FIRST STUDENT HAS NOT READ ANY BOOKS THE SECOND STUDENT HAS NOT READ, RETURN FALSE.

*/

function hasStudentReadOtherStudentsUnfinishedBooks(students={}, studentA="", studentB=""){
  //look at studentA's finished books [1,2]
  const {finished} = students[studentA]; //[1,2]
  //look at studentB's notFinished books [2]
  const {notFinished} = students[studentB]; //[2]

  //check if at least some book ids from the finished books array is included in the studentB's notFinishedBooks id array
  const result = finished.some((bookId,idx)=>{
    return notFinished.includes(bookId)
  })
  return result;
}

// console.log(hasStudentReadOtherStudentsUnfinishedBooks(students, "Spongebob", "Sandy"))
/* 
5. RETURN ALL THE STUDENT NAMES WHO HAVE READ ANY BOOK IN THE GIVEN STUDENT'S NOTFINISHED BOOKS

INPUTS: OBJECT OF STUDENTS, STUDENT NAME

*/


function studentsWhoHaveRead(students={}, studentName=""){
  //initialize an array to store student names in
  const result = []
  //look at the notFinished id array of given student - [3,4]
  const {notFinished} = students[studentName];
  //cycle through each key value pair in the students object
  for(let key in students){
    //get the finished books from each student
    const {finished} = students[key];
    //check if at least some ids from the current iterations students finished books array are in the given students notFinished books. If so, put the key(student name) in a result array
    const hasRead = finished.some((bookId)=>{
      return notFinished.includes(bookId)
    })
    if(hasRead === true) result.push(key)
  }
  return result;
}


function studentsWhoHaveReadWithHelperFunction(students={}, studentName=""){
  //initialize an array to store student names in
  const result = []
  for(let key in students){
    const hasRead = hasStudentReadOtherStudentsUnfinishedBooks(students,key,studentName)
    if(hasRead === true) result.push(key)
  }
  return result;
}
/* 
["Sandy", "Plankton"]

*/

console.log(studentsWhoHaveReadWithHelperFunction(students, "Spongebob"))
