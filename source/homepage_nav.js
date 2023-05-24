/**
 * make the daily reort highlighted
 * highlight will be removed after the user read it
 * it will be highlighted again on the next day (if the current date matches the report date)
 * report will only be highlighted once per day until it is read by the user
 * use localStorage to indicate if report has been read or not
 */
window.addEventListener('DOMContentLoaded',function(){
    var daily_report=document.querySelector('.report');

    var currentDate = new Date();
    var currentDateStr=currentDate.toDateString();

    var reportDate=new Date();
    var reportDatestr=reportDate.toDateString();

    /**get the last visted date from localStorage 
     * report being highlighted on the next day
    */
    var lastvisitDate=this.localStorage.getItem('last_visit');
    if(lastvisitDate!==currentDateStr) this.localStorage.removeItem('report_read');

    if(currentDateStr===reportDatestr){
        var isread=this.localStorage.getItem('report_read');
        if(!isread) daily_report.classList.add('highlight');
    }
   
    daily_report.addEventListener('click',function(){
        daily_report.classList.remove('highlight');
        localStorage.setItem('report_read',true);
    });
    this.localStorage.setItem('last_visit',currentDateStr);


})