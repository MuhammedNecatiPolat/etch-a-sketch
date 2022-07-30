
let drawGrid = (number) => {
    let containerLength = 600;
    let squareLength = (600 - number - 1)/number;
    const container = document.querySelector('#container');
    
    for(let i = 0; i <= number; i++){
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for(let j = 0; j <= number; j++){
            const column = document.createElement('div');
            column.classList.add('square');
            row.appendChild(column);

        }
    }

    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.cssText = `border: 1px; border-style: solid; width: ${squareLength}px; height: ${squareLength}px;`

    })

}
let paintSquare = () => {
    square.style.cssText = 'background-color: black;';
}
let paintGrid = (color = 'black') => {
    const squares = document.querySelectorAll('.square');

    squares.forEach((square) => square.addEventListener('mouseover', () => square.style.backgroundColor = color));
    
}
let deleteGrid = () => {
    const rows = document.querySelectorAll('.row');
    rows.forEach(row => row.remove());
}
let redrawGrid = () => {
    const btn = document.querySelector('.grd')
    btn.addEventListener('click', () => {
        let number = +prompt('Please give the number to rearrange grid');
        deleteGrid();
        drawGrid(number);
        paintGrid();
        
    })
}

let changeColor = () => {
    let clrBtn = document.querySelector('.clr');
    
    clrBtn.addEventListener('click', () => {
        let color = prompt('Enter the color to paint');
        paintGrid(color);
    }
    );
}

drawGrid(16);
paintGrid();
redrawGrid();
changeColor();