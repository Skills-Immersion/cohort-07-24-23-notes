/* 

*/

const courses = require("../data/courses");
const instructors = require("../data/instructors");
const students = require("../data/students");

//1. Get Total courses count
function getTotalCoursesCount(courses=[]) {
    return courses.length;
}

// console.log(getTotalCoursesCount(courses))

//2. Get Total accounts count
function getTotalAccountsCount(accounts=[]) {
    return accounts.length
}

//3. Find instructor by Id-> given array of instructors and an id, find the instructor object that matches the given id
function findInstructorById(instructors=[], id=0) {
    const result = instructors.find((instructorObj,idx)=>{
        return instructorObj.id === id
    })
    return result;
}

// console.log(findInstructorById(instructors, 3))

//4. Find course by Id-> given array of courses and an id, find the course object that matches the given id
function findCourseById(courses=[], id=0) {
    return courses.find(courseObj=> courseObj.id === id);
}

// console.log(findCourseById(courses,2))

//5. Find student by Id-> given array of students and an id, find the student object that matches the given id
function findstudentById(students, id) {
    return students.find(studentObj=> studentObj.id === id);
}

// console.log(findstudentById(students, 2))

//6. Given a list of students, return back the list of students sorted by their first name
function sortStudentsByFirstName(students=[]) {
    students.sort((studentA, studentB)=>{
        // if(studentA.name.first < studentB.name.first){
        //     return -1;
        // }else{
        //     return 1;
        // }
        return studentA.name.first < studentB.name.first ? -1 : 1
    })
    return students;
}

const sortStudentsByFirstNameShortWay = (students=[])=>  students.sort((studentA, studentB)=> studentA.name.first < studentB.name.first ? -1 : 1)

// console.log(sortStudentsByFirstNameShortWay(students));

//7. Partition courses by student on pace
//find the courses that have all students on pace and find courses that have at least one student not on pace. Return back an array containing 2 sub-arrays inside it. First sub-array will have the courses where all students are on pace, and the second sub-array will have the courses where not all students are on pace
/* 
[[],[]]

*/
function partitionCoursesByStudentProgress(courses=[]) {
    const onPaceCourses = [];
    const notOnPaceCourses = [];
    
    //look at every element in the courses array. and for each element do:
    for(let courseObj of courses){
        //look at roster (its an array)
        const {roster} = courseObj;
        //create a flag to indicate if the course was notOnpace or onpace
        let isOnPaceFlag = true;
        //for each element in the roster do:
        for(let rosterObj of roster){
            //look at onPace. 
            const {onPace} = rosterObj;
            //If onpace is false, then we can stop looping and push the current course into notOnPaceCourses array
            if(onPace === false){
                isOnPaceFlag = false;
                notOnPaceCourses.push(courseObj);
                break;
            }
        }
        //if we get past the forloop and onPace was never false, then push the current course to onPaceCourses array
        if(isOnPaceFlag === true){
            onPaceCourses.push(courseObj)
        }
    }
    return [onPaceCourses,notOnPaceCourses]
}


function partitionCoursesByStudentProgressAdvanced(courses=[]) {
    // const notOnPaceCourses = []
    const onPaceCourses = courses.filter((courseObj)=>{
        //look at roster (its an array)
        const {roster} = courseObj;
        //create a flag to indicate if the course was notOnpace or onpace
        let isOnPaceFlag = roster.every((rosterObj)=>{
            const {onPace} = rosterObj;
            return onPace;
        })
        // if(isOnPaceFlag === false) notOnPaceCourses.push(courseObj);
        return isOnPaceFlag
    })
    const notOnPaceCourses = courses.filter((courseObj)=>{
        //look at roster (its an array)
        const {roster} = courseObj;
        //create a flag to indicate if the course was notOnpace or onpace
        let isNotOnPaceFlag = roster.some((rosterObj)=>{
            const {onPace} = rosterObj;
            return onPace === false 
        })
        return isNotOnPaceFlag
    })
    
    return [onPaceCourses,notOnPaceCourses]
}
// console.log(partitionCoursesByStudentProgressAdvanced(courses))

/* 

8. getStudentsForCourse - Given a course object, for its course roster, return an array of students that match the courses roster list, and add the onPace property from the roster objects to the student object. 

*/

function getStudentsForCourse(course={}, students=[]) {
    //have array to put students in-  result = []
    const result = [];
    //look at the roster for the given course
    const {roster} = course
    //look at each element in the roster array. for each element do:
    roster.forEach((rosterObj)=>{
        //look at the studentId - put in var
        const {studentId, onPace} = rosterObj; 
        //loop through students array to FIND an element whose id === studentId
        const matchingStudent = students.find((studentObj)=>{
            return studentObj.id === studentId
        })
        //add the onPace property to the matchingStudent
        matchingStudent.onPace = onPace;
        //put the found student into result (push)
        result.push(matchingStudent)
    })
    return result;
}

function getStudentsForCourseAdvanced(course={}, students=[]) {
    //look at the roster for the given course
    const {roster} = course
    //have array to put students in-  result = []
    const result = roster.map((rosterObj)=>{
        //look at the studentId - put in var
        const {studentId, onPace} = rosterObj; 
        //loop through students array to FIND an element whose id === studentId
        const matchingStudent = students.find((studentObj)=>{
            return studentObj.id === studentId
        })
        //add the onPace property to the matchingStudent
        matchingStudent.onPace = onPace;
        //put the found student into result (push)
        return matchingStudent
    })
    return result.slice(0,2)
}

// console.log([1,2,3,4,54,6,7,8,9,10,11,12,13].slice(0,10))

let oneCourse = {
    id: 2,
    name: "Python Fundamentals",
    category: "Software Engineering",
    instructorId: 2,
    roster: [
        {
            studentId: 1,
            onPace: false
        },
        {
            studentId: 3,
            onPace: true
        },
        {
            studentId: 5,
            onPace: true
        }
    ]
}

// console.log(getStudentsForCourseAdvanced(oneCourse, students))

/* 
9. getTotalNumberOfClassesForStudent- Given a student object and an array of course objects, find the number of times this student object's id appears in the all the courses rosters array

let student1 = {
        id: 1,
        name: {
            first: "Bugs",
            last: "Bunny"
        },
    }
*/

function getTotalNumberOfClassesEnrolledIn(student={}, courses=[]) {
    //remember the given students id - var
    const {id} = student;
    //have a counter variable initailized - count
    let count = 0;
    //look at every course in courses (loop). for each courseObj do:
    courses.forEach((courseObj)=>{
        //look at the roster
        const {roster} = courseObj;
        //for each element(rosterObj) in roster do:
        roster.forEach((rosterObj)=>{
            //increase count each time we see an element whose studentId === given students id
            if(rosterObj.studentId === id) count++;
        })

    })
    //return count
    return count;
}

function getTotalNumberOfClassesEnrolledInAdvanced(student={}, courses=[]) {
    //remember the given students id - var
    const {id} = student;
    //have a counter variable initailized - count
    let count = courses.reduce((acc,courseObj,idx)=>{
        //look at the roster
        const {roster} = courseObj;
        //for each element(rosterObj) in roster do:
        // roster.forEach((rosterObj)=>{
        //     //increase count each time we see an element whose studentId === given students id
        //     if(rosterObj.studentId === id) acc++;
        // })
        const filtered = roster.filter((rosterObj)=>{
            return rosterObj.studentId === id
        })
        acc += filtered.length
        return acc;
    },0)
   

    //return count
    return count;
}

let student1 = {
    id: 1,
    name: {
        first: "Bugs",
        last: "Bunny",
    },
};

console.log(getTotalNumberOfClassesEnrolledInAdvanced(student1, courses));

/* 
10- Given a student object, an array of course objects and an array of authors objects-> give back all the course objects including the instructor information embedded into the course object for the courses the student is enrolled in



*/

function getCoursesStudentEnrolledIn(student, courses, instructors) {
    
}

// console.log(getCoursesStudentEnrolledIn(student1, courses, instructors));

/*
11. Get count of courses who have at least on student not onPace- similar to getBooksBorrowedCount(books)
*/

function getCoursesNotOnPaceCount(courses) {
    
}

// console.log(getCoursesNotOnPaceCount(courses));

/* 
12. Get most common course categories. Output in this format:

[
    { name: "Software Engineering", count: 3 },
    { name: "Finance", count: 2 },
    { name: "Psychology", count: 2 },
]

*/

const getMostCommonCategories = (courses) => {
    
};

// console.log(getMostCommonCategories(courses));

/* 
13. Get most popular courses- find the top 3 largest courses based on roster size


Output in this format: 
[
  { name: 'Javascript Fundamentals', rosterSize: 5 },
  { name: 'Bread And Cheddar- The Fundamentals', rosterSize: 4 },
  { name: 'Python Fundamentals', rosterSize: 3 }
]
*/

function getMostPopularCourses(courses) {
    //find the most pop

}

// console.log(getMostPopularCourses(courses));

/* 

14. Get instructors of largest classes.

Output in this format: 

[
  { name: 'Rob Dahal', numStudents: 5 },
  { name: 'Wayne Dyer', numStudents: 4 }
]

*/

function instructorsOfLargestClasses(courses, instructors) {
   
}

function helperJoinFirstAndLastNames(first, last) {
    return `${first} ${last}`;
}

// console.log(instructorsOfLargestClasses(courses, instructors));

