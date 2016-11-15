/*
*   Activities.
*/


var app = angular.module("activities", ['ngSanitize', 'angular-bind-html-compile'])
app.controller("activitiesCtrl", function($scope) {

    $scope.clubz = [
        {
            club: 'American Sign Language Club',
            sponsor: 'Nadelle Payne',
            email: 'nadelle.payne@dcsdk12.org',
            location: 'Room 3400',
            time: '2nd/4th Thurdays, Advisement'
        },
        {
            club: 'American Sign Language Honor Society',
            sponsor: 'Leeana Clark',
            email: 'leelana.clark@dcsdk12.org',
            location: 'Room 3800',
            time: 'Wednesdays, Advisement'
        },
        {
            club: 'Art Club',
            sponsor: 'Ben Henry',
            email: 'ben.henry@dcsdk12.org',
            location: '7300',
            time: '1st/3rd Tuesdays, 3:00PM-4:15PM'
        },
        {
            club: 'Asian Culture Club',
            sponsor: 'Aki May',
            email: 'aki.may@dcsdk12.org',
            location: 'Room 8500',
            time: 'Thursdays, 3:00PM-4:00PM'
        },
        {
            club: 'Best Buddies',
            sponsor: 'Erin Newton',
            email: 'erin.newton@dcsdk12.org',
            location: 'Room 2200',
            time: 'Tuesdays, Advisement'
        },
        {
            club: 'Book Club',
            sponsor: 'Julia Green',
            email: 'julia.green@dcsdk12.org',
            location: 'Room 5800',
            time: '1st/3rd Wednesdays'
        },
        {
            club: 'Castle View Multirotor',
            sponsor: 'Steve Carleton',
            email: 'steve.carlton@dcsdk12.org',
            location: 'Room 2150',
            time: 'Tuesdays, 3:00PM-4:00PM'
        },
        {
            club: 'Chess Club',
            sponsor: 'Nick Pelster',
            email: 'nicholas.pelster@dcsdk12.org',
            location: 'Room 9900',
            time: 'Wednesdays, Advisement'
        },
        {
            club: 'Chemistry Club',
            sponsor: 'Roger Felch',
            email: 'roger.felch@dcsdk12.org',
            location: 'Room 2400',
            time: 'To Be Anounced'
        },
        {
            club: 'Clubstuck',
            sponsor: 'David Guerrero',
            email: 'david.guerrero@dcsdk12.org',
            location: 'Room 3500',
            time: 'Wednesdays, 3:00PM-4:00PM'
        },
        {
            club: 'Competitive Edge',
            sponsor: 'David Barritt',
            email: 'david.barritt@dcsdk12.org',
            location: 'Room 8550',
            time: 'Thursdays, 3:00PM'
        },
        {
            club: 'CV Christian Fellowship',
            sponsor: 'Nadelle Payne',
            email: 'nadelle.payne@dcsdk12.org',
            location: 'Room 3400',
            time: '2nd/4th Fridays, 7:00-7:30AM'
        },
        {
            club: 'CVG2',
            sponsor: 'Jenny Dallman',
            email: 'jenny.dallman@dcsdk12.org',
            location: 'Room 5200',
            time: 'Wednesdays, Advisement'
        },
        {
            club: 'Diversity Club',
            sponsor: 'Jessica Combest',
            email: 'jessica.combest@dcsdk12.org',
            location: 'Room 9400',
            time: '1st/3rd Wednesdays, Advisement'
        },
        {
            club: 'Fashion Club',
            sponsor: 'Melanie Rapp',
            email: 'melanie.rapp@dcsdk12.org',
            location: 'Room 3000',
            time: 'To be Anounced'
        },
        {
            club: 'Fellowship of Christian Atheletes',
            sponsor: 'Jenna Chapman',
            email: 'jenna.chapman@dcsdk12.org',
            location: 'Room 9450',
            time: 'Mondays, 6:00PM'
        },
        {
            club: 'French Honor Society',
            sponsor: '',
            email: '',
            location: '',
            time: ''
        },
        {
            club: '',
            sponsor: '',
            email: '',
            location: '',
            time: ''
        },
        {
            club: '',
            sponsor: '',
            email: '',
            location: '',
            time: ''
        },
        {
            club: '',
            sponsor: '',
            email: '',
            location: '',
            time: ''
        },
        {
            club: '',
            sponsor: '',
            email: '',
            location: '',
            time: ''
        },
        {
            club: '',
            sponsor: '',
            email: '',
            location: '',
            time: ''
        },
        {
            club: '',
            sponsor: '',
            email: '',
            location: '',
            time: ''
        },
        {
            club: '',
            sponsor: '',
            email: '',
            location: '',
            time: ''
        },

    ];

    $scope.activitiez = [
        {
            activity: 'club',
            sponsor: 'sponsor',
            email: 'email@email.co.uk.com.net',
            location: 'everywhere',
            time: 'time o\' clock'
        },
        {
            activity: 'club 2',
            sponsor: 'sponsor 2',
            email: 'jesus@butts.org',
            location: 'las vegas',
            time: 'nah'
        }
    ];
});
