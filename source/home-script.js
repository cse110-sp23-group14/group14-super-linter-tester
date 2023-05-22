/**
 * Retrieves the stored name from local storage and displays it on the page.
 */
if (localStorage.getItem('name') === null) {
    document.getElementById('name-info').innerHTML = "We don't have your name yet.";
} else {
    document.getElementById('name-info').innerHTML = `The name we have for you is ${localStorage.getItem('name')}.`;
}

/**
 * Retrieves the stored birthday from local storage and displays it on the page.
 */
if (localStorage.getItem('birthday') === null) {
    document.getElementById('birthday-info').innerHTML = "We don't have your birthday yet.";
} else {
    document.getElementById('birthday-info').innerHTML = `The birthday we have for you is ${localStorage.getItem('birthday')}.`;
}

/**
 * Saves the string entered by the user as their name into local storage.
 */
function saveUserName() {
    var userName = document.getElementById('name').value;
    localStorage.setItem('name', userName);
}

/**
 * Saves the string entered by the user as their birthday into local storage.
 */
function saveBirthday() {
    var Birthday = document.getElementById('birthday').value;
    localStorage.setItem('birthday', Birthday);
}


/**
 * Clears the stored name from local storage and refreshes the page.
 */
function clearName() {
    localStorage.removeItem('name');
    location.reload(); // Refresh the page
}
const clearNameButton = document.getElementById('clear-name-button');
clearNameButton.addEventListener('click', clearName);


/**
 * Clears the stored birthday from local storage and refreshes the page.
 */
function clearBirthday() {
    localStorage.removeItem('birthday');
    location.reload(); // Refresh the page
}
const clearBirthdayButton = document.getElementById('clear-birthday-button');
clearBirthdayButton.addEventListener('click', clearBirthday);