var liveTime = $('#currentDay');

//displaying the time and day
function displayTime(){
    var timeNow = moment().format('DD MMM YYYY [at] hh:mm:ss a');
    liveTime.text(timeNow);
}

setInterval (displayTime, 1000);

//time blocks
var workHours = [9, 10 ,11, 12, 13, 14, 15, 16, 17];

function blockTime(){
    for (var i=0; i < workHours.length; i++){
        
     //creating each blocks
        var blockEL = $("<div>");
        blockEL.addClass("row time-block");
        
        //create first column for the time 
        var hourlyTimeEL = $("<div>");
        hourlyTimeEL.addClass("col-1 hour");
        hourlyTimeEL.text(moment().hour(workHours[i]).format("hA"));
        blockEL.append(hourlyTimeEL);

        //create second column for the text area
        var textInputColEL = $("<div>");
        textInputColEL.addClass("col-10");
        var inputEL = $("<input>");
        textInputColEL.append(inputEL);

        //changing the colour of the times in the blocks
        if (moment().hour() > workHours[i]){
            textInputColEL.addClass("past");
        }else if (moment().hour() < workHours[i] ){
            textInputColEL.addClass("future");
        }else if (moment().hour()=== workHours[i]){
            textInputColEL.addClass("present");
        }

        blockEL.append(textInputColEL);
        $("#time-block-container").append(blockEL);
        

        
    }
}


blockTime();
