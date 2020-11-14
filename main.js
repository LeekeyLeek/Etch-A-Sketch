const gridContainer = document.querySelector('.grid-container');
let selectedColor = 'black'
let mousePressed = false

function defaultGrid() {
    for (let i = 0; i < 256; i++) {

        let gridSquare = document.createElement('div');
        gridSquare.className = 'grid-square';
        gridContainer.style.gridTemplateColumns = 'repeat(16, 1fr)';
        gridContainer.style.gridTemplateRows = 'repeat(16, 1fr)';
        let coloredIn = false
        
        gridSquare.addEventListener("mouseover", function() {
            switch (coloredIn) {
                case true:
                    break;
                case false:
                    return gridSquare.style.backgroundColor = 'grey';
            }
        });
        gridSquare.addEventListener("mouseout", function() {
            switch (coloredIn) {
                case true:
                    break;
                case false:
                    return gridSquare.style.backgroundColor = 'initial';
            }
        });
        
        gridSquare.addEventListener("mousedown", function(e) {
               
            mousePressed = true

            if (mousePressed = true) {
                switch(selectedColor) {

                    case 'black':
                        gridSquare.style.backgroundColor = 'black';
                        return coloredIn = true
                    
        
                    case 'red':
                        gridSquare.style.backgroundColor = 'red';
                        return coloredIn = true
                    
        
                    case 'blue':
                        gridSquare.style.backgroundColor = 'blue';
                        return coloredIn = true
                    
        
                    case 'green':
                        gridSquare.style.backgroundColor = 'green';
                        return coloredIn = true
                    
                    case 'white':
                        gridSquare.style.backgroundColor = 'white';
                        return coloredIn = true
            
                }} else {
                    return;
                }

        });

        gridSquare.addEventListener("mouseup", function(e) {
            mousePressed = false
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
    if (size >= 101){
        alert('Please enter a value of 100 or lower. Setting to default layout.')
        defaultGrid()
    } else {
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
                   
                    mousePressed = true
    
                    if (mousePressed = true) {
                        switch(selectedColor) {
    
                            case 'black':
                                gridSquare.style.backgroundColor = 'black';
                                return coloredIn = true
                            
                
                            case 'red':
                                gridSquare.style.backgroundColor = 'red';
                                return coloredIn = true
                            
                
                            case 'blue':
                                gridSquare.style.backgroundColor = 'blue';
                                return coloredIn = true
                            
                
                            case 'green':
                                gridSquare.style.backgroundColor = 'green';
                                return coloredIn = true
    
                            case 'white':
                                gridSquare.style.backgroundColor = 'white';
                                return coloredIn = true
                    
                        }} else {
                            return;
                        }
    
                });
    
                gridSquare.addEventListener("mouseup", function(e) {
                    mousePressed = false
                });
    
                gridContainer.appendChild(gridSquare)
            };
    }
    
    
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

let whiteButton = document.querySelector('#white')
whiteButton.addEventListener('click', function(e) {
    console.log('current color is white')
    return selectedColor = 'white'
});

let clearButton = document.querySelector('#clear')
clearButton.addEventListener('click', function(e) {
const erase = document.querySelectorAll('.grid-square')
erase.forEach(erase => erase.style.backgroundColor = '')
});

let resizeButton = document.querySelector('#resize')
resizeButton.addEventListener('click', function(e) {
eraseGrid()
createGrid()
});