/*
var beginningPoint = new Point(0,0);
var centerPoint = new Point(500,50);
var linePath = new Path();
*/

var line1p1x = 452;
var line1p1y = 70;
var line1p2x = 273;
var line1p2y = 185;
var line2p1x = 452;
var line2p1y = 70;
var line2p2x = 578;
var line2p2y = 185;
var circleOxypx = 452;
var circleOxypy = 74;
var circleHydro1x = 273;
var circleHydro1y = 185;
var circleHydro2x = 578;
var circleHydro2y = 185;
var circle = new Path.Circle({
    center: view.center,
    radius: 30,
    strokeColor: 'black',
    fillColor: 'red'
});
var line1 = new Path();
line1.strokeWidth = 10;
line1.strokeColor = 'black';
line1.add(new Point(line1p1x, line1p1y), new Point(line1p2x, line1p2y));
var line2 = new Path();
line2.strokeWidth = 10;
line2.strokeColor='black';
line2.add(new Point(line2p1x, line2p1y), new Point(line2p2x, line2p2y));
var circleOxy = new Path.Circle(new Point (circleOxypx, circleOxypy), 50);
circleOxy.fillColor = 'red';
var circleHydro1 = new Path.Circle(new Point(circleHydro1x,circleHydro1y), 50);
circleHydro1.fillColor = 'blue';
var circleHydro2 = new Path.Circle(new Point(circleHydro2x,circleHydro2y), 50);
circleHydro2.fillColor = 'blue'


function onResize(event) {
    circle.position = view.center;
}
function onMouseDrag(event) {
    circle.position = event.point;
    document.getElementById("coords").innerHTML=event.point;
    /*circleOxy.position = (50,50);*/
    
    
    
}
function onMouseDown (event){
    document.getElementById("coords2").innerHTML = view.center;
}
function onFrame (event){
    /*circleHydro1.rotate = (5);
    circleHydro2.position = (5);
    circleOxy.rotate = (5);*/
    line1.rotate(5);
    line2.rotate(5);
    }
