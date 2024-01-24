let currentDate = new Date()

function age() {

    var y1 = document.querySelector('#year').value;
    var m1 = document.querySelector('#month').value;
    var d1 = document.querySelector('#day').value;

    if (y1 == currentDate.getFullYear() && m1 >= currentDate.getMonth() && d1 >= currentDate.getDate()) {
        alert("You can't enter today's date")
    }

    else if (y1 == '' || m1 == '' || d1 == '') {
        alert("There are empty fields")
    }

    else if (y1 > 0 && y1 <= currentDate.getFullYear() && m1 > 0 && m1 < 13 && d1 > 0 && d1 < 32) {
        var date = new Date()
        var d2 = date.getDate()
        var m2 = date.getMonth() + 1
        var y2 = date.getFullYear()
        var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

        if (d1 > d2) {
            d2 = d2 + month[m2 - 1]
            m2 = m2 - 1
        }
        if (m1 > m2) {
            m2 = m2 + 12
            y2 = y2 - 1
        }
        var d = d2 - d1
        var m = m2 - m1
        var y = y2 - y1

        document.querySelector(".empty-year").innerHTML = y
        document.querySelector(".empty-month").innerHTML = m
        document.querySelector(".empty-day").innerHTML = d
    }
    else {
        alert("error in date")
    }
}

let clear = document.querySelector(".bx-x-circle")

if (clear) {
    clear.addEventListener("click", () => {
        document.querySelector('#year').value = ''
        document.querySelector('#month').value = ''
        document.querySelector('#day').value = ''

        document.querySelector(".empty-year").innerHTML = '- - '
        document.querySelector(".empty-month").innerHTML = '- - '
        document.querySelector(".empty-day").innerHTML = '- - '
    })
}