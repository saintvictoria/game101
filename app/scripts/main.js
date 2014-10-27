'use strict';
/*
step 1:
chose your team from left or right side
step 2
pick your player
step 3
computer picks its player from opposite side
step 4
you attack
step 5
computer attacks
step 6
the first one to die loses
step 7
Game Over
*/

function GameController(leftCombatants, rightCombatants) {
    this._turn = null;
    this.leftCombatants = leftCombatants;
    this.rightCombatants = rightCombatants;
    this.playerChoosesLeft = function(){
      this.player = 'left';
      this.computer = 'right';
    };
    this.playerChoosesRight = function(){
      this.player = 'right';
      this.computer = 'left';
    };
    this.playerChoosesCombatant = function(/*string*/name){
      var combatant = _.findWhere(
       this.getPlayerCombatants(),{"name": name});
      this.playerCombatant = combatant;
      this._computerChoosesCombatant();
    };
    this._computerChoosesCombatant = function(){
      var x = this.getComputerCombatants();
      this.computerCombatant = _.sample(x);
    };
    this.getPlayerCombatants = function(){
      return this.getCombatantsForSide(this.player);
    };
    this.getComputerCombatants = function(){
      return this.getCombatantsForSide(this.computer);
    };
    this.getCombatantsForSide = function(side){
      //whatever side the player did not choose
      //is the computer side
      //so the computer combatant is one from its side
      var combatantChoices;
      if ('right' === side){
        combatantChoices = this.rightCombatants;
      }else{
        combatantChoices = this.leftCombatants;
      }
      return combatantChoices;
    };
    this.attack = function(){
      console.log(this.playerCombatant,"vs", this.computerCombatant);
      if(this.gameIsFinished()) {
        //console.log(this.gameIsFinished,"game is over")
        return;
      }

      this.playerCombatant.attack(this.computerCombatant);
      if(this.gameIsFinished()) {
        return;
      }
      this.computerCombatant.attack(this.playerCombatant);
    };
    this.gameIsFinished = function(){
      return this.playerCombatant.health <= 0 ||
              this.computerCombatant.health <= 0;
    };
};


var Elephant = function (options){
  var options = options || {};
  this.name = options.name;
  this.life = options.life ||'normal';
  this.age = options.age;
  this.color = options.color;
  this.health = options.health;
  this.attack = function(stomped){
  return stomped.health  -= _.random(20, 25);
  };
  this.life = function(stomped) {
    return stomped.health -= _.random(30, 40);
  };
};

var Lion = function (options){
  var options = options || {};
  this.life = options.life;
  this.name = options.name;
  this.age = options.age;
  this.color = options.color;
  this.health = options.health;
  this.attack = function(chomped){
    return chomped.health -= _.random(20, 25);
  };
  this.life = function(chomped) {
    return chomped.health -= _.random(10,15);
  };
};

var solanga = new Elephant({
  name: "solanga",
  age: 14,
  color: "gray",
  health: 100
});

var malenda = new Elephant({
  name:"malenda",
  age: 17,
  color: "gray",
  health: 100
});

var pinky = new Elephant({
  name:"pinky",
  age: 39,
  color: "gray",
  health: 95
});

var scar = new Lion({
  name: "scar",
  age: 14,
  color: "yellow",
  life: 'poor',
  health: 75
});

var timba = new Lion({
  name: "timba",
  age: 24,
  color: "brown",
  health: 90
});

 var jack = new Lion({
   name: "jack",
   age: 18,
   color: "brown",
   health: 100
 })

var controller = new GameController(
  [solanga, malenda, pinky],
  [scar, timba, jack]);

$(".elephants").on("click", function() {
  controller.playerChoosesLeft();

  $(".greetings > p").css("display","none");
  $(".greetings > p:nth-child(3)").css("display","block");

});

$(".ellie").on("click", function(){
  // var animal name was clicked
  var a = "solanga";
  controller.playerChoosesCombatant(a);

  $(".greetings > p").css("display","none");
  $(".greetings > p:nth-child(4)").css("display","block");
});

$(".ellibut").on("click", function(){
  controller.attack();


  $(".greetings > p").css("display","none");
  $(".greetings > p:nth-child(5)").css("display","block");
});
