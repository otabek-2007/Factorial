var btn = document.getElementById('btn')
var num = document.getElementById('num')
var result = document.getElementById('result')
var boxResult = document.querySelector('.result-box')
var reset = document.querySelector('#reset')

btn.addEventListener('click', function () {
    if (num.value == '') return 0;

    if (num.value < 0) {
        alert('You cannot enter devision number!')
        num.value = ''
        if (!boxResult.classList.contains('disable')) {
            boxResult.classList.add('disable')
        }
        return true;

    }

    var counter = 1;
    for (let i = 1; i <= num.value; i++) {
        counter *= i;
    }

    result.textContent = counter;
    if (boxResult.classList.contains('disable')) {
        boxResult.classList.remove('disable')
    }
})

reset.addEventListener('click', function () {
    num.value = ''
    result.textContent = ''
    if (!boxResult.classList.contains('disable')) {
        boxResult.classList.add('disable')
    }
})

