// Require's
require('angular/angular');
require('angular-ui-router');

// Create your app
var app = angular.module('MahjongMayhem', ['ui.router', 'general', 'game', 'auth']);

require('./General/Modules/GeneralModule');
require('./Game/Modules/GameModule');
require('./Auth/Modules/AuthModule');

// Config
app.config(function($httpProvider) {
	// $httpProvider.interceptors.push('AuthService');
});