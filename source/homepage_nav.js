/**
 * make the daily reort highlighted
 * highlight will be removed after the user read it
 * it will be highlighted again on the next day (if the current date matches the report date)
 * report will only be highlighted once per day until it is read by the user
 * use localStorage to indicate if report has been read or not
 */
window.addEventListener('DOMContentLoaded', function() {
    const daily_report = document.querySelector('.report');

    const currentDate = new Date();
    const currentDateStr = currentDate.toDateString();

    const reportDate = new Date();
    const reportDateStr = reportDate.toDateString();

    /**
     * get the last visted date from localStorage 
     * report being highlighted on the next day
    */
    const lastVisitDate = localStorage.getItem('last_visit');
    if (lastVisitDate != currentDateStr) {
        localStorage.removeItem('report_read');
    };

    if (currentDateStr == reportDateStr) {
        const isread = this.localStorage.getItem('report_read');
        if(!isread) {
            daily_report.classList.add('highlight');
        }
    }
   
    daily_report.addEventListener('click', function() {
        daily_report.classList.remove('highlight');
        localStorage.setItem('report_read', true);
    });
    localStorage.setItem('last_visit', currentDateStr);

    const navMenuButton = document.getElementById('navMenuButton');
    const navMenu = document.getElementsByClassName('nav-content')[0];
    const navContainer = document.getElementsByClassName('nav-container')[0];
    let isNavOpen = false;
    navMenuButton.addEventListener('click', (event) => {
        if (isNavOpen)
        {
            isNavOpen = false;
            navMenu.classList.add('navHide');
            navMenu.classList.remove('navShow');
            navContainer.classList.add('navHideBackground');
            navContainer.classList.remove('navShowBackground');
        }
        else {
            isNavOpen = true;
            navMenu.classList.add('navShow');
            navMenu.classList.remove('navHide');
            navContainer.classList.add('navShowBackground');
            navContainer.classList.remove('navHideBackground');
        }
    });
});