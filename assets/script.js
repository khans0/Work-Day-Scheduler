var liveTime = $('#currentDay')

//displaying the time 
function displayTime(){
    var timeNow = moment().format('DD MMM YYYY [at] hh:mm:ss a')
    liveTime.text(timeNow)
}
setInterval (displayTime, 1000)