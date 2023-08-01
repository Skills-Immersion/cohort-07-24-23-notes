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
    const onPaceCourses = [];
    const notOnPaceCourses = [];
    
    //look at every element in the courses array. and for each element do:
    for(let courseObj of courses){
        //look at roster (its an array)
        const {roster} = courseObj;
        //create a flag to indicate if the course was notOnpace or onpace
        let isOnPaceFlag = roster.every((rosterObj)=>{
            const {onPace} = rosterObj;
            return onPace
        })
        if(isOnPaceFlag === true){
            onPaceCourses.push(courseObj)
        }else{
            notOnPaceCourses.push(courseObj)
        }
    }
    return [onPaceCourses,notOnPaceCourses]
}
console.log(partitionCoursesByStudentProgressAdvanced(courses))

/* 

8. getStudentsForCourse - Given a course object, for its course roster, return an array of students that match the courses roster list, and add the onPace property from the roster objects to the student object. 

let oneCourse = {
    id: 1,
    name: "Javascript Fundamentals",
    category: "Software Engineering",
    instructorId: 3,
    roster: [
        {
            studentId: 1,
            onPace: true
        },
        {
            studentId: 2,
            onPace: false
        },
        {
            studentId: 3,
            onPace: true
        },
        {
            studentId: 4,
            onPace: true
        },
        {
            studentId: 5,
            onPace: true
        }
    ]
}
*/

function getStudentsForCourse(course, students) {
    
}

let oneCourse = {
    id: 1,
    name: "Javascript Fundamentals",
    category: "Software Engineering",
    instructorId: 3,
    roster: [
        {
            studentId: 1,
            onPace: true,
        },
        {
            studentId: 2,
            onPace: false,
        },
        {
            studentId: 3,
            onPace: true,
        },
        {
            studentId: 4,
            onPace: true,
        },
        {
            studentId: 5,
            onPace: true,
        },
    ],
};

// console.log(getStudentsForCourse(oneCourse, students))

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

function getTotalNumberOfClassesEnrolledIn(student, courses) {
}

let student1 = {
    id: 1,
    name: {
        first: "Bugs",
        last: "Bunny",
    },
};

// console.log(getTotalNumberOfClassesEnrolledIn(student1, courses));

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

