let  myFavouriteFruits= ["avocados", "grape", "orange", "pineapple"];
yourFavoriteFruit(myFavouriteFruits);

function yourFavoriteFruit(fruitsList){
	for (let fruit=0; fruit<fruitsList.length; fruit++)
		{
			fruitName = fruitsList[fruit];
			if (fruitName == "avocados"){
				console.log(`You like ${fruitName}`);
			}
			if (fruitName == "grape"){
				console.log(`You like ${fruitName}`);
			}
			if (fruitName == "orange"){
				console.log(`You like ${fruitName}`);
			}
			if (fruitName == "pineapple"){
				console.log(`You like ${fruitName}`);
			}
		}
}