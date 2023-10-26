//for github
document.write("Find sum of numbers and average<br>");
document.write("---------------------<br>");
document.write("var a=[2,3,4,5]<br>");
document.write("--------------<br>");
document.write("output:<br>");
document.write("Sum of numbers:14<br>");
document.write("Average:3.5<br>");


var a=[2,3,4,5];
var b=0;
for(let i=0;i<a.length;i++){
	var b=b+a[i];
	var d=b/a.length;
}
console.log(b);
console.log(d);
