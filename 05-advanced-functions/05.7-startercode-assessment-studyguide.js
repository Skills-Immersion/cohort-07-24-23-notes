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
    notFinished: [2],
  },
};

/*
1. GET BOOKS BY PUBLISHER NAME
*/
function getBooksByPublisher(books, publisherName) {}

// console.log(getBooksByPublisher(books, "Simon & Schuster"));

/* 
2. GET A STUDENTS FINISHED BOOKS

WRITE A FUNCTION THAT TAKES AN ARRAY OF BOOKS, OBJECT CONTAINING ALL STUDENTS, AND A STUDENT NAME.
IT WILL RETURN AN ARRAY OF BOOK OBJECTS THAT REPRESENT THE BOOKS THAT THE GIVEN USER HAS FINISHED.
*/

function getFinishedBooksFromStudent(){

}

// console.log(getFinishedBooksFromStudent(books, students, "Spongebob"))

/* 
3. FIND IF A GIVEN STUDENT HAS READ ALL THE BOOKS FROM A GIVEN PUBLISHER. RETURN TRUE OR FALSE

FUNCTION INPUTS: LIST OF BOOKS, OBJECT CONTAINING ALL STUDENTS, PUBLISHER NAME, STUDENT NAME

*/

function hasStudentReadAllBooksFromPublisher(books, students, publisherName, studentName){

}


// console.log(hasStudentReadAllBooksFromPublisher(books, students, "Simon & Schuster", "Spongebob"))

/* 
4. GIVEN AN OBJECT CONTAINING ALL STUDENTS, AND TWO STUDENT NAMES, DETERMINE IF THE FIRST STUDENT HAS READ ANY BOOKS THAT THE SECOND STUDENT HAS NOT READ YET. IF SO, RETURN TRUE. IF THE FIRST STUDENT HAS NOT READ ANY BOOKS THE SECOND STUDENT HAS NOT READ, RETURN FALSE.

*/

function hasStudentReadOtherStudentsUnfinishedBooks(students, studentA, studentB){

}

// console.log(hasStudentReadOtherStudentsUnfinishedBooks(students, "Spongebob", "Sandy"))
/* 
5. RETURN ALL THE STUDENT NAMES WHO HAVE READ ANY BOOK IN THE GIVEN STUDENT'S NOTFINISHED BOOKS

INPUTS: OBJECT OF STUDENTS, STUDENT NAME

*/


function studentsWhoHaveRead(students, studentName){

}

// console.log(studentsWhoHaveRead(students, "Spongebob"))
