

var temp = "";


// check for radio button
function check(input) {

    var input = document.getElementById("tempInput").value;
    
    if (document.getElementById("fehrenheit").checked === true) {
        // convert fehrenheit to celsius
        var x = (((parseInt(input) - 32) * 5) / 9);
            if (x > 32) {
                var temp = `<h3 style = "color:red;">${x} degrees Celsius</h3>`;
            } else if (x < 0) {
            var temp = `<h3 style = "color:blue;">${x} degrees Celsius</h3>`;
            } else if (x <= 32 && x >= 0) { 
                var temp = `<h3 style = "color:green;">${x} degrees Celsius</h3>`;
            } else {
                var temp = `<h3 style = "color:black;">Please enter a valid tempetature.</h3>`;
            }
 
    } else if (document.getElementById("celsius").checked === true && document.getElementById("fehrenheit").checked === false) {
        // convert celsius to fehrenheit 
        var x = (((parseInt(input) * 9) / 5) + 32);
        if (x > 90) {
            var temp = `<h3 style = "color:red;">${x} degrees Fehrenheit</h3>`;
        } else if (x < 32) { 
            var temp = `<h3 style = "color:blue;">${x} degrees Fehrenheit</h3>`;
        } else if (x <= 90 && x >= 32) {
            var temp = `<h3 style = "color:green;">${x} degrees Fehrenheit</h3>`;
        } else {
            var temp = `<h3 style = "color:black;">Please enter a valid tempetature.</h3>`;
        }
    }
    
    document.getElementById("tempOutput").innerHTML = temp;
}

function clear() {
    document.getElementById("tempInput").value = "";
}

function enter(event) {
    if (event.keyCode === 13) {
    console.log("working");
        check();
    }
}

// on click
document.getElementById("convert").addEventListener("click", check);
// clear the input
document.getElementById("clear").addEventListener("click", clear);
// on enter input
document.getElementById("tempInput").addEventListener("keypress", enter);
// on  enter fehrenheit
document.getElementById("fehrenheit").addEventListener("keypress", enter);
// on enter celsius
document.getElementById("celsius").addEventListener("keypress", enter);