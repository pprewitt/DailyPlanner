$(document).ready(function() {


//get date and day and place in header
var dayDateTime = moment();
$('#currentDay').text(dayDateTime.format('[Today is] dddd, MMMM, Do, YYYY'));

//get save icon
//get localstoragetodos
    //parse JSON
//create planner divs 12 add class of row and a styling class, add attribute for indexing
var planContainer = $('.container');
var hour = "";
var hourDisplay = "";
var calHours = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
for(var i=0; i < calHours.length; i++){
    var planHourDiv = $('<div>');
    planHourDiv.addClass('row plan-row');
    planHourDiv.attr('hours-index', calHours[i]);
    console.log('hours-index');
    planContainer.append(planHourDiv);

//create divs for and style classes for time, todo, save: col-md-1,10,1 respectively

//build col-md-1 for time
            
    var colDivTime = $('<div>');
    colDivTime.addClass('col-md-1 time-column border-top border-bottom border-right d-flex align-items-center justify-content-center');
    var timeSpan = $('<span>');
    
    //populate time by row
    var hourDisplay = $(planHourDiv).attr('hours-index');
    var amPm = "";
    if (hourDisplay<12) {
      hour = (hourDisplay);
        amPm = "am";
    } else if (hourDisplay>12) {
        hour = (hourDisplay)-12;
        amPm = "pm";
    } 
    else {hour = 12;
            amPm = "pm";
          };
    $(colDivTime).append(timeSpan);
    timeSpan.text(hour +" "+ amPm);  
    $(planHourDiv).append(colDivTime);
    
    
//build col-md-10 for todo
            //insert input form
            //style according to time
    var colDivEntry = $('<div>');
    hourDisplay = parseInt($(planHourDiv).attr('hours-index'));
    colDivEntry.addClass('col-md-10 entry-column d-flex align-items-center justify-content-center input');
    var entryInput = $('<input>');
    entryInput.addClass('form-control inputtransparent');
    entryInput.attr('type', 'text');
    entryInput.attr('hours-index', calHours[i]);
    // planHourDiv.attr('hours-index', calHours[i]);
    
    //styling color according to time
    if (hourDisplay < parseInt(moment().format('k'))){
        colDivEntry.removeClass('bg-success');
        colDivEntry.addClass('bg-light'); 
    } else if (hourDisplay > parseInt(moment().format('k'))){
        colDivEntry.removeClass('bg-success');
        colDivEntry.addClass('bg-success'); 
    } else {colDivEntry.addClass('bg-danger');};
    colDivEntry.append(entryInput);
    planHourDiv.append(colDivEntry);

//build col-md-1 for save; color bg-info
            //insert save icon
    var colDivSave = $('<div>');
    colDivSave.addClass('col-md-1 save-column bg-secondary d-flex align-items-center justify-content-center');
    colDivSave.attr('hours-index', calHours[i]);
    var saveBtnIcon = $('<i>');
    saveBtnIcon.addClass('fa fa-save saveBtn');      
    colDivSave.append(saveBtnIcon);
    planHourDiv.append(colDivSave);

    
};

$('.saveBtn').click(function(){
    event.preventDefault();
    console.log('saved');
    var saveIndex = $(this).attr('hours-index');
    
    $.each(entryInput, function(){
        if (($(entryInput).attr('hours-index'))===saveIndex){
            var toDo = $(inputIndex).val()
            var whenToDo = $(inputIndex).attr('hours-index');
            var thisPlanHour ={entry: toDo, index: whenToDo};
    
        var planHoursArray = JSON.parse(localStorage.getItem('planHoursArray')) || [];
        
        planHoursArray.push(thisPlanHour);
        localStorage.setItem('planHoursArray', JSON.stringify(planHoursArray)); 
            
        };
    })

   

    }); 

//make the icon a save button, onclick event takes entry div content andd saves input to array stringify JSON


//populate planner with saved inputs parse JSON
//if 
});