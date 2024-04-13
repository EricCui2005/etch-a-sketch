// Script to add grid elements to the page
document.addEventListener('DOMContentLoaded', () => {
    createGrid();
});

function createGrid() {
    const container = document.querySelector('.flex-container');
    for (let i = 0; i < 16; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'flex-row';
        for (let j = 0; j < 16; j++) {
            const cell = document.createElement('div');
            cell.className = 'flex-cell';
            rowDiv.appendChild(cell);
        }
        container.appendChild(rowDiv);     
    }
}