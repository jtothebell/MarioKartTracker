Template.userList.helpers({
	users: function() {
		return Users.find();
	}
});