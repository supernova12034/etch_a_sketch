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
  
  let parentDiv = document.createElement('div');
  parentDiv.className = 'parentDiv';

  function createGrid(userInput){
    for(i=0;i<=userInput;i++){
        let box = document.createElement('div');
        box.style.height = '5vh';
        box.style.width = '4vw';
        box.style.backgroundColor = 'red';
        parentDiv.append(box);
        console.log('test 1');
    }
    document.body.append(parentDiv);
    // console.log('test 2');
  }
  // console.log('test 3');
  createGrid(gridSize); //We're here.
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