var players = [{
    "cards": [],
    "score": 0
},
    {
        "cards": [],
        "score": 0
    },
    {
        "cards": [],
        "score": 0
    },
    {
        "cards": [],
        "score": 0
    }
]
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function init_game() {
    shuffleArray(deck);
    for (var i = 0; i < 4; i++) {
        players[0].cards.push(deck[i]);
        document.querySelector("#player1-cards").innerHTML += deck[i].img;
    }
    for (var i = 0; i < 4; i++)
        players[1].cards.push(deck[i]);
    for (var i = 0; i < 4; i++)
        players[2].cards.push(deck[i]);
    for (var i = 0; i < 4; i++)
        players[3].cards.push(deck[i]);
    var player_cards=document.querySelectorAll(".player");
    /*for (var i=0;i<player_cards.length;i++) {
        player_cards[i].addEventListener("click", function () {
            this.style.height="125px";
        })
        player_cards[i].addEventListener("blur", function () {
            this.style.height="106.97px";
        })
    }*/
}
init_game();





