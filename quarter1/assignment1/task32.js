
var currentUsers = ["admin","employee", "manager"];
var newUsers = ['tim', "kim", "jim"];
newUsers.length > 0 ? checkingUserNames(newUsers) : console.log("We need to find some users!");

function checkingUserNames(userNames){
	currentUsers = currentUsers.map(toUpperCaseConverter)
	console.log(currentUsers);
	for (let userName=0; userName<userNames.length; userName++)
		{
			user = userNames[userName];
			if (currentUsers.includes(user.toUpperCase() )){
				console.log(`Hello ${user}, you need to enter a new username.`);
			}
			else{
				console.log(`Hello ${user}, username is available`);
			}
		}
}

function toUpperCaseConverter(val){
	return val.toUpperCase();
}