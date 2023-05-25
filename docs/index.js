/*
// Get modal
var modal = document.getElementsByClassName('modal');

// Get modal button
var btn2 = document.getElementsByClassName("recipeCard");

// Get closeTop modal button 
var span = document.getElementsByClassName("close");

// Open modal when user clicks on recipe button 
btn2[0].onclick = function() {
    modal[0].style.display = "block";
}

// Close modal when user clicks on the closeTop button
span[0].onclick = function() {
    modal[0].style.display = "none";
}

span[1].onclick = function() {
    modal[1].style.display = "none";
}

span[2].onclick = function() {
    modal[2].style.display = "none";
}

span[3].onclick = function() {
    modal[3].style.display = "none";
}

span[4].onclick = function() {
    modal[4].style.display = "none";
}

span[5].onclick = function() {
    modal[5].style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal[0]) {
         modal[0].style.display = "none";
     } 
}
*/

var datamap = new Map([
            [document.getElementById("recipeOne"), document.getElementById("modalOne")],
            [document.getElementById("recipeTwo"), document.getElementById("modalTwo")],
            [document.getElementById("recipeThree"), document.getElementById("modalThree")],
            [document.getElementById("recipeFour"), document.getElementById("modalFour")],
            [document.getElementById("recipeFive"), document.getElementById("modalFive")],
            [document.getElementById("recipeSix"), document.getElementById("modalSix")],
            [document.getElementById("recipeSeven"), document.getElementById("modalSeven")],
            [document.getElementById("recipeEight"), document.getElementById("modalEight")],
            [document.getElementById("recipeNine"), document.getElementById("modalNine")],
            [document.getElementById("recipeTen"), document.getElementById("modalTen")],
            [document.getElementById("recipeEleven"), document.getElementById("modalEleven")],
            [document.getElementById("recipeTwelve"), document.getElementById("modalTwelve")],
        ]);

        datamap.forEach((value, key) => {
            doModal(key, value);
        });

        function doModal(anchor, popupbox) {

            // Get the <span> element that closes the modal
            var span = popupbox.getElementsByClassName("close")[0];

            anchor.addEventListener("click", function (event) {
                popupbox.style.display = "block";
            });

            span.addEventListener("click", function (event) {
                popupbox.style.display = "none";
            });

            window.addEventListener("click", function (event) {
                if (event.target == popupbox) {
                    popupbox.style.display = "none";
                }
            });
        }