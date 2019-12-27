let gridContainer = document.querySelector('.grid-container')

/* 
Future notes:
row = x (input)
column = row
JS code might not overwrite CSS specifications
*/

//After being run, this creates the Grid squares in 16x16 formation
function createGrid() {

    for (let i = 0; i < 256; i++) {
        
        let gridSquare = document.createElement('div');
        gridSquare.className = 'gridSquare';
        gridContainer.appendChild(gridSquare)
    }
}

