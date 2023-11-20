document.addEventListener('DOMContentLoaded', () => {
    let dragElement;
    const elements = document.querySelectorAll('.element');


    function handleDragStart(e) {
        dragElement = e.target;
        dragElement.classList.add('selected');
        dragElement.style.opacity = '0.5';
    }

    function handleDragOver(e) {
        e.preventDefault();
    }

    function handleDragEnter(e) { }

    function handleDragLeave(e) { }

    function handleDrop(e) {
        e.preventDefault();
        dragElement.classList.remove('selected');
        dragElement.style.opacity = '1';

        const area = e.currentTarget;
        const areaBorderColor = window.getComputedStyle(area).borderColor;

        if (areaBorderColor === window.getComputedStyle(dragElement).backgroundColor) {
            const newDiv = document.createElement('div');
            newDiv.id = dragElement.id;
            newDiv.className = `element ${dragElement.id}`;
            newDiv.draggable = false;
            area.appendChild(newDiv);
            dragElement.style.display = 'none';
        }
    }

    function handleDragEnd() {

    }

    elements.forEach(element => {
        element.draggable = true;
        element.addEventListener('dragstart', handleDragStart);
        element.addEventListener('dragend', handleDragEnd);
    });

    const areas = document.querySelectorAll('.area');
    areas.forEach(area => {
        area.addEventListener('dragover', handleDragOver);
        area.addEventListener('dragenter', handleDragEnter);
        area.addEventListener('dragleave', handleDragLeave);
        area.addEventListener('drop', handleDrop);
    });
});
