/*
*   Activities.
*/


var app = angular.module("activities", ['ngSanitize', 'angular-bind-html-compile'])
app.controller("activitiesCtrl", function($scope) {

    $scope.clubz = [
        {
            club: 'club',
            sponsor: 'sponsor',
            email: 'email@email.co.uk.com.net',
            time: 'time o\' clock'
        },
        {
            club: 'club 2',
            sponsor: 'sponsor 2',
            email: 'jesus@butts.org',
            time: 'nah'
        }
    ];
});
