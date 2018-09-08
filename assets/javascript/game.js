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

    // Functions
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

    function gameReset() {
        targetScore = Math.floor(Math.random() * 102 + 19);
        console.log(targetScore);
        playerScore = 0;
        result = "";
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
/*            result = "You Win!";
/!*            dispRefresh();*!/*/
            wins++;
            gameReset();
            dispRefresh();
        } else if (playerScore > targetScore) {
/*            result = "You Lost...";
/!*            dispRefresh();*!/*/
            losses++;
            gameReset();
            dispRefresh();
        } else {

        }
    }

    // Gameplay
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