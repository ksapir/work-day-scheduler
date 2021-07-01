var dayDisplayEl = $("#current-day");
var containerEl = $('#time-block');
var hour9 = $('#9');
var hour10 = $('#10');
var hour11 = $('#11');
var hour12 = $('#12');
var hour13 = $('#13');
var hour14 = $('#14');
var hour15 = $('#15');
var hour16 = $('#16');
var hour17 = $('#17');

// var hourArray = [
//     hour9,
//     hour10,
//     hour11,
//     hour12,
//     hour13,
//     hour14,
//     hour15,
//     hour16,
//     hour17,
// ]


// Displaying date
function displayDate() {
    var today = moment().format("MMMM Do, YYYY");
    dayDisplayEl.text(today);
}
displayDate()

// Color code time blocks based on whether passed, current or future

// Create the ability for user input in time blocks

// Create ability to save text in each time block to local storage even when page is refreshed

