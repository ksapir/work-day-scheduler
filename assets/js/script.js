var dayDisplayEl = $("#current-day");

// Displaying date
function displayDate() {
    var today = moment().format("MMMM Do, YYYY");
    dayDisplayEl.text(today);
}
displayDate()


// Create time blocks for 9am-5pm

// Color code time blocks based on whether passed, current or future

// Create the ability for user input in time blocks

// Create ability to save text in each time block to local storage even when page is refreshed

