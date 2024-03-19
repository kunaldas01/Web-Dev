
// When the jQuery library is added in the head section, 
//this code first checks if the jquery library is fully loaded and then executes the code

// $(document).ready(function(){
//     $("h1").css("color", "red");
// });

// $("h1").css("color", "red");


// Add Class
// $("h1").addClass("big-title bg-color");

// Remove Class
// $("h1").removeClass("big-title");

// Has Class
// console.log($("h1").hasClass("big-title"));

// Manipulating text
// $("h1").text("Goodbye");

// Html
// $("h1").html("<em>Yo</em>");

$("button").text("Don't Click");

// Manipulatting Attributes
$("a").attr("href", "https://www.bing.com");


// Adding Event Listeners
// for(var i=0; i<document.querySelectorAll("button").length; i++){
//     document.querySelectorAll("button")[i].addEventListener("click", function(){
//         document.querySelector("h1").style.color="red";
//     });
// }    

$("button").click(function(){
    $("h1").css("color", "purple");
})

// $("input").keydown(function(event){
//     console.log(event.key);
// })

// Challenge
// $(document).keydown(function(event){
//     $("h1").text(event.key);
// })

$("h1").on("mouseover", function(){
    $("h1").css("color", "purple");
});


// Animation

// $("button").on("click", function(){
//     $("h1").hide();
// });

// $("button").on("click", function(){
//     $("h1").show();
// });

// $("button").on("click", function(){
//     $("h1").toggle();
// });

// $("button").on("click", function(){
//     $("h1").animate({opacity:0.5});
// });

$("button").on("click", function(){
    $("h1").slideUp().slideDown().animate({opacity:0.5});
});