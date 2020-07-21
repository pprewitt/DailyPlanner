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
for(var hours=7; hours<20; hours++){
    var planHourDiv = $('<div>');
    planHourDiv.addClass('row plan-row');
    planHourDiv.attr('hours-index', hours);
    planContainer.append(planHourDiv)

//create divs for and style classes for time, todo, save: col-md-3,8,1 respectively
    var colDivTime = $('<div>');
    colDivTime.addClass('col-md-3 time-column border-top border-bottom p-3');
    


    
    var timeSpan = $('<span>');
    //cant get hours to populate properly
    var hour = $(planHourDiv['hours-index']);
    
    
    var hourDisplay = 0;
    var amPm = "";
    if (hour>12) {
        hourDisplay = hour-12;
        amPm = "am";
    }else {
            displayHour = hour;
            ampm = "am";
          };
    timeSpan.text(hourDisplay, amPm);
    
    $(planHourDiv).append(colDivTime);
    
    $(colDivTime).append(timeSpan);

    var colDivEntry = $('<div>');
    colDivEntry.addClass('col-md-8 entry-column bg-danger p-3');
    var entryInput = $('<input>');
    entryInput.addClass('form-control');
    colDivEntry.append(entryInput);
    planHourDiv.append(colDivEntry);


    var colDivSave = $('<div>');
    colDivSave.addClass('col-md-1 save-column bg-secondary p-3');
    var saveBtnIcon = $('<i>');
    saveBtnIcon.addClass('far fa-save');      
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