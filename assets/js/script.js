var dayDisplayEl = $("#current-day");
var containerEl = $('#time-block');

var save = $('.saveBtn');

var hour9 = $('#firstInput');
var saved9 = localStorage.getItem("hour9")

var hour10 = $('#secondInput');
var saved10 = localStorage.getItem("hour10")

var hour11 = $('#thirdInput');
var saved11 = localStorage.getItem("hour11")

var hour12 = $('#fourthInput');
var saved12 = localStorage.getItem("hour12")

var hour13 = $('#fifthInput');
var saved13 = localStorage.getItem("hour13")

var hour14 = $('#sixthInput');
var saved14 = localStorage.getItem("hour14")

var hour15 = $('#seventhInput');
var saved15 = localStorage.getItem("hour15")

var hour16 = $('#eigthInput');
var saved16 = localStorage.getItem("hour16")

var hour17 = $('#ninthInput')
var saved17 = localStorage.getItem("hour17")

var currentTime = moment().format('HH');

var firstHour = $('#9');
var secondHour = $('#10');
var thirdHour = $('#11');
var fourthHour = $('#12');
var fifthHour = $('#13');
var sixthHour = $('#14');
var seventhHour = $('#15');
var eigthHour = $('#16');
var ningthHour = $('#17');

var hourArray = [
    firstHour,
    secondHour,
    thirdHour,
    fourthHour,
    fifthHour,
    sixthHour,
    seventhHour,
    eigthHour,
    ningthHour,
];

console.log(hourArray)

// Displaying date
function displayDate() {
    var today = moment().format("dddd, MMMM Do, YYYY");
    dayDisplayEl.text(today);
};
displayDate();


// Color code time blocks based on whether passed, current or future
    for (var i = 0; i < hourArray.length; i++) {
        
        if (currentTime === hourArray[i]){
            $(".color-block").addClass("present")
            $(".color-block").removeClass("past")
            $(".color-block").removeClass("future")
        } else if (currentTime > hourArray[i]){
            $(".color-block").addClass("past")
            $(".color-block").removeClass("future")
            $(".color-block").removeClass("present")
        } else if (currentTime < hourArray[i]){
            $(".color-block").addClass("future")
            $(".color-block").removeClass("past")
            $(".color-block").removeClass("present")
        } 
    };

// Create ability to save text in each time block to local storage even when page is refreshed
save.on("click", function(event){
    event.preventDefault();
    localStorage.setItem("hour9", firstInput.value)  
}
);
save.on("click", function(event){
    event.preventDefault();
    localStorage.setItem("hour10", secondInput.value) 
});

save.on("click", function(event){
    event.preventDefault();
    localStorage.setItem("hour11", thirdInput.value) 
});

save.on("click", function(event){
    event.preventDefault();
    localStorage.setItem("hour12", fourthInput.value) 
});

save.on("click", function(event){
    event.preventDefault();
    localStorage.setItem("hour13", fifthInput.value) 
});

save.on("click", function(event){
    event.preventDefault();
    localStorage.setItem("hour14", sixthInput.value) 
});

save.on("click", function(event){
    event.preventDefault();
    localStorage.setItem("hour15", seventhInput.value) 
});

save.on("click", function(event){
    event.preventDefault();
    localStorage.setItem("hour16", eigthInput.value) 
});

save.on("click", function(event){
    event.preventDefault();
    localStorage.setItem("hour17", ninthInput.value) 
});


hour9.text(saved9)
hour10.text(saved10)
hour11.text(saved11)
hour12.text(saved12)
hour13.text(saved13)
hour14.text(saved14)
hour15.text(saved15)
hour16.text(saved16)
hour17.text(saved17)
