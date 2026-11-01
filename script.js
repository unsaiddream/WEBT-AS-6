
$(document).ready(function() {

    console.log("jQuery is ready!");

    $("#textBtn").click(function() {
        $("#myParagraph").text("Text changed using jQuery!");
    });

    $("#htmlBtn").click(function() {
        $(".myClass").html("<strong>Bold text using jQuery!</strong>");
    });

    $("#cssBtn").click(function() {
        $("h3").css("color", "blue");
        $("h3").css("font-size", "30px");
    });

});

$("#hideBtn").click(function() {
    $("#myText").hide();
});

$("#showBtn").click(function() {
    $("#myText").show();
});

$("#toggleBtn").click(function() {
    $("#myText").toggle();
});
