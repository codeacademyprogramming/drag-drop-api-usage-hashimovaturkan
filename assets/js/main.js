
// TODO ITEM CODE
// const todoItems = [...document.querySelectorAll('.todo-item')];
// const zones = Array.from(document.querySelectorAll('.drop-zone'));

// todoItems.forEach(todoItem => {
//     todoItem.addEventListener('dragstart', (e) => {
//         e.dataTransfer.setData('text', e.target.id);
//         console.log('drag started');
//     });

//     todoItem.addEventListener('dragend', () => {
//         console.log('drag ended');
//     });

// })

// zones.forEach(zone => {
//     zone.addEventListener('dragenter', (e) => {
//         e.preventDefault();
//         zone.style.backgroundColor = 'green';
//         zone.style.color = 'white';
//     });

//     zone.addEventListener('dragover', (e) => {
//         e.preventDefault();
//     })

//     zone.addEventListener('dragleave', (e) => {
//         e.preventDefault();
//         zone.style.backgroundColor = 'initial';
//     });

//     zone.addEventListener('drop', (e) => {
//         e.preventDefault();
//         const draggedElementId = e.dataTransfer.getData('text'); // 1
//         const draggedElement = document.getElementById(draggedElementId);
//         zone.prepend(draggedElement);
//         zone.style.backgroundColor = 'initial';
//     });
// })


// SHARIK-LER CODE
const colorBoxes = document.querySelectorAll('span');
const littleColorBoxes = document.querySelectorAll('.little-color-circle');
const bigBox = document.querySelector('.result-color-circle');

colorBoxes.forEach(colorBox => {
    const redTone = colorBox.getAttribute('data-red');
    const greenTone = colorBox.getAttribute('data-green');
    const blueTone = colorBox.getAttribute('data-blue');

    colorBox.style.backgroundColor = `rgb(${redTone},${greenTone},${blueTone})`;
});


littleColorBoxes.forEach(littleColorBox => {
    littleColorBox.addEventListener('dragstart', (e) => {
        const red = +littleColorBox.getAttribute('data-red');
        const green = +littleColorBox.getAttribute('data-green');
        const blue = +littleColorBox.getAttribute('data-blue');
        const data = {
            red,
            green,
            blue
        };
        e.dataTransfer.setData('text', JSON.stringify(data));
    });
});

bigBox.addEventListener('dragover', (e) => {
    e.preventDefault();
});

bigBox.addEventListener('drop', (e) => {
    e.preventDefault();
    const { red, green, blue } = JSON.parse(e.dataTransfer.getData('text'));
    const bigBoxRed = +bigBox.getAttribute('data-red');
    const bigBoxGreen = +bigBox.getAttribute('data-green');
    const bigBoxBlue = +bigBox.getAttribute('data-blue');

    const resultRed = (red + bigBoxRed) / 2;
    const resultGreen = (green + bigBoxGreen) / 2;
    const resultBlue = (blue + bigBoxBlue) / 2;

    bigBox.style.backgroundColor = `rgb(${resultRed}, ${resultGreen}, ${resultBlue})`;
});




















