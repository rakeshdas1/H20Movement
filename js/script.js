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
var myPath = new Path();
myPath.strokeWidth = 10;
myPath.strokeColor = 'black';
myPath.add(new Point(0, 0), new Point(100, 50));

function onResize(event) {
    path.position = view.center;
}
function onMouseDrag(event) {
    circle.position = event.point;
}
