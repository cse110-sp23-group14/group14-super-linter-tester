//store name+bday in local storage for now

if (localStorage.getItem('name') === null) {
    document.getElementById('name-info').innerHTML = "We don't have your name yet.";
} else {
    document.getElementById('name-info').innerHTML = `The name we have for you is ${localStorage.getItem('name')}.`;
}


if (localStorage.getItem('birthday') === null) {
    document.getElementById('birthday-info').innerHTML = "We don't have your birthday yet.";
} else {
    document.getElementById('birthday-info').innerHTML = `The birthday we have for you is ${localStorage.getItem('birthday')}.`;
}
/**
 * Saves the string that the user inputs into local storage.
 */
function saveUserName() {
    var userName = document.getElementById('name').value;
    localStorage.setItem('name', userName);
}
function saveBirthday() {
    var Birthday = document.getElementById('birthday').value;
    localStorage.setItem('birthday', Birthday);
}

function clearName() {
    localStorage.removeItem('name');
    location.reload(); // Refresh the page
}
const clearNameButton = document.getElementById('clear-name-button');
clearNameButton.addEventListener('click', clearName);

function clearBirthday() {
    localStorage.removeItem('birthday');
    location.reload(); // Refresh the page
}
const clearBirthdayButton = document.getElementById('clear-birthday-button');
clearBirthdayButton.addEventListener('click', clearBirthday);