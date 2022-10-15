prepareSandwich("Bread", "Meat","Mayonnaise sauce","Cheese","Bread again")
prepareSandwich("Bread","Meat","Mayonnaise","Bread")
prepareSandwich("Bread","Meat","Bread")

function prepareSandwich(...args) {
	console.log(`I want a ${args[0]} ${args[1]} ${args[2]}`)
}