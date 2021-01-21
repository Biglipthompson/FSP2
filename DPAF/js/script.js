/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/


// A list parameter to represent student data that will be passed as an argument when the function is called.
//A page parameter to represent the page number that will be passed as an argument when the function is called.
function showPage(list, page){
var startIndex = (page * 9 ) - 9;
var endIndex = page * 9;
const studentList = document.getElementsByClassName('student-list');
studentList.innerHTML = '';
   if( i >= startIndex && i < endIndex){
      
   }
} 

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination (){
   document.getElementsByClassName('pagination')

}


// Call functions
