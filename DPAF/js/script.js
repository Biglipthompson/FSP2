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


let studentList = document.querySelector('.student-list');
studentList.innerHTML = " ";

   for(let i = 0; i < list.length; i++){

   if( i >= startIndex && i < endIndex){
      
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

   const linkList = document.querySelector('.link-list');

   linkList.innerHTML = " ";

   for (let i = 1; i <= numOfPages.length; i++){
   const pageNumber = [i];
   const button = `
   <li>
   <button type="button">${pageNumber}</button>
   </li>`;
   linkList.insertAdjacentHTML('beforeend', button);

   const pageButton = document.querySelector('button');
   pageButton.className = 'active';   
 }

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

   // Calling Functions 
   
   showPage(data, 1);
   addPagination(data);
