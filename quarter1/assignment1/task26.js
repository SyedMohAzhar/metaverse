alienColor("Black");

alienColor("Red");

function alienColor (color){
	let alienColor = "Black";
	if (alienColor == color){
	console.log("You earned 5 points");
  return alienColor;
	}
	else {
		console.log("You earned 10 points");
    return alienColor;
	}
}

console.log(alienColor == "Black" ? true : false);
console.log(alienColor == "Red" ? true : false);