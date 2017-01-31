// Require's
require('angular/angular');
require('angular-ui-router');

// Create your app
var app = angular.module('MahjongMayhem', ['ui.router', 'general', 'game', 'auth']);

require('./general/modules/GeneralModule');
require('./game/modules/GameModule');
require('./auth/modules/AuthModule');

// Config
app.config(function($httpProvider) {
	// $httpProvider.interceptors.push('AuthService');
});