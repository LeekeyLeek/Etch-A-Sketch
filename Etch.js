let gridContainer = document.querySelector('.grid-container');

function defaultGrid() {
    for (let i = 0; i < 256; i++) {

        let gridSquare = document.createElement('div');
        gridSquare.className = 'grid-square';
        //removed gridsquare width/height.
        gridContainer.style.gridTemplateColumns = 'repeat(16, 1fr)';
        gridContainer.style.gridTemplateRows = 'repeat(16, 1fr)';
    
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


function eraseGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild)
    };
};

function createGrid() {

    let userInput = prompt('How many squares per side do you want to use? (16-64)', '24')
    let size = parseInt(userInput)
    let dimensions = size * size
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

        for (let i = 0; i < dimensions; i++) {
        
            let gridSquare = document.createElement('div');
            gridSquare.className = 'grid-square';
            gridSquare.style.width = `repeat(${size}, 1fr)`;
            gridSquare.style.height = `repeat(${size}, 1fr)`;


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