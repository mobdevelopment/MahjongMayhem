module.exports = function() {
	var factory = {};

	factory.currentUser = {};

	factory.users = [
		{	name: 'martijn', id: '1'	},
		{	name: 'mark', id: '2'	},
		{	name: 'michael', id: '3'	}
	];

	factory.addUser = function(name, id) {
		factory.users.push({ name: name, id: id });
	}

	return factory;
};