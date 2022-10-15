
let users = ["admin","employee", "manager"];
users.length = 0;
users.length > 0 ? helloAdmin(users) : console.log("Need to find some users")

function helloAdmin(users){
	for (let userRole=0; userRole<users.length; userRole++)
		{
			user = users[userRole];
			if (user == "admin"){
				console.log(`Hello ${user.toUpperCase()}, would you like to see a status report?`);
			}
			else{
				console.log(`Hello ${user.toUpperCase()}, thank you for logging in again.`);
			}
		}
}