
function DeckConstructor(){
    var suits = ["hearts", "spades", "clubs", "diamonds"]
    var values = ["Ace", '2', '3', '4', '5', '6','7', '8','9','10', 'jack','queen','king']
    var deck;

    this.show = function(){
        console.log(deck);
        console.log('length '+ deck.length)
        return this;
    }

    var generateDeck = function(){
        deck = [];
        for (var i = 0; i<suits.length; i++){
            for (var j = 0; j<values.length; j++){

                // var card = {
                //     suit : suits[i],
                //     value : values[j],
                var card = new CardConstructor(suits[i], values[j]);
                deck.push(card);
            }
        }
    }
        generateDeck();

        this.shuffle = function(){
            var numberofshuffle = Math.floor((Math.random() * 100)+ 50);
            for (var i =0; i<=numberofshuffle; i++){
                var randomInt1 = Math.floor(Math.random()* deck.length);
                var randomInt2 = Math.floor(Math.random()* deck.length);
                //perform basic swap
                var temp = deck[randomInt1];
                deck[randomInt1] =  deck[randomInt2];
                deck[randomInt2] = temp;
            }
            return this;
        }
        this.reset = generateDeck;

        this.getDeck = function(){
            return deck;
        }
}

DeckConstructor.prototype.deal = function(){
    return this.getDeck().pop()
}

function CardConstructor(suit, value){
    this.suit = suit;
    this.value = value;
}

var Deck = new DeckConstructor();


Deck.shuffle().show();
Deck.deal();
Deck.show();
