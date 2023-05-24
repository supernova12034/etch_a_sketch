// gotta start from scratch

/* -Button for starting game
- Alert pops up and asks what size grid
user wants.
-Creates a grid that size with 1 particular color
-After hovering over individual boxes, the grid changes color
-A different button resets grid to original color.
*/



function sizePrompt(){
  let gridSize = prompt('Enter the size of the square grid you want');
  
  function createGrid(userInput){
    for(i=0;i<=userInput;i++){
        let box = document.createElement('div');
        box.style.backgroundColor = 'red';
        document.body.append(box);
    }

  }
  
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