let magicianNames = ["MAX MAVEN	", "MASKED MAGICIAN	", "CAMPBELL McRAE	"];

showMagicians(magicianNames);
function makeGreat(magicianNames) {

	let makeGreatMagicians = magicianNames.map(i => 'The Great ' + i);
	return makeGreatMagicians
}

function showMagicians(magicianNames)
{
	console.log(makeGreat(magicianNames))
}
