// Function imports
import { createGrid } from "./grid.js";

const resetButton = document.querySelector('#reset-button');
resetButton.addEventListener('click', () => {

    // Removing the original grid
    const container = document.querySelector('.flex-container');
    container.remove();

    // Creating and adding a new grid
    const newContainer = document.createElement('div');
    newContainer.className = 'flex-container';
    document.body.appendChild(newContainer);
    console.log('resetting...');
    createGrid(16);
})