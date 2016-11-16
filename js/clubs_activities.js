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
            club: 'Art Honor Society',
            sponsor: 'Eileen Salzman',
            email: 'elieen.salzman@dcsdk12.org',
            location: 'Room 3000',
            time: 'Tuesdays, Adveisement'
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
            email: 'steven.carlton@dcsdk12.org',
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
            sponsor: 'Anne Damanti',
            email: 'anne.damanti@dcsdk12.org',
            location: 'Mobile 86B',
            time: 'Tuesdays, Advisement'
        },
        {
            club: 'Game Club',
            sponsor: 'Joey South',
            email: 'wjsouth@dcsd12.org',
            location: 'Library',
            time: 'Wednesdays, 3:00PM-4:00PM'
        },
        {
            club: 'German Honor Society',
            sponsor: 'Allison Harrison',
            email: 'allison.harrison@dcsdk12.org',
            location: 'Mobile 86A',
            time: '2nd/4th Wednesdays, Advisement'
        },
        {
            club: 'Gender Sexuality Alliance',
            sponsor: 'Amber Schweitzer',
            email: 'amber.schweitzer@dcsdk12.org',
            location: 'Room 500',
            time: 'Wednesdays, Advisement'
        },
        {
            club: 'Interact',
            sponsor: 'Rebekah Welte',
            email: 'bekah.welte@dcsdk12.org',
            location: 'Library',
            time: 'Tuesdays, Advisement'
        },
        {
            club: 'Japanese honor Society',
            sponsor: 'Aki May',
            email: 'aki.may@dcsdk12.org',
            location: 'Room 8500',
            time: '1st/3rd Tuesdays'
        },
        {
            club: 'Literary Magazine',
            sponsor: 'Jessica Combest',
            email: 'jessica.combest@dcsdk12.org',
            location: 'Room 9400',
            time: 'Thursdays, Advisement'
        },
        {
            club: 'Math Honor Society',
            sponsor: 'Steve Jenkins',
            email: 'steven.jenkins@dcsdk12.org',
            location: 'Room 9500',
            time: 'TBA, Advisement'
        },
        {
            club: 'Medical Club',
            sponsor: 'Charlie Glinche',
            email: 'charles.glinche@dcsdk12.org',
            location: 'Room 9400',
            time: 'Wednesdays, Advisement'
        },
        {
            club: 'National Honor Society',
            sponsor: 'Kaycee Semple',
            email: 'kaycee.semple@dcsdk12.org',
            location: 'Auditorium',
            time: '1st Thursdays, Advisement'
        },
        {
            club: 'Philosophy Club',
            sponsor: 'Steve Jenkins',
            email: 'steven.jenkins@dcsdk12.org',
            location: 'Room 9500',
            time: 'TBA, Advisement'
        },
        {
            club: 'Photo Club',
            sponsor: 'Ashley Hatfield',
            email: 'ashley.hatfield@dcsdk12.org',
            location: 'Room 3000',
            time: '2nd/4th Wednesdays, Advisement'
        },
        {
            club: 'Ping Pong Club',
            sponsor: 'Kyle Erlenback',
            email: 'kyle.erlenbeck@dcsdk12.org',
            location: 'Room 9800',
            time: 'Tuesdays, Advisement'
        },
        {
            club: 'Quill and Scroll',
            sponsor: 'Jessica Leifheit',
            email: 'jessica.leifeit@dcsdk12.org',
            location: 'Room 8000',
            time: 'In Class'
        },
        {
            club: 'Ski/Snowboard Club',
            sponsor: 'David Barritt',
            email: 'david.barritt@dcsdk12.org',
            location: 'Commons',
            time: '1st/3rd Wednesdays, Advisement'
        },
        {
            club: 'Sources of Strength',
            sponsor: 'Melanie Rapp',
            email: 'melanie.rapp@dcsdk12.org',
            location: 'Room 3000',
            time: 'Wednesdays, Advisement'
        },
        {
            club: 'Spanish Honor Society',
            sponsor: 'Carol Godfrey',
            email: 'carol.godfrey@dcsdk12.org',
            location: 'Mobile 81B',
            time: ''
        },
        {
            club: 'Thespian Troupe 7117',
            sponsor: 'Robert Scott',
            email: 'rascott@dcsdk12.org',
            location: 'Room 625',
            time: 'Thurdays, 3:00PM-3:30PM'
        },
        {
            club: 'Tri M',
            sponsor: 'Mark Cellar',
            email: 'mark.cellar@dcsdk12.org',
            location: 'Room 200',
            time: '4th Thurdays, Advisement'
        },
        {
            club: 'Unified Sports',
            sponsor: 'Erin Newton',
            email: 'erin.newton@dcsdk12.org',
            location: 'Room 2200',
            time: 'To Be Announced'
        },
        {
            club: 'Web Team',
            sponsor: 'Cheri Albers',
            email: 'cheri.albers@dcsdk12.org',
            location: 'Room 5000',
            time: 'Mondays, 6:00PM-7:00PM'
        }
    ];

    $scope.activitiez = [
        {
            activity: 'Color Guard',
            sponsor: 'Mark cellar',
            email: 'mark.cellar@dcsdk12.org',
            location: 'Rooom 300',
            time: 'In Class'
        },
        {
            activity: 'Concert Choir',
            sponsor: 'Heath Walter',
            email: 'heath.walter@dcsdk12.org',
            location: 'Room 100',
            time: 'In Class'
        }
        {
            activity: 'CVTV',
            sponsor: 'Jessica Hunziker',
            email: 'jessica.hunzkier@dcsdk12.org',
            location: 'Room 8000',
            time: 'In Class'
        },
        {
            activity: 'DECA',
            sponsor: 'Cindy Gardner',
            email: 'cindy.gardner@dcsdk12.org',
            location: 'Room 9000',
            time: 'In Class, Occasional Meetings'
        },
        {
            activity: 'FBLA',
            sponsor: 'Chad Bryan',
            email: 'chad.bryan@dcsdk12.org',
            location: 'Room 5700',
            time: 'Tuesdays, Advisement'
        },
        {
            activity: 'Jazz Ensemble',
            sponsor: 'Mark Cellar',
            email: 'mark.cellar@dcsdk12.org',
            location: 'Room 200',
            time: 'In Class'
        },
        {
            activity: 'Marching Band',
            sponsor: 'Mark Cellar',
            email: 'mark.cellar@dcsdk12.org',
            location: 'Room 300',
            time: 'In Class'
        },
        {
            activity: 'Men\'s Select Choir',
            sponsor: 'Rochelle Walker',
            email: '',
            location: '',
            time: ''
        },
        {
            activity: '',
            sponsor: '',
            email: '',
            location: '',
            time: ''
        },
        {
            activity: '',
            sponsor: '',
            email: '',
            location: '',
            time: ''
        },
        {
            activity: '',
            sponsor: '',
            email: '',
            location: '',
            time: ''
        },
        {
            activity: '',
            sponsor: '',
            email: '',
            location: '',
            time: ''
        },
        {
            activity: '',
            sponsor: '',
            email: '',
            location: '',
            time: ''
        },
        {
            activity: '',
            sponsor: '',
            email: '',
            location: '',
            time: ''
        },

    ];
});
