let places = ["pakistan","kohat","england", "finlad", "austria", "lahore"];
let sorted_list = reverse_list = [...places];
sorted_list.sort();
reverse_list.reverse();

countries(places, "Unsorted");
countries(sorted_list, "Sorted");
countries(places, "Original unmodified");
countries(reverse_list, "Reversed")
countries(places, "Again Checking the order of the");
countries(reverse_list.reverse(), "Reversed 2 times")

function countries(countries_list, msg) {
	console.log(`${msg} list`);
	for (let i =0; i <countries_list.length; i++) {
		console.log("Country:",countries_list[i]);
	}
}