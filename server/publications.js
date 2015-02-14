Meteor.publish('Users', function() {
  return Users.find();
});
Meteor.publish('Tracks', function() {
  return Tracks.find();
});
Meteor.publish('GrandPrix', function() {
  return GrandPrix.find();
});