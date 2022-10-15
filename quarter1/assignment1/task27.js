alienColors("Black");

alienColors("White");

alienColors("Red");

function alienColors (color){
	let alienColor = "Black";
	if (alienColor == color){
	console.log("You earned 5 points");
  return alienColor;
	}
	else if ("White" == color){
	console.log("You earned 10 points");
    return "White"
	}
	else {
		console.log("You earned 15 points");
    return "Red"
	}
}

console.log(alienColors == "Black" ? true : false);
console.log(alienColors == "Red" ? true : false);
console.log(alienColors == "White" ? true : false);