Router.configure({
	layoutTemplate: 'layout'
});

//TODO: fix case sensitivity of activity name?
Router.route('/', {name: 'summary'});