/*
*   Activities. Oh, and clubs.
*/


var app = angular.module("activities", ['ngSanitize', 'angular-bind-html-compile'])
app.controller("activitiesCtrl", function($scope) {

    $scope.clubz = [    // If you add an entry here, it will be added to the clubs page.
        {
            club: 'club',
            sponsor: 'sponsor',
            email: 'email@email.co.uk.com.net',
            location: 'everywhere',
            time: 'time o\' clock'
        },
        {
            club: 'club 2',
            sponsor: 'sponsor 2',
            email: 'jesus@butts.org',
            location: 'las vegas',
            time: 'nah'
        }
    ];
});
