let gridContainer = document.querySelector('.grid-container');

function defaultGrid() {
    for (let i = 0; i < 4096; i++) {

        let gridSquare = document.createElement('div');
        gridSquare.className = 'grid-square';
        gridSquare.style.width = 'repeat(64, 1fr)';
        gridSquare.style.height = 'repeat(64, 1fr)';
        gridContainer.style.gridTemplateColumns = 'repeat(64, 1fr)';
        gridContainer.style.gridTemplateRows = 'repeat(64, 1fr)';
    
        gridSquare.addEventListener("mouseover", function() {
            gridSquare.style.backgroundColor = 'grey';
        });
        gridSquare.addEventListener("mouseout", function() {
            gridSquare.style.backgroundColor = 'white';
        });
        gridContainer.appendChild(gridSquare)
    };
};
defaultGrid()

//Erases all child elements of .grid-container
function eraseGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild)
    };
};


function createGrid() {

    let initInput = prompt('How many squares per side do you want to use? (16-64)', '24')
    let userInput = parseInt(initInput)
    let dimensions = userInput * userInput
    

        for (let x = 0; x < dimensions; x++) {
        
            let gridSquare = document.createElement('div');
            gridSquare.className = 'grid-square';
            gridSquare.style.width = 'repeat(userInput, 1fr)';
            gridSquare.style.height = 'repeat(userInput, 1fr)';
            gridContainer.style.gridTemplateColumns = 'repeat(userInput, 1fr)';
            gridContainer.style.gridTemplateRows = 'repeat(userInput, 1fr)';

            gridSquare.addEventListener("mouseover", function() {
                gridSquare.style.backgroundColor = 'grey';
            });
            gridSquare.addEventListener("mouseout", function() {
                gridSquare.style.backgroundColor = 'white';
            });

            gridContainer.appendChild(gridSquare)
        };
    
};


//Clear button
let clearButton = document.querySelector('.clear')
clearButton.addEventListener('click', function() {


});

//Resize button
let resizeButton = document.querySelector('.resize')
resizeButton.addEventListener('click', function() {

eraseGrid()
createGrid()

});