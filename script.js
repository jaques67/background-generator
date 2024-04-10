var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("randomColour");


function setGradient() {
	var background = "linear-gradient(to right, "
		+ color1.value 
		+ ", " 
		+ color2.value 
		+ ")";
	body.style.background = background;

	writeCSS(background);
}

function writeCSS(val) {
	css.textContent = val + ";";
}

function generateColour() {
	var colourArray = Array.from({
		length: 3
	}, () => Math.floor((Math.random() * 256)).toString(16));

	for (var i=0; i < colourArray.length; i++) {
		if (colourArray[i].length < 2) {
			colourArray[i] = "0" + colourArray[i];
		}
	}

	return "#" + colourArray[0] + colourArray[1] + colourArray[2];
}

function applyRandomColours() {
	color1.value = generateColour();
	color2.value = generateColour();
	setGradient();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", applyRandomColours);

setGradient();

