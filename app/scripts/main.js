console.log('The Iron Yard Rocks');

var Elephant = function (options){
  var options = options || {};
  this.name = options.name;
  this.life = options.life ||'normal';
  this.age = options.age;
  this.color = options.color;
};

var Lion = function (options){
  var options = options || {};
  this.name = options.name;
  this.age = options.age;
  this.color = options.color;
  this.life = options.life ||'normal';
};

var Solanga = new Elephant({
  age: 14,
  color: "gray",
});

var Malenda = new Elephant({
  age: 17,
  color: "gray"
})

var Scar = new Lion({
  age: 14,
  color: "yellow",
  life: 'poor',
})

var Timba = new Lion({
  age: 24,
  color: "brown"
})
