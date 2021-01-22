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
const studentList = document.querySelector('.student-list');
   studentList.innerHTML = ' ';
   for( i = 0; list.length; i++){
   if( i >= startIndex && i < endIndex){
     var studentItem = 
      `<li class="student-item cf">
      <div class="student-details">
      <img class="avatar" src="${studentList[i].picture.thumbnail}" alt="Profile Picture">
      <h3>${studentList[i].name.first} '' ${studentList[i].name.last}</h3>
      <span class="email">${studentList[i].email}</span>
      </div>
      <div class="joined-details">
      <span class="date">${studentList[i].registered.date}</span>
      </div>
      </li>`
      studentList.innerHTML = studentItem;
      }
   }
} 

/*
Create the addPagination function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination (){
   document.getElementsByClassName('pagination')

}


// Call functions
