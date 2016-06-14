// Require's
require('angular/angular');
require('angular-ui-router');

// Create your app
var app = angular.module('MahjongMayhem', ['ui.router', 'general', 'game']);

require('./General/Modules/GeneralModule');
require('./Game/Modules/GameModule');

// Config
app.config(function($httpProvider) {
	// $httpProvider.
});