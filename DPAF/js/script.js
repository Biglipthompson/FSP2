// these are my variables to grab the list and the ul
const linkList = document.querySelector('.link-list');
const studentList = document.querySelector('.student-list');


/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

// A list parameter to represent student data that will be passed as an argument when the function is called.
//A page parameter to represent the page number that will be passed as an argument when the function is called.
function showPage(list, page){
const startIndex = ((page * 9 ) - 9);
const endIndex = (page * 9);



// this gets the student list class
let studentList = document.querySelector('.student-list');
studentList.innerHTML = " ";

//for loop that iterates over the list
   for(let i = 0; i < list.length; i++){

   if( i >= startIndex && i < endIndex){
      

   // this gets the html and replaces the code with this new code
     const studentItem = 
      `<li class="student-item cf">
      <div class="student-details">
      <img class="avatar" src=${list[i].picture.medium} alt="Profile Picture">
      <h3>${list[i].name.first} ${list[i].name.last}</h3>
      <span class="email">${list[i].email}</span>
      </div>
      <div class="joined-details">
      <span class="date">${list[i].registered.date}</span>
      </div>
      </li>`;
      studentList.insertAdjacentHTML("beforeend", studentItem);

      // console.log(list);
      // console.log(page);

      }
   }
} 

// /*
// Create the addPagination function
// This function will create and insert/append the elements needed for the pagination buttons
// */
function addPagination(list) {

   const numOfPages = Math.ceil(list.length / 9);

   //this grabs the link list class
   const linkList = document.querySelector('.link-list');

   //sets the inner html to the linklist to empty to make the html blank
   linkList.innerHTML = " ";

   //This loops is going to go over the buttons for the button classes
   for (let i = 1; i <= numOfPages; i++){
   const button = `
   <li>
   <button type="button">${[i]}</button>
   </li>`;
   linkList.insertAdjacentHTML('beforeend', button);

   const pageButton = document.querySelector('button');
   pageButton.className = 'active';   
 
   }
// This event listener gets the clicked button ans changes its class to active 
linkList.addEventListener('click', (e) => {
   const clickEvent = e.target;
      if (clickEvent.tagName === 'BUTTON'){
         const Btn1 = document.querySelector('.active');
         Btn1.className = '';

            clickEvent.className = 'active';
            const clickEventContent = clickEvent.textContent;

            showPage(list, clickEventContent);   
          }
      });
   }

   showPage(data, 1);
   addPagination(data);


   // Calling Functions 
   

