//Now we've created one div, next we gotta make 16 by 16.
//Is there some way we can visualize the divs?(done)
//figure out a way to put your divs in a parent container div(done)
//it seems to work, but there is only 1 div now, instead of 16.(fixed)
//make container1 div into a grid.

//We're here, continue configuring this project onto git.

let btn1 = document.querySelector(".bt1");

let cont = document.getElementById("container1");

function divCreation() {

  let createDiv = document.createElement('div');

  cont.appendChild(createDiv);



  createDiv.addEventListener("mouseover", function(e) {
    createDiv.style.backgroundColor = "#3572dc";
  });   //HOLY SHIT IT WORKS, AND ITS GLORIOUS!!!
  //KEPT THINKING ABOUT HOVER IN CSS, WHEREAS 
  //MOUSEOVER EVENT WORKS JUST AS WELL, AND WAYYYY EASIER!

}




/*left this outside the function because the 
function is executed 256 times, and I didnt want it to prompt for a number that many times, and IT WORKS!
*/
btn1.addEventListener("click", function(e) {


  let divSize = prompt("Enter the number of squares per side: ");
  let finalDivSize = divSize * divSize; //to get the right number of squares, you have to multiple the number by itself.

  createDiv.style.backgroundColor = "#FFFFFF";
});


/* IMPORTANT
initially starting out, there should be 16 divs,
BUT after clicking the button and getting the user input,
the number of divs and the condition of the loop is changed
(so the number of sides changes based on the user input, as does the number of loops.) 
*/


for (let i = 0; i < 256; i++) {
  divCreation();

}



/*
To do list, and thoughts on completing this project:


-add a button at the top (done)
-that will clear the current grid(done)
-send a popup asking for(done)
number of squares per side for grid
-this number should be plugged into
the number of loops

length of container holding the divs
1473.15

width of container holding the divs
1025


To get a
square shaped grid, where
both sides are equal,
you have to square the number
of loops.
(so 16 by 16 is 16^2 loops)
20 by 20 pattern is 20^2
etc etc

*/