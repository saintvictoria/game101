console.log('The Iron Yard Rocks');

var Elephant = function (options){
  var options = options || {};
  this.name = options.name;
  this.life = options.life ||'normal';
  this.age = options.age;
  this.color = options.color;
  this.health = options.health;
  this.attack = function(stomp){
    stomp.health = (stomp.health - _.random(20, 25));
  };
};

var Lion = function (options){
  var options = options || {};
  this.name = options.name;
  this.age = options.age;
  this.color = options.color;
  this.health = options.health;
  this.attack = function(chomp){
    chomp.health = (chomp.health - _.random(20, 25));
  };
  this.life = options.life ||'normal';
};

var Solanga = new Elephant({
  age: 14,
  color: "gray",
  health: 100
});

var Malenda = new Elephant({
  age: 17,
  color: "gray",
  health: 100
})

var Scar = new Lion({
  age: 14,
  color: "yellow",
  life: 'poor',
  health: 75
})

var Timba = new Lion({
  age: 24,
  color: "brown",
  health: 90
})

console.log(Malenda.attack(Timba))
console.log(Timba)
