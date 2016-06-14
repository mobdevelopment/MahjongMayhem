// Require's
require('angular/angular');

// Create your app
var app = angular.module('MahjongMayhem', ['game']);

require('./Game/Modules/GameModule');

// Config
app.config(function($httpProvider) {
	$httpProvider.
});