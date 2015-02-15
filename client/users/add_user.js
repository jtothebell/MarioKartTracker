Template.addUser.created = function() {
	Session.set('addUserErrors', {});
}

Template.addUser.helpers({
	errorMessage: function(field) {
		return Session.get('addUserErrors')[field];
	},
	errorClass: function (field) {
		return !!Session.get('addUserErrors')[field] ? 'has-error' : '';
	}
});

Template.addUser.events({
	'submit form': function(e) {
		e.preventDefault();

		var user = {
			name: $(e.target).find('[name=name]').val(),
			displayName: $(e.target).find('[name=displayName]').val()
		};
		
		var errors = validateUser(user);
		if (errors.name || errors.displayName)
			return Session.set('userSubmitErrors', errors);
		
		Meteor.call('userInsert', user, function(error, result) {
			// display the error to the user and abort
			if (error)
				return throwError(error.reason);
		
			// show this result but route anyway
			if (result.userExists)
				throwError('That user name is already taken');
		
			Router.go('summary');  
		});
	}
});