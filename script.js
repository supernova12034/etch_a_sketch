// gotta start from scratch

/* -Button for starting game
- Alert pops up and asks what size grid
user wants.
---Creates a grid that size with 1 particular color upon button click.
    (There need to be a bunch of steps in here so that the divs are an actual
      grid, arranged and sized like a grid. We might need to turn a parent 
      div into an actual grid using css grid. And then append the 
      newly created little divs into the parent div.)


-After hovering over individual boxes, the grid changes color
-A different button resets grid to original color.
*/



function sizePrompt(){
  let gridSize = prompt('Enter the size of the square grid you want');
  
  

  function createGrid(userInput){
    let mainDiv = document.createElement('div');
    mainDiv.style.display = 'grid';
    mainDiv.style.gap = '5px';

    for(let i = 0; i<userInput; i++){
    var rows = document.createElement('div');
    rows.style.backgroundColor = 'red';
    rows.style.height = '5vh';
    rows.style.width = '5vw';
    mainDiv.append(rows);

    var columns = document.createElement('div');
    columns.style.backgroundColor = 'red';
    rows.style.height = '5vh';
    rows.style.width = '5vw';
    mainDiv.append(columns);
  }
    //we're here, making good progress, now have to append mainDiv into body.  

    /*-create userInput number of rows
 -create userInput number of columns
 -create userInput* userInput number of divs
  -Append the new divs.
*/

    
  
  }
  // console.log('test 3');
  createGrid(gridSize); 
}


let startButton = document.createElement('button');
startButton.textContent = 'Start';
startButton.style.height = '7vh';
startButton.style.width = '7vw';
startButton.style.marginLeft = '45vw';
startButton.style.marginTop = '5vh';
startButton.addEventListener('click',()=>{
  sizePrompt();
});






document.body.append(startButton);