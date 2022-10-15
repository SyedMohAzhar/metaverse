let petNames = ["chicken", "goat", "dog"];
petNames.length > 0 ? favoritePets(petNames) : console.log("No pets!");

function favoritePets(petNames){
	for (let number=0; number<petNames.length; number++)
		{
			console.log(` A ${petNames[number]} would make a great pet.`)
		}
	console.log("The have the same eyes, face and ear structure.")
}