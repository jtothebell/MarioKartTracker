Template.summary.helpers({
	users: function() {
		return Users.find();
	},
	grandPrix: function() {
		return GrandPrix.find();
	},
	tracks: function() {
		return Tracks.find();
	}
});