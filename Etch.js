let gridContainer = document.querySelector('.grid-container')

/* 
Future notes:
row = x (input)
column = row
*/

//After being run, this creates the grid
function createGrid() {

    for (let i = 0; i < 256; i++) {
        
        let gridSquare = document.createElement('div');
        gridSquare.className = 'gridSquare';
    

        gridSquare.addEventListener("mouseover", function() {
            gridSquare.style.backgroundColor = 'grey';
        });
        gridSquare.addEventListener("mouseout", function() {
            gridSquare.style.backgroundColor = 'white';
        });

        gridContainer.appendChild(gridSquare)
    }
}

