const box = document.getElementById("list")
let x = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 15 == 0) {
        x = 'Fizzbuzz';
    } else if (i % 3 == 0) {
        x = 'Fizz';
    } else if (i % 5 == 0) {
        x = 'Buzz';
    } else {
        x = i;
    }
    if (isNaN(x)) { // se x è una stringa entri
        box.innerHTML += `<li class="box box-${x}">${x}</li>`;
    } else {
        box.innerHTML += `<li class="box">${x}</li>`;
    }
}