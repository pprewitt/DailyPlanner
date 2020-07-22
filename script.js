$(document).ready(function() {


//get date and day and place in header
var dayDateTime = moment();
$('#currentDay').text(dayDateTime.format('[Today is] dddd, MMMM, Do, YYYY'));

//get save icon
//get 
//get localstoragetodos
    //parse JSON
//create planner divs 12 add class of row and a styling class, add attribute for indexing
var planContainer = $('.container');
var hour = "";
var calHours = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
for(var i=0; i < calHours.length; i++){
    var planHourDiv = $('<div>');
    planHourDiv.addClass('row plan-row');
    planHourDiv.attr('hours-index', calHours[i]);
    console.log('hours-index');
    planContainer.append(planHourDiv);

//create divs for and style classes for time, todo, save: col-md-1,10,1 respectively
    var colDivTime = $('<div>');
    colDivTime.addClass('col-md-1 time-column border-top border-bottom border-right d-flex align-items-center justify-content-center');
    var timeSpan = $('<span>');
    //cant get hours to populate properly
    
    var hourDisplay = $(planHourDiv).attr('hours-index');
    var amPm = "";
    if (hourDisplay<12) {
      hour = (hourDisplay);
        amPm = "am";
    } else if (hourDisplay>12) {
        hour = (hourDisplay)-12;
        amPm = "pm";
    } 
    else {
            hour = 12;
            amPm = "pm";
          };
    $(colDivTime).append(timeSpan);
    timeSpan.text(hour +" "+ amPm);  
    $(planHourDiv).append(colDivTime);
    
    

    var colDivEntry = $('<div>');
    colDivEntry.addClass('col-md-10 entry-column bg-success d-flex align-items-center justify-content-center');
    var entryInput = $('<input>');
    entryInput.addClass('form-control inputtransparent');
    colDivEntry.append(entryInput);
    planHourDiv.append(colDivEntry);


    var colDivSave = $('<div>');
    colDivSave.addClass('col-md-1 save-column bg-secondary d-flex align-items-center justify-content-center');
    var saveBtnIcon = $('<i>');
    saveBtnIcon.addClass('fa fa-save');      
    colDivSave.append(saveBtnIcon);
    planHourDiv.append(colDivSave);

    // , colDivEntry, colDivSave
    
}

        //build col-md-3 for time
            //populate time
        //build col-md-8 for todo
            //insert input form
        //build col-md-1 for save; color bg-info
            //insert save icon
//rows change color style based on time: past bg-secondary, current bg-danger, future bg-success

//save input to array function stringify JSON

//if 
});