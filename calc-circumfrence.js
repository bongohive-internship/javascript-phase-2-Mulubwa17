// calcCircumference function should be here
function circle(radius) {
    // circumference method
    this.circumference = function() {
        return 2 * Math.PI * this.radius;
    };
    this.radius = radius;
    // area 
    this.area = function() {
        return Math.PI * this.radius * this.radius;
    };

}
var c = new circle(3);
console.log('Area =', c.area().toFixed(2));
console.log('circumference =', c.circumference().toFixed(2));