const time = document.getElementById('time')
const greeting = document.getElementById('greeting')
const name = document.getElementById('name')
const focus = document.getElementById('focus')
const date = document.getElementById('date')

function showTime() {
    const dateNow = new Date()
    const dateDate = dateNow.getDate()
    const dayOfWeek = dateNow.getDay()
    const hours = dateNow.getHours()
    const minutes = dateNow.getMinutes()
    const seconds = dateNow.getSeconds()
    const month = dateNow.getMonth()

    time.innerHTML = `${getZeros(hours)}:${getZeros(minutes)}:${getZeros(seconds)}`
    date.innerHTML = `${getDayOfWeek(dayOfWeek)}, ${getZeros(dateDate)} ${getMonthOfYear(month)}`

    setTimeout(showTime, 1000)
}

function getZeros(n) {
    return (n < 10) ? `0${n}` : n
}

function setBgGreet() {
    const today = new Date()
    hour = today.getHours()
    if (hour < 6) {
        // Night
        document.body.style.backgroundImage =
            "url(./assets/images/night/07.jpg)"
        greeting.textContent = 'Good Night, ';
    } else if (hour < 12) {
        // Morning
        document.body.style.backgroundImage =
            "url(./assets/images/morning/06.jpg)"
        greeting.textContent = 'Good Morning, ';
    } else if (hour < 18) {
        // Afternoon
        document.body.style.backgroundImage =
            "url(./assets/images/day/07.jpg)"
        greeting.textContent = 'Good Afternoon, '
    } else {
        // Evening
        document.body.style.backgroundImage =
            "url(./assets/images/evening/04.jpg)"
        greeting.textContent = 'Good Evening, '
        document.body.style.color = 'white'
    }
}

function getName() {
    if (localStorage.getItem('name') === null || localStorage.getItem('name') === '') {
        name.textContent = '[Enter Name]'
    } else {
        name.textContent = localStorage.getItem('name')
    }
}

function setName(e) {
    if (e.type === 'keypress') {
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText.trim())
            name.blur()
        }
    } else {
        localStorage.setItem('name', e.target.innerText.trim())
    }
}

function getFocus() {
    if (localStorage.getItem('focus') === null || localStorage.getItem('focus') === '') {
        focus.textContent = '[Enter Focus]'
    } else {
        focus.textContent = localStorage.getItem('focus')
    }
}

function setFocus(e) {
    if (e.type === 'keypress') {
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText.trim())
            focus.blur()
        }
    } else {
        localStorage.setItem('focus', e.target.innerText.trim())
    }
}

function enterName(e) {
    if (name.textContent === '[Enter Name]')
        name.textContent = ''
}
function enterFocus(e) {
    if (focus.textContent === '[Enter Focus]')
        focus.textContent = ''
}

function getDayOfWeek(n) {
    switch (n) {
        case 1:
            return 'Monday'
        case 2:
            return 'Tuesday'
        case 3:
            return 'Wednesday'
        case 4:
            return 'Thursday'
        case 5:
            return 'Friday'
        case 6:
            return 'Saturday'
        case 0:
            return 'Sunday'
    }
}

function getMonthOfYear(n) {
    switch (n) {
        case 1:
            return 'February'
        case 2:
            return 'March'
        case 3:
            return 'April'
        case 4:
            return 'May'
        case 5:
            return 'June'
        case 6:
            return 'July'
        case 7:
            return 'August'
        case 8:
            return 'September'
        case 9:
            return 'October'
        case 10:
            return 'November'
        case 11:
            return 'December'
        case 0:
            return 'January'
    }
}

/* Run */
showTime()
setBgGreet()
getName()
getFocus()

name.addEventListener('keypress', setName)
name.addEventListener('blur', setName)
focus.addEventListener('keypress', setFocus)
focus.addEventListener('blur', setFocus)

name.addEventListener('blur', getName)
name.addEventListener('focus', enterName)
focus.addEventListener('focus', enterFocus)
focus.addEventListener('blur', getFocus)