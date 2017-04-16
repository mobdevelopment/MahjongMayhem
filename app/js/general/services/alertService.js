module.exports = function($timeout){
	var service = {}; 
	var self = this;

	self.alertObject = {
		message: '',
		type: 'alert-success',
		show: false	
	};

	self.alertShow = false;
	self.alertTypes = ['alert-success', 'alert-info', 'alert-warning', 'alert-danger'];
	self.alert = function(type, message) {
		self.alertObject.message = message;
		self.alertObject.type = self.alertTypes[type];
		self.alertObject.show = true;

		self.showMessageBox();
	};

	self.success = function(message) {
		console.log('service:: ' + message);
		self.alert(0, message);
	};
	self.info = function(message) {
		self.alert(1, message);
	};
	self.warning = function(message) {
		self.alert(2, message);
	};
	self.danger = function(message) {
		self.alert(3, message);
	};

	self.showMessageBox = function() {
		$timeout(function() {
			self.alertObject.message = '';
			self.alertObject.show = false;
		}, 3000);
	};

	return this;
};