document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.grid-container');
    for (let i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.className = 'grid-item';
        container.appendChild(div);
    }
});