/**
 * Make the daily report highlighted.
 * Highlight will be removed after the user has read it.
 * It will be highlighted again on the next day (if the current date matches the report date).
 * Report will only be highlighted once per day until it is read by the user.
 * Use localStorage to indicate if report has been read or not.
 */
window.addEventListener('DOMContentLoaded', function() {

    const navButton = document.getElementById('nav-button');
    const navMenu = document.getElementsByClassName('nav-content')[0];
    const navIconBars = document.getElementsByClassName('fa-bars')[0];
    const navIconXMark = document.getElementsByClassName('fa-xmark')[0];
    const navContainer = document.getElementsByClassName('nav-container')[0];
    let isNavOpen = false;

    const dailyReport = document.querySelector('.report');



    navButton.addEventListener('click', (event) => {
        if (isNavOpen)
        {
            // Close Nav
            isNavOpen = false;
            navMenu.classList.add('nav-hide');
            navMenu.classList.remove('nav-show');
            navIconBars.classList.remove('icon-hide')
            navIconXMark.classList.add('icon-hide');
            navContainer.classList.add('nav-background-hide');
            navContainer.classList.remove('nav-showBackground');
        }
        else {
            // Open Nav
            isNavOpen = true;
            navMenu.classList.add('nav-show');
            navMenu.classList.remove('nav-hide');
            navIconBars.classList.add('icon-hide');
            navIconXMark.classList.remove('icon-hide');
            navContainer.classList.add('nav-showBackground');
            navContainer.classList.remove('nav-background-hide');

           
        }
        const currentDate = new Date();
        const currentDateStr = currentDate.toDateString();
    
        const reportDate = new Date();
        const reportDateStr = reportDate.toDateString();
    
        /**
         * get the last visted date from localStorage 
         * report being highlighted on the next day
        */
        const lastVisitDate = localStorage.getItem('last_visit');

        if (lastVisitDate !== currentDateStr) {
            localStorage.removeItem('report_read');
         
        };
    
        if (currentDateStr === reportDateStr) {
            const isRead =localStorage.getItem('report_read');
            if(!isRead) {
                dailyReport.classList.add('highlight');
             
            }
        }
       
        dailyReport.addEventListener('click', function() {
            dailyReport.classList.remove('highlight');
            localStorage.setItem('report_read', true);
        });
        localStorage.setItem('last_visit', currentDateStr);
    
    });
});