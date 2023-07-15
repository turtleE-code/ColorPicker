// console.log('ok');
console.log(document.querySelector('#colorPicker').value);

// document.querySelector('#colorText').textContent = 'カラーコード：';

// document.querySelector('#colorText').textContent = 
// 'カラーコード：' + document.querySelector('#colorPicker').value;

// document.querySelector('#colorText').textContent = 
// `カラーコード：${document.querySelector('#colorPicker').value}`

const text = document.querySelector('#colorText');
const color = document.querySelector('#colorPicker');
// text.textContent = `カラーコード:${color.value}`;

const colorBg = () => {
    text.textContent =  `カラーコード:${color.value}`;
    document.body.style.backgroundColor = color.value;

    if (color.value === '#ffffff') {
        text.textContent = `カラーコード:${color.value} (white)`;
    } else if (color.value === '#000000') {
        text.textContent = `カラーコード:${color.value} (black)`;
    }
    console.log('aaa');
}

color.addEventListener('input', colorBg);