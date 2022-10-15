Cars("BMW", "BMW iX", color="Red", model=2022)

function Cars(manufacturer,  modelName, ...args) {
	console.log({Manfactuer: manufacturer, Model: modelName, color: args[0], model:args[1]})
}