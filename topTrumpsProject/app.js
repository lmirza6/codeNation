
// this is the dog class that the playing cards will be created from
class Dog {
    constructor(name, size, rarity, temper, cuteness, speed) {
        this.userName = name; 
        this.userSize = size; //out of 5
        this.userRarity = rarity; //out of 10
        this.userTemper = temper; //out of 5
        this.userCuteness = cuteness; //out of 100
        this.userSpeed = speed; //out of 20
    }

}

// objects - set of 30 playing cards
let dalmatian = new Dog("dalmatian", 4, 8, 3, 80, 13);
let pug = new Dog("pug", 1, 5, 5, 78, 11);
let boxer = new Dog("boxer", 4, 8, 3, 56, 10);
let germanShepherd = new Dog("germanShepherd", 5, 2, 4, 37, 15);
let bulldog = new Dog("bulldog", 4, 4, 4, 28, 5);
let poodle = new Dog("poodle", 1, 3, 3, 30, 4);
let labrador = new Dog("labrador", 4, 6, 5, 67, 9);
let beagle = new Dog("beagle", 5, 1, 1, 45, 7);
let dachshund = new Dog("dachshund", 1, 3, 5, 78, 10);
let chihuauha = new Dog("chihuauha", 1, 5, 4, 24, 3);
let frenchBulldog = new Dog("frenchBulldog", 3, 1, 3, 33, 9);
let cockerSpaniel = new Dog("cockerSpaniel", 3, 3, 3, 77, 3);
let husky = new Dog("husky", 5, 2, 4, 37, 15);
let greyhound = new Dog("greyhound", 4, 2, 4, 66, 20);
let maltese = new Dog("maltese", 2, 2, 4, 27, 5);
let pomerainian = new Dog("pomerainian", 2, 1, 4, 56, 12);
let borderCollie = new Dog("borderCollie", 3, 2, 4, 47, 10);
let dobermann = new Dog("dobermann", 5, 8, 1, 67, 15);
let greatDane = new Dog("greatDane", 5, 6, 4, 24, 8);
let irishSetter = new Dog("irishSetter", 5, 2, 4, 79, 19);
let chowChow = new Dog("chowChow", 3, 3, 5, 15, 5);
let jackRussell = new Dog("jackRussell", 2, 2, 2, 20, 3);
let labradoodle = new Dog("labradoodle", 3, 3, 3, 66, 6);
let newfoundland = new Dog("newfoundland", 5, 3, 3, 28, 19);
let bassetHound = new Dog("bassetHound", 2, 2, 3, 33, 24);
let rottweiler = new Dog("rottweiler", 5, 3, 2, 34, 10);
let akita = new Dog("akita", 4, 2, 4, 10, 4);
let cavapoo = new Dog("cavapoo", 1, 2, 4, 20, 7);
let viszla = new Dog("viszla", 3, 2, 3, 23, 6);
let weimaraner = new Dog("weimaraner", 5, 3, 4, 78, 19);

// //dog object
// let dogs = {
//     dalmatian: 0,
//     pug: 0,
//     boxer: 0,
//     germanShepherd: 0, 
//     bulldog: 0,
//     poodle:0,
//     labrador: 0,
//     beagle: 0,
//     dachshund: 0,
//     chihuauha: 0,
//     frenchBulldog: 0,
//     cockerSpaniel: 0, 
//     husky: 0,
//     greyhound: 0,
//     maltese: 0, 
//     pomerainian: 0,
//     borderCollie: 0,
//     dobermann: 0,
//     greatDane: 0, 
//     irishSetter: 0,
//     chowChow: 0,
//     jackRussell: 0,
//     labradoodle: 0,
//     newfoundland: 0,
//     bassetHound: 0,
//     rottweiler: 0,
//     akita: 0,
//     cavapoo: 0,
//     viszla: 0,
//     weimaraner: 0
// };

// card array of objects - easy to shuffle and split
playingCards = [dalmatian, pug, boxer, germanShepherd, bulldog, poodle, labrador, beagle, dachshund,
     chihuauha, frenchBulldog, cockerSpaniel, husky,greyhound, maltese, pomerainian, borderCollie, dobermann,
    greatDane, irishSetter, chowChow, jackRussell, labradoodle, newfoundland, bassetHound, rottweiler, akita, cavapoo, viszla, weimaraner];


// this shuffles the array/playing cards - goes through length of array and shuffles cards
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) { // i is length of cards (minus 1 each time so when it gets to 0 the loop ends)
      let j = Math.floor(Math.random() * (i + 1)); // j gets random number from length of playing cards (need to add 1 as i is 1 less)
  
      [array[i], array[j]] = [array[j], array[i]];  // playing card in postion i is swapping with playing card in position j
    }
  }

// executing the shuffle so cards are shuffled before splitting
shuffle(playingCards); 

// splitting the deck, first half to the player, second half to the computer
let player1 = playingCards.slice(0, 15);
let player2 = playingCards.slice(15, 30);
let limbo = [];

// as per DRY, created a limbo card function to be called in the loop when there is a draw
function limboCards() {
    console.log("Draw - Limbo cards");
    limbo.push(player1.splice(0, 1));
    limbo.push(player2.splice(0, 1));
    console.log(limbo.length);
}
// rules to the game to make game more user friendly
console.log("Welcome to TOP TRUMPS!\n");
console.log("The deck you will be playing is: Dogs\n");
console.log("It is you vs the computer!\n");
console.log("******************************************\n");
console.log("RULES");
console.log("1. The first card of your deck is drawn.");
console.log("2. You pick your best value.");
console.log("3. We compare your best value with the computer's best value.");
console.log("4. Whoever has the highest value wins the card.");
console.log("5. If there is a draw in values, both cards go into a Limbo pile to be taken by the player who wins the next turn.");
console.log("6. The game ends when one player loses all their cards.\n");
console.log("******************************************\n");
console.log("Let's Begin!\n");
console.log("******************************************\n");

// put the game in a while loop so that it would end when one player had 0 cards left
while (player1.length !=0 && player2.length !=0) {

// printing player1's first card - so they can see their values
console.log(player1[0]);

// using prompt to have player 1 input their best card category
const prompt = require('prompt-sync')();
let value = prompt("Player 1 - Pick your best card category: ");
// if player enters a value that is not one of the categories we will ask them to pick again
if (value != "userCuteness" && value != "userSize" && value != "userTemper" && value != "userSpeed" && value != "userRarity") {
    value = prompt("Your choice was invalid, pick another category from your playing card: ");
}

// as per DRY, created a function which compares the value player 1 has input against the computer value
    function compareCards(userValue) {
 
            // printing out player 1 and player 2 values
            console.log("Player 1 -" + userValue  +":"); 
            console.log(player1[0][userValue]); // 
            console.log("Player 2 -" + userValue  +":");
            console.log(player2[0][userValue]);
             // if player 1 is greater than player 2 then player 1 gets player 2s card - goes to back of deck
            if (player1[0][userValue] > player2[0][userValue]){

            // if the limbo array has any cards in/ doesnt equal 0, if player 1 wins they get the limbo deck cards
            
                if (limbo.length !=0) {
                    player1.push(limbo.splice(0, 1));
                    player1.push(limbo.splice(0, 1));
                }
                console.log("Player 1 wins");
                player1.push(player2.splice(0, 1));
                console.log("Player 1 - cards left in deck:");
                console.log(player1.length);
                console.log("Player 2 - cards left in deck:");
                console.log(player2.length);
                player1.push(player1.splice(0,1));
            } 
             // if player 2 is greater than player 1 then player 2 gets player 1s card - goes to back of deck
            else if (player1[0][userValue]< player2[0][userValue]){

            // if the limbo array has any cards in/ doesnt equal 0, if player 1 wins they get the limbo deck cards    
                if (limbo.length !=0) {
                    player2.push(limbo.splice(0, 1));
                    player2.push(limbo.splice(0, 1));
                }

                console.log("Player 2 wins");
                player2.push(player1.splice(0, 1));
                console.log("Player 1 - cards left in deck:");
                console.log(player1.length);
                console.log("Player 2 - cards left in deck:");
                console.log(player2.length);
                player2.push(player2.splice(0,1));

            } else {
                // if there is a draw, we call the limbo function 
                limboCards();
            }
        
    }
// After creating the funciton, we now call it - the value is the user input
    compareCards(value);
       
        
}
// once player or computer deck has 0 cards in, the while loop breaks and we print Game Over
console.log("Game Over!");

// if player 1 has 0 zero cards, they lose and computer wins, else computer loses
if (player1.length == 0) {
    console.log("You lose!, Computer Wins!");
} else {
    console.log("You win! Computer loses!");
}
