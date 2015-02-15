Router.configure({
	layoutTemplate: 'layout'
});

Router.route('/', {name: 'summary'});

Router.route('/addUser', {name: 'addUser'});

Router.route('/grandprix', {name: 'grandPrixStart'});