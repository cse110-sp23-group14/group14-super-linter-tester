// Call the functions to display the stored name and birthday
displayStoredName();
displayStoredBirthday();


/**
 * Displays the stored birthday information on the webpage.
 * @function
 * @returns {void}
 */
function displayStoredBirthday() {
    const birthdayInfoElement = document.getElementById('birthday-info');
    const storedBirthday = localStorage.getItem('birthday');

    if (storedBirthday) {
        birthdayInfoElement.innerHTML = `The birthday we have for you is ${storedBirthday}.`;
    } else {
        birthdayInfoElement.innerHTML = "We don't have your birthday yet.";
    }
}


/**
 * Displays the stored name information on the webpage.
 * @function
 * @returns {void}
 */
function displayStoredName() {
    const nameInfoElement = document.getElementById('name-info');
    const storedName = localStorage.getItem('name');

    if (storedName) {
        nameInfoElement.innerHTML = `The name we have for you is ${storedName}.`;
    } else {
        nameInfoElement.innerHTML = "We don't have your name yet.";
    }
}


/**
 * Saves the string entered by the user as their name into local storage.
 */
function saveUserName() {
    var userName = document.getElementById('name').value;
    localStorage.setItem('name', userName);
}


function saveBirthday() {
    var birthdayMonth = document.getElementById('birthday-month').value;
    var birthdayDay = document.getElementById('birthday-day').value;
    var birthday = birthdayMonth + '.' + birthdayDay;
    localStorage.setItem('birthday', birthday);
}

function updateBirthdayDays() {
    var monthSelect = document.getElementById('birthday-month');
    var daySelect = document.getElementById('birthday-day');
    var selectedMonth = parseInt(monthSelect.value);
    var daysInMonth = new Date(2023, selectedMonth, 0).getDate(); // Get the number of days in the selected month

    daySelect.innerHTML = ''; // Clear previous options

    for (var i = 1; i <= daysInMonth; i++) {
        var option = document.createElement('option');
        option.value = i;
        option.text = i;
        daySelect.appendChild(option);
    }
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


function navigateToNewPage(){
    window.location.href = "feedback.html";
}

function nagigateToProfile(){
    window.location.href = "userprofile.html"
}