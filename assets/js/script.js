var dayDisplayEl = $("#current-day");
var containerEl = $('#time-block');
// var textArea = $('.input')

var btn = document.querySelector('.save');

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
    };

// Create ability to save text in each time block to local storage even when page is refreshed
btn.addEventListener("click", function(event){
    event.preventDefault();
    localStorage.setItem("hour9", firstInput.value)  
}
);
btn.addEventListener("click", function(event){
    event.preventDefault();
    localStorage.setItem("hour10", secondInput.value) 
});

btn.addEventListener("click", function(event){
    event.preventDefault();
    localStorage.setItem("hour11", thirdInput.value) 
});

btn.addEventListener("click", function(event){
    event.preventDefault();
    localStorage.setItem("hour12", fourthInput.value) 
});

btn.addEventListener("click", function(event){
    event.preventDefault();
    localStorage.setItem("hour13", fifthInput.value) 
});

btn.addEventListener("click", function(event){
    event.preventDefault();
    localStorage.setItem("hour14", sixthInput.value) 
});

btn.addEventListener("click", function(event){
    event.preventDefault();
    localStorage.setItem("hour15", seventhInput.value) 
});

btn.addEventListener("click", function(event){
    event.preventDefault();
    localStorage.setItem("hour16", eigthInput.value) 
});

btn.addEventListener("click", function(event){
    event.preventDefault();
    localStorage.setItem("hour17", ninthInput.value) 
});


hour9.textContent = saved9;
hour10.textContent = saved10;
hour11.textContent = saved11;
hour12.textContent = saved12;
hour13.textContent = saved13;
hour14.textContent = saved14;
hour15.textContent = saved15;
hour16.textContent = saved16;
hour17.textContent = saved17;
