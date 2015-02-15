Users = new Mongo.Collection("Users");

validateUser = function (user) {
	var errors = {};
	if (!user.name)
		errors.name = "Please fill in a Name";
	if (!user.displayName)
		errors.displayName =  "Please fill in a Display Name";
	return errors;
}

Meteor.methods({
	userInsert: function(userAttributes) {
		check(userAttributes, {
			name: String,
			displayName: String
		});
	  
		var errors = validateUser(userAttributes);
		if (errors.name || errors.displayName) {
			throw new Meteor.Error('invalid-user', "You must set a name and a display name for your new User")
		}
	  
		var usersWithSameName = Users.findOne({name: userAttributes.name});
		if (usersWithSameName) {
			return {
				userExists: true,
				_id: usersWithSameName._id
			}
		}

		var newUser = _.extend(userAttributes, {
			created: new Date()
		});
		newUser.allTimePoints = 0;
		
		var userId = Users.insert(newUser);
		
		return {
			_id: userId
		};
	}
});