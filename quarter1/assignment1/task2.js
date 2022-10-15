let name = 'sYed muHammad Azhar';

function nameToLowCase (name){
	return name.toLowerCase();

}

function nameToUpperCase (name){
	return name.toUpperCase();	
}


function nameToTitleCase (name){
	name.toLowerCase().split(' ').map(function (word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');

}

nameToLowCase(name);

nameToUpperCase(name);

nameToTitleCase(name)