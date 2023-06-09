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
            [document.getElementById("recipeThirteen"), document.getElementById("modalThirteen")],
            [document.getElementById("recipeFourteen"), document.getElementById("modalFourteen")],
            [document.getElementById("recipeFifteen"), document.getElementById("modalFifteen")],
            [document.getElementById("recipeSixteen"), document.getElementById("modalSixteen")],
            [document.getElementById("recipeSeventeen"), document.getElementById("modalSeventeen")],
            [document.getElementById("recipeEighteen"), document.getElementById("modalEighteen")],
            [document.getElementById("recipeNineteen"), document.getElementById("modalNineteen")],
            [document.getElementById("recipeTwenty"), document.getElementById("modalTwenty")],
            [document.getElementById("recipeTwentyOne"), document.getElementById("modalTwentyOne")],
            [document.getElementById("recipeTwentyTwo"), document.getElementById("modalTwentyTwo")],
            [document.getElementById("recipeTwentyThree"), document.getElementById("modalTwentyThree")],
            [document.getElementById("recipeTwentyFour"), document.getElementById("modalTwentyFour")],
            [document.getElementById("recipeTwentyFive"), document.getElementById("modalTwentyFive")],
            [document.getElementById("recipeTwentySix"), document.getElementById("modalTwentySix")],
            [document.getElementById("recipeTwentySeven"), document.getElementById("modalTwentySeven")],
            [document.getElementById("recipeTwentyEight"), document.getElementById("modalTwentyEight")],
            [document.getElementById("recipeTwentyNine"), document.getElementById("modalTwentyNine")],
            [document.getElementById("recipeThirty"), document.getElementById("modalThirty")],
            [document.getElementById("recipeThirtyOne"), document.getElementById("modalThirtyOne")],
            [document.getElementById("recipeThirtyTwo"), document.getElementById("modalThirtyTwo")],
            [document.getElementById("recipeThirtyThree"), document.getElementById("modalThirtyThree")],
            [document.getElementById("recipeThirtyFour"), document.getElementById("modalThirtyFour")],
            [document.getElementById("recipeThirtyFive"), document.getElementById("modalThirtyFive")],
            [document.getElementById("recipeThirtySix"), document.getElementById("modalThirtySix")],
            [document.getElementById("recipeThirtySeven"), document.getElementById("modalThirtySeven")],
            [document.getElementById("recipeThirtyEight"), document.getElementById("modalThirtyEight")],
            [document.getElementById("recipeThirtyNine"), document.getElementById("modalThirtyNine")],
            [document.getElementById("recipeFourty"), document.getElementById("modalFourty")],
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