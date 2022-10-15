let pizzaNames = ["Cheese Pizza", " Veggie Pizza", "Margherita Pizza"];
pizzaNames.length > 0 ? favoritePizzas(pizzaNames) : console.log("no pizza");

function favoritePizzas(pizzaNames){
	for (let number=0; number<pizzaNames.length; number++)
		{
			console.log("I like",pizzaNames[number])
		}
		console.log("The pizzas is love");
		console.log("Pizza is easy to make and eat.");
		console.log("Pizza is the best fastfood");

}