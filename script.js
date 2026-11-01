
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


$("#hideBtn").click(function() {
    $("#myText").hide();
});

$("#showBtn").click(function() {
    $("#myText").show();
});

$("#toggleBtn").click(function() {
    $("#myText").toggle();
});

$("#fadeInBtn").click(function() {
    $("#fadeImage").fadeIn(1000);
});

$("#fadeOutBtn").click(function() {
    $("#fadeImage").fadeOut(1000);
});

$("#fadeToggleBtn").click(function() {
    $("#fadeImage").fadeToggle(1000);
});

$("#slideUpBtn").click(function() {
    $("#slidePanel").slideUp(500);
});

$("#slideDownBtn").click(function() {
    $("#slidePanel").slideDown(500);
});

$("#slideToggleBtn").click(function() {
    $("#slidePanel").slideToggle(500);
});

$("#panelHeader").click(function() {
    $("#slidePanel").slideToggle(500);
});


    $("nav a").each(function() {
        if ($(this).attr("href") === (location.pathname.split("/").pop() || "index.html")) {
            $(this).attr("aria-current", "page");
        }
    });

    let itemNumber = 2;

    $("#addItemBtn").click(function() {
        itemNumber++;
        $("#itemList").append($("<li>").text("Item " + itemNumber));
    });

    $("#prependItemBtn").click(function() {
        itemNumber++;
        $("#itemList").prepend($("<li>").text("Item " + itemNumber));
    });

    $("#removeItemBtn").click(function() {
        $("#itemList li").last().remove();
    });

    $("#changeImageBtn").click(function() {
        if ($("#changeImage").attr("src") === "images/mountains.svg") {
            $("#changeImage").attr({src: "images/sea.svg", alt: "Sea"});
        } else {
            $("#changeImage").attr({src: "images/mountains.svg", alt: "Mountains"});
        }
    });

    $("#changeLinkBtn").click(function() {
        $("#resourceLink").attr("href", "https://api.jquery.com/").text("jQuery API documentation");
    });

    $("#liveForm").on("submit", function(event) {
        event.preventDefault();
    });

    $("#nameInput, #emailInput").on("input", function() {
        $("#namePreview").text($("#nameInput").val() || "Not entered");
        $("#emailPreview").text($("#emailInput").val() || "Not entered");
    });
});
