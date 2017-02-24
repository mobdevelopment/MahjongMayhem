// Require's
require('angular/angular');
require('angular-ui-router');
require('ng-storage/ngStorage.min');

// Create your app
var app = angular.module('mahjongMayhem', ['ui.router', 'ngStorage', 'general', 'game', 'auth']);

require('./general/modules/generalModule');
require('./game/modules/gameModule');
require('./auth/modules/authModule');

require('./configuration/config')(app);
