function make_album (artistName, albumTitle, track = 'none'){

let albumDetails = {
	artistName: artistName,
	albumTitle: albumTitle,	
	track: track
}

return albumDetails;

}


let album1 = make_album('Zahid', `This is zahid's album`);
let album2 = make_album('Sohail', `This is sohail's album`,5);
let album3 = make_album('Nouman', `This is nouman's album`);


console.log(album1);
console.log(album2);
console.log(album3);