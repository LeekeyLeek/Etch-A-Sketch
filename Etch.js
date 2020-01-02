const gridContainer = document.querySelector('.grid-container');
let selectedColor = 'black'

//v Needs updated later v
function defaultGrid() {
    for (let i = 0; i < 256; i++) {

        let gridSquare = document.createElement('div');
        gridSquare.className = 'grid-square';
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

    let userInput = prompt('How many squares per side do you want to use? (1-100)', '24')
    let size = parseInt(userInput)
    let dimensions = size * size
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

        for (let i = 0; i < dimensions; i++) {
        
            let gridSquare = document.createElement('div');
            gridSquare.className = 'grid-square';
            let coloredIn = false

            gridSquare.addEventListener("mouseover", function(e) {
                
                switch (coloredIn) {
                    case true:
                        break;
                    case false:
                        return gridSquare.style.backgroundColor = 'grey';
                }
            });

            gridSquare.addEventListener("mouseout", function(e) {
                
                switch (coloredIn) {
                    case true:
                        break;
                    case false:
                        return gridSquare.style.backgroundColor = 'initial';
                }
            });
            
            gridSquare.addEventListener("mousedown", function(e) {
               
                switch(selectedColor) {

                    case 'black':
                        gridSquare.style.backgroundColor = 'black';
                        break;
            
                    case 'red':
                        gridSquare.style.backgroundColor = 'red';
                        break;
            
                    case 'blue':
                        gridSquare.style.backgroundColor = 'blue';
                        break;
            
                    case 'green':
                        gridSquare.style.backgroundColor = 'green';
                        break;
                
                };

                return coloredIn = true

            });

            gridContainer.appendChild(gridSquare)
        };
    
};


let redButton = document.querySelector('#red')
redButton.addEventListener('click', function(e) {
    console.log('current color is red')
    return selectedColor = 'red'
});

let blueButton = document.querySelector('#blue')
blueButton.addEventListener('click', function(e) {
    console.log('current color is blue')
    return selectedColor = 'blue'
});

let greenButton = document.querySelector('#green')
greenButton.addEventListener('click', function(e) {
    console.log('current color is green')
    return selectedColor = 'green'
});

let blackButton = document.querySelector('#black')
blackButton.addEventListener('click', function(e) {
    console.log('current color is black')
    return selectedColor = 'black'
});


let clearButton = document.querySelector('.clear')
clearButton.addEventListener('click', function(e) {
let erase = document.querySelectorAll('.grid-square')
erase.style.backgroundColor ='white';
});

let resizeButton = document.querySelector('.resize')
resizeButton.addEventListener('click', function(e) {
eraseGrid()
createGrid()
});