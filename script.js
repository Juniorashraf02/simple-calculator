const display = document.getElementById('display');
const buttons = document.getElementsByClassName('btn');
const total = document.getElementById('total');
for (const button of buttons) {

    button.addEventListener('click', function (e) {

        switch (e.target.innerText) {
            case ("AC"):
                display.innerText = '';
                total.innerText = '0';
                break;
            case ('DEL'):
                display.innerText = display.innerText.slice(0, -1);
                break;
            case ('='):
                if (display.innerText === '') {
                    break;
                }
                total.innerText = eval(display.innerText)
                display.innerText = '';
                break;
            default:
                display.innerText += e.target.innerText;
        };


    });
}