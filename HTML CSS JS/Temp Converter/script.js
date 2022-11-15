let cel = document.getElementById("cel");
let fah = document.getElementById("fah");

function celToFar(){
	let output = (parseFloat(cel.value) *9/5)+32;
	far.value = parseFloat(output.toFixed(2));
	}
	
function farToCel(){
	let output = output = (parseFloat(far.value) - 32) * 5/9
	cel.value = parseFloat(output.toFixed(2));
}
