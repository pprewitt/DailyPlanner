$(document).ready(function() {
//get all stored hour and populate to HTML or create array if new
var planHoursArray = JSON.parse(localStorage.getItem('planHoursArray')) || [];

//get date and day and place in header
var dayDateTime = moment();
$('#currentDay').text(dayDateTime.format('[Today is] dddd, MMMM, Do, YYYY'));

//get save icon
//get localstoragetodos
    //parse JSON
//create planner divs 12 add class of row and a styling class, add attribute for indexing
var planContainer = $('.container');

for(var hour = 7; hour < 19; hour++){
    let index = hour-7;
    var planHourDiv = $('<div>');
    planHourDiv.addClass('row plan-row');
    planHourDiv.attr('hours-index', hour);
    console.log('hours-index');
    planContainer.append(planHourDiv);

//create divs for and style classes for time, todo, save: col-md-1,10,1 respectively

//build col-md-1 for time
            
    var colDivTime = $('<div>');
    colDivTime.addClass('col-md-1 time-column border-top border-bottom border-right d-flex align-items-center justify-content-center');
    var timeSpan = $('<span>');
    
    //populate time by row
    var hourDisplay = 0;
    var amPm = "";
    if (hour < 12) {
      hourDisplay= hour;
        amPm = "am";
    } else if (hour>12){
       hourDisplay = hour-12;
        amPm = "pm";
    }else {hourDisplay=12;
        amPm="pm"
    };

    $(colDivTime).append(timeSpan);
    timeSpan.text(hourDisplay +" "+ amPm);  
    $(planHourDiv).append(colDivTime);
    
    
//build col-md-10 for todo
            //insert input form
            //style according to time
    var colDivEntry = $('<div>');
    hourDisplay = parseInt($(planHourDiv).attr('hours-index'));
    colDivEntry.addClass('col-md-10 input entry-column d-flex align-items-center justify-content-center');
    var entryInput = $('<input>');
    entryInput.addClass('form-control inputtransparent');
    entryInput.attr('type', 'text');
    
    entryInput.attr('hours-index', index);
    // planHourDiv.attr('hours-index', calHours[i]);
    
    entryInput.val(planHoursArray[index]);

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
    colDivSave.attr('save-id', index);
    var saveBtnIcon = $('<i>');
    saveBtnIcon.addClass('fa fa-save saveBtn');      
    colDivSave.append(saveBtnIcon);
    planHourDiv.append(colDivSave);
    saveBtnIcon.attr('save-id', index); 

    
};



$('.saveBtn').click(function(){
    event.preventDefault();
    let index = $(this).attr('save-id');
    let matchingInput = $(".input").find("[hours-index='" + index + "']");
   
   
    let value = $(matchingInput).val();

    planHoursArray[index] = value;
        localStorage.setItem('planHoursArray', JSON.stringify(planHoursArray));
    
        

    }); 

//make the icon a save button, onclick event takes entry div content andd saves input to array stringify JSON


//populate planner with saved inputs parse JSON
//if 
});