// Function to create a fresh etch-a-sketch grid
export function createGrid(size) {

    // Reference to the grid container
    const container = document.querySelector('.flex-container');

    // Adding the flex-rows and cells within each row
    for (let i = 0; i < size; i++) {

        // Reference to each row of the column
        const rowDiv = document.createElement('div');
        rowDiv.className = 'flex-row';

        // Adding the cells in each row
        for (let j = 0; j < size; j++) {
            const cell = document.createElement('div');
            cell.className = 'flex-cell';
            rowDiv.appendChild(cell);
        }
        container.appendChild(rowDiv);     
    }
    const cells = document.querySelectorAll('.flex-cell');
    cells.forEach(cell => {
        cell.addEventListener('mouseover', (event) => {
            console.log("hovered");
            event.target.style.backgroundColor = 'red';
        });
    })
}