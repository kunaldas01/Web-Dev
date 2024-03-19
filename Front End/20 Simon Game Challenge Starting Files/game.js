
let buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];
let userClickedPattern = [];

let started = false;
let level = 0;

// Start the game
$(document).keydown(function () {
    if (!started) {
        nextSequence();
        started = true;
    }
});

// Handle user click
$(".btn").click(function () {

    // Detect User clicked button
    let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    // Animate user click
    playSound(userChosenColour);
    animatePress(userChosenColour);

    // Comapare 
    checkAnswer(userClickedPattern.length - 1);
});


// Check answer
function checkAnswer(currentIdx) {

    if (userClickedPattern[currentIdx] === gamePattern[currentIdx]) {

        // Correct answer
        if (userClickedPattern.length === gamePattern.length) {

            // Move to next level
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    }
    else {

        // Wrong answer
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");

        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

        startOver();
    }
}

// Generate the sequence for current level
function nextSequence() {

    // Update level
    level++;
    $("#level-title").text("Level " + level);

    // Clear previous data
    gamePattern = [];
    userClickedPattern = [];

    // Generate the sequence
    for (let i = 0; i < level; i++) {
        let randomNumber = Math.floor(Math.random() * 4);
        let randomChosenColour = buttonColours[randomNumber];
        gamePattern.push(randomChosenColour);

        // Animate the sequence
        setTimeout(function () {
            animatePress(randomChosenColour);
            playSound(randomChosenColour);
        }, 500 * i);
    }
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}

function playSound(name) {
    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function startOver() {
    level = 0;
    started = false;
}



