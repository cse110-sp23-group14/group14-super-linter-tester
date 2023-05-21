//store name+bday in local storage for now

if (localStorage.getItem('name') === null) {
    document.getElementById('name-info').innerHTML = "We don't have your name yet.";
} else {
    document.getElementById('name-info').innerHTML = `The name we have for you is ${localStorage.getItem('name')}.`;
}

function saveUserName() {
    var userName = document.getElementById('name').value;
    localStorage.setItem('name', userName);
}