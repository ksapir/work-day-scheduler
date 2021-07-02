var dayDisplayEl = $("#current-day");
var containerEl = $('#time-block');
var textArea = $('.input')

var hour9 = $('#9');
var hour10 = $('#10');
var hour11 = $('#11');
var hour12 = $('#12');
var hour13 = $('#13');
var hour14 = $('#14');
var hour15 = $('#15');
var hour16 = $('#16');
var hour17 = $('#17')

var currentTime = moment().format('H');
var hourArray = [9,10,11,12,13,14,15,16,17]



// Displaying date
function displayDate() {
    var today = moment().format("dddd, MMMM Do, YYYY");
    dayDisplayEl.text(today);
}
displayDate()


// Color code time blocks based on whether passed, current or future

    for (var i = 0; i < hourArray.length; i++) {
        if (currentTime> hourArray[i]){
            $(".color-block").addClass("past")
        } else if (currentTime<hourArray[i]){
            $(".color-block").addClass("future")
        } else if (currentTime === hourArray[i]){
            $(".color-block").addClass("present")
        }
    }

// Create ability to save text in each time block to local storage even when page is refreshed
