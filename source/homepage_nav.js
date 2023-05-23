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

    if(currentDateStr===reportDatestr){
        var isread=localStorage.getItem('report_read');
        if(isread) daily_report.classList.add('hightlight');
    }
   
    daily_report.addEventListener('click',function(){
        daily_report.classList.remove('hightlight');
        localStorage.setItem('report_read', true);
    })


})