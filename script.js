
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
let paintGrid = () => {
    const squares = document.querySelectorAll('.square');

    squares.forEach((square) => square.addEventListener('mouseover', () => square.style.backgroundColor = 'black'));
    
}
let deleteGrid = () => {
    const rows = document.querySelectorAll('.row');
    rows.forEach(row => row.remove());
}
let redrawGrid = () => {
    const btn = document.querySelector('.button')
    btn.addEventListener('click', () => {
        let number = +prompt('Please give the number to rearrange grid');
        deleteGrid();
        drawGrid(number);
        paintGrid();
        
    })
}

drawGrid(16);
paintGrid();
redrawGrid();
