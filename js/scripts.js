var Package = {
  classMultiplier: 1,
  mass: 1,
  volume: 1,
  distance: 0,
  cost: 0,
  packageClass: function(classSelect){
    if (classSelect === 'Slip Stream') {
      this.classMultiplier = 3;
    } else if (classSelect === 'Warp Speed'){
      this.classMultiplier = 2;
    } else if (classSelect === 'Impulse Drive') {
      this.classMultiplier = 1;
    }
  },
  packageWeight: function(weight){
    this.mass = this.mass * weight;
  },
  packageDimensions: function(length, width, height){
    this.volume = length * width * height;
  },
  packageDistance: function(from, to){
    var locations = {'alpha': -1000,
                    'beta': 1000,
                    'delta': 4000,
                    'gamma': -2500,
                    'transdimensional':Math.pow(10,10)};
    this.distance = Math.abs(locations[to] - locations[from]);
  }
  // packageCost: function(packageClass(weight), packageDimensions.volume, packageWeight.mass, packageDistance.distance){
  //   console.log(this.mass);

  //   console.log(typeof this.mass);
  //   this.cost = (this.mass * this.volume) * this.distance * this.classMultiplier;
  // }
};

$(document).ready(function(){
  $('form#shippingCalc').submit(function(event){
      event.preventDefault();
      var myPackage = Object.create(Package);
      var from = $('#userFrom').val();
      var to = $('#userTo').val();
      var weight = parseInt($('#weight').val());
      var length = parseInt($('#length').val());
      var width  = parseInt($('#width').val());
      var height = parseInt($('#height').val());
      var classSelect = $('#packageClass').val();


    $('#totalCost').text(cost);
    $('#result').show(400);


    return cost;

  });
});
