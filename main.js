const bacground = document.getElementById('background');

let colorsArr = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'
];

window.addEventListener('keypress', e => {
    if (e.keyCode == 32) {
        let hex = '#';
        let textCo = '#';
        for (i = 0; i < 6; i++) {
            let bg = Math.floor(Math.random() * colorsArr.length);
            hex += colorsArr[bg];
            bacground.textContent = hex;
            document.body.style.backgroundColor = hex;
        };
    };
});