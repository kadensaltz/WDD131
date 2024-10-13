const PI = 3.1415926;
let area = 0;
function circleArea(radius) {
    area = radius * PI;
    return area
}

area = circleArea(3);
console.log("Area1:", area);

area = circleArea(4);
console.log("Area2:", area);