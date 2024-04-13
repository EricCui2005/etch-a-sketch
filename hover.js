document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('.flex-cell');
    cells.forEach(cell => {
        cell.addEventListener('mouseover', (event) => {
            console.log("hovered");
            event.target.style.backgroundColor = 'red';
        });
    })
});