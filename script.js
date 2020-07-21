$(document).ready(function() {


//get date and day and place in header
var dayDateTime = moment();
$('#currentDay').text(dayDateTime.format('[Today is] dddd, MMMM, Do, YYYY'));

//get save icon
//get 
//get localstoragetodos
    //parse JSON
//create planner divs 12 add class of row and a styling class, add attribute for indexing

for(let hours=0; hours<12; hours++){
    var planHourDiv = $('<div>');
    planHourDiv.addClass('row plan-row');
    planHourDiv.attr('hours-index', hours);
    $(".container").append(planHourDiv)

//create divs for and style classes for time, todo, save: col-md-3,8,1 respectively
    var colDivTime = $('<div>');
    colDivTime.addClass('col-md-3 time-column border-top border-bottom');
    var colDivEntry = $('<div>');
    colDivEntry.addClass('col-md-8 entry-column bg-danger');
    var colDivSave = $('<div>');
    colDivSave.addClass('col-md-1 save-column bg-secondary');
    $(planHourDiv).append(colDivTime, colDivEntry, colDivSave);
    
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