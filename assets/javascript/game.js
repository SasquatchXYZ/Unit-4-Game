// jQuery Ready Function waits for the document to complete loading before initiating Javascript
$(document).ready(function() {
    var targetScore = "";
    var playerScore = "";
    var result = "";
    var wins = "";
    var losses = "";
    var rubyvalue = "";
    var sapphirevalue = "";
    var topazvalue = "";
    var emeraldvalue = "";

// Functions============================================================================================================
    function gameStart() {
        targetScore = Math.floor(Math.random() * 102 + 19);
        console.log(targetScore);
        playerScore = 0;
        wins = 0;
        losses = 0;
        rubyvalue = Math.floor(Math.random() * 12 + 1);
        console.log(rubyvalue);
        sapphirevalue = Math.floor(Math.random() * 12 + 1);
        console.log(sapphirevalue);
        topazvalue = Math.floor(Math.random() * 12 + 1);
        console.log(topazvalue);
        emeraldvalue = Math.floor(Math.random() * 12 + 1);
        console.log(emeraldvalue);
        dispRefresh();
    }

    function delayReset() {
        window.setTimeout(gameReset, 2000);
        window.setTimeout(dispRefresh, 2000);
        window.setTimeout(enableButton, 2000);
    }

    function gameReset() {
        targetScore = Math.floor(Math.random() * 102 + 19);
        console.log(targetScore);
        playerScore = 0;
        result = null;
        rubyvalue = Math.floor(Math.random() * 12 + 1);
        console.log(rubyvalue);
        sapphirevalue = Math.floor(Math.random() * 12 + 1);
        console.log(sapphirevalue);
        topazvalue = Math.floor(Math.random() * 12 + 1);
        console.log(topazvalue);
        emeraldvalue = Math.floor(Math.random() * 12 + 1);
        console.log(emeraldvalue);
    }

    function dispRefresh() {
        $("#target-score").text(targetScore);
        $("#player-score").text(playerScore);
        $("#wins").text("Wins: " + wins);
        $("#losses").text("Losses: " + losses);
        $("#result").text(result);
    }

    function checkScore() {
        if (playerScore === targetScore) {
            disableButton();
            result = "You Win!";
            dispRefresh();
            wins++;
            delayReset();
        } else if (playerScore > targetScore) {
            disableButton();
            result = "You Lost...";
            dispRefresh();
            losses++;
            delayReset();
        } else {
        }
    }

    function disableButton() {
        $("#ruby, #sapphire, #topaz, #emerald").prop("disabled", true);
    }

    function enableButton() {
        $("#ruby, #sapphire, #topaz, #emerald").prop("disabled", false);
    }

// Gameplay=============================================================================================================
    gameStart();

        $("#ruby").on("click", function() {
            playerScore = playerScore + rubyvalue;
            checkScore();
            dispRefresh();
        });
        $("#sapphire").on("click", function() {
            playerScore = playerScore + sapphirevalue;
            checkScore();
            dispRefresh();
        });
        $("#topaz").on("click", function() {
            playerScore = playerScore + topazvalue;
            checkScore();
            dispRefresh();
        });
        $("#emerald").on("click", function() {
            playerScore = playerScore + emeraldvalue;
            checkScore();
            dispRefresh();
        })
});