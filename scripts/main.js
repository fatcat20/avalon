function init() {
    console.log(database)
$(".game-container").hide();
$(".select-cards-container").hide();
$(".start-game-container").hide();

var sessionName;
var playerName;
var readyStatus = false;

function storePlayerInfo() {
    sessionName = $(".session-name-select").val();
    playerName = $(".player-name-select").val();
}

function showGameContainer() {
    $(".start-container").hide();
    $(".game-container").show();

    // populate user info
    $(".session-name").html(sessionName);
    $(".player-name").html(playerName);
}

function setupCards() {
    var cardsContainer = $(".cards-container");

    // merlin
    if (cardsContainer.find(".merlin-card.selected").length > 0) {
        $(".selected-merlin").show();
    } else {
        $(".selected-merlin").hide();
    }

    // morgana
    if (cardsContainer.find(".morgana-card.selected").length > 0) {
        $(".selected-morgana").show();
    } else {
        $(".selected-morgana").hide();
    }

    // percival
    if (cardsContainer.find(".percival-card.selected").length > 0) {
        $(".selected-percival").show();
    } else {
        $(".selected-percival").hide();
    }

    // mordred
    if (cardsContainer.find(".mordred-card.selected").length > 0) {
        $(".selected-mordred").show();
    } else {
        $(".selected-mordred").hide();
    }

    // oberon
    if (cardsContainer.find(".oberon-card.selected").length > 0) {
        $(".selected-oberon").show();
    } else {
        $(".selected-oberon").hide();
    }
}

function registerPlayer() {
    // database.ref("/sessions/")
}

// Enter session
$(".enter-session-button").click(function() {
    if ($(".session-name-select").val() == "" || $(".player-name-select").val() == "") {
        alert('mai bulangiule! n-ai completat');
        return;
    }
    storePlayerInfo();
    showGameContainer();
    registerPlayer();
    
    console.log(sessionName);
    console.log(playerName);
});

// Become host
$(".become-host-button").click(function() {
    readyStatus = true;
    $(".ready-status-container").hide();
    $(".select-cards-container").show();
    setupCards();

});

// Toggle selected cards
$(".cards-container .role-card").click(function(){
    if ($(this).hasClass("selected")) {
        $(this).removeClass("selected");
    } else {
        $(this).addClass("selected")
    }

    setupCards();
});

// Toggle ready
$(".toggle-ready-button").click(function(){
    if (readyStatus == false) {
        readyStatus = true;
        $(".ready-status").addClass("player-ready").html("You are ready");
    } else {
        readyStatus = false;
        $(".ready-status").removeClass("player-ready").html("You are not ready");
    }
});

$(".read-session-info-button").click(function(){
    database.ref().once("value", function(snapshot) {
        var data = snapshot.val(); // Get the data as an object
        var dataString = JSON.stringify(data); // Convert the data to a string
        $("#output").text(dataString); // Output the data to the <div> element
    });
});
// End of app
};
