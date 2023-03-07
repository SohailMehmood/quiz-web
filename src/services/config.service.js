angular.module('app').factory('ConfigService', [function() {

    var service = {};

    service.apiBase = 'https://quizapism-env-1.eba-imztifqx.eu-west-2.elasticbeanstalk.com/';

    return service;
}]);