/*
var beginningPoint = new Point(0,0);
var centerPoint = new Point(500,50);
var linePath = new Path();
*/


var circle = new Path.Circle({
    center: view.center,
    radius: 30,
    strokeColor: 'black',
    fillColor: 'red'
});
/*linePath.add(centerPoint);
linePath.add(beginningPoint);
linePath.strokeWidth = 10;
linePath.strokeColor = red;*/
var line1 = new Path();
line1.strokeWidth = 10;
line1.strokeColor = 'black';
line1.add(new Point(452, 70), new Point(273, 185));
var line2 = new Path();
line2.strokeWidth = 10;
line2.strokeColor='black';
line2.add(new Point(452, 70), new Point(578, 185));
var circleOxy = new Path.Circle(new Point (452, 74), 50);
circleOxy.fillColor = 'red';
var circleHydro1 = new Path.Circle(new Point(273,185), 50);
circleHydro1.fillColor = 'blue';
var circleHydro2 = new Path.Circle(new Point(578,185), 50);
circleHydro2.fillColor = 'blue'



function onResize(event) {
    circle.position = view.center;
}
function onMouseDrag(event) {
    circle.position = event.point;
    /*circleHydro.position = event.point*/;        document.getElementById("coords").innerHTML=event.point
}

