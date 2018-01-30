

var input = document.getElementById("tempInput").value;


var temp = "";


// check for radio button
function check(input) {
    
    if (document.getElementById("fehrenheit").checked === true) {
        
        // convert fehrenheit to celsius
        // Deduct 32, then multiply by 5, then divide by 9
        
        var temp = (((parseInt(input) - 32) * 5) / 9);
        console.log(temp);
        return temp;
        
    } else {
        
        // convert celsius to fehrenheit
        // Multiply by 9, then divide by 5, then add 32
        
        var temp = (((parseInt(input) * 9) / 5) + 32);
        console.log(temp);
        return temp;
        
    }
}

document.getElementById("convert").addEventListener("click", check);

document.getElementById("tempOutput").innerHTML = temp;