/**
 * Event listener function for the 'DOMContentLoaded' event.
 * 
 * @param {Event} event -The 'DOMContentLoaded' event object
 */
window.addEventListener('DOMContentLoaded', (event)=> {

    const navButton = document.getElementById('nav-button');
    const navMenu = document.getElementsByClassName('nav-content')[0];
    const navIconBars = document.getElementsByClassName('fa-bars')[0];
    const navIconXMark = document.getElementsByClassName('fa-xmark')[0];
    const navContainer = document.getElementsByClassName('nav-container')[0];
    let isNavOpen = false;

    const dailyReport = document.querySelector('.report');

    /**
    * Event listener function for the 'click' event on the navButton.
    * 
    * @param {Event} event -The 'click' event object
    */
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