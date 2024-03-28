let display = document.getElementById('display');
let button = document.getElementsByClassName('input');
let value = '';

for (let i = 0; i < button.length; i++) {
    const btn = button[i];
    btn.addEventListener('click', (e) => {

        switch (e.target.innerHTML) {
            case 'DEL':
                value = value.substring(0, value.length - 1);
                display.value = value;
                break;

            case 'AC':
                value = '';
                display.value = value;
                break;

            case '=':
                value = eval(display.value);
                display.value = value;
                break;

            default:
                value += e.target.innerHTML;
                display.value = value;
                break;
        }
    });
}