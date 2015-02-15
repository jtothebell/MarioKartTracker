Template.userSummary.events({
	'click .delete': function(e) {
		e.preventDefault();

		if (confirm("Delete this user?")) {
			var currentUserId = this._id;
			Users.remove(currentUserId);
		}
	}
});