printAlbumInfo();
function makeAlbum(artistName, albumTitle, ...args){
	let artistInfo = {
		name: artistName,
		album: albumTitle,
		noOfTracks: args[0]
	}
	return artistInfo	
}

function printAlbumInfo()
{
	console.log(makeAlbum("Enrique Iglesias", "Loco", 3));
	console.log(makeAlbum("Asim Azhar", "Ghalat Fehmi", 1));
	console.log(makeAlbum("Ali Zafar", "Jhoom"));

}