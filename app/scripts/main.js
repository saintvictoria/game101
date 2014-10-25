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

function GameController() {
    this._turn = null;
    this.playerChoosesLeft = function(){
    };
    this.playerChoosesRight = function(){
    };
    this.playerChoosesCombatant = function(combatant){
    };
    this._computerChoosesCombatant =function(){
    };
    this.attack = function(){
      playerCombatant.attack();
      computerCombatant.attack();
    };
    this.gameIsFinished = function(){
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
  age: 14,
  color: "gray",
  health: 100
});

var malenda = new Elephant({
  age: 17,
  color: "gray",
  health: 100
})

var scar = new Lion({
  age: 14,
  color: "yellow",
  life: 'poor',
  health: 75
})

var timba = new Lion({
  age: 24,
  color: "brown",
  health: 90
})
