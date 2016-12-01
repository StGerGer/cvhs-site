/* Okay, all these JS files basically do the same thing for different pages and different formats.
* My goal is to make this useable for someone who doesn't know Angular
* This one is for the info page, if that wasn't obvious
* I hope my comments are somewhat entertaining. I know that reading someone else's code is pretty monotonous
* so I'm trying to make it a bit better with good and entertaining docs
* Written by Nate St. George, copywright 2147 or something like that
*/

var app = angular.module("info", ['ngSanitize', 'angular-bind-html-compile'])
app.controller("infoCtrl", function($scope) {

    $scope.setPageBody = function(page) {   // This works slightly differently than on the other pages.
                                            // It's different because doing it this way isn't very scalable and loses its benefit after too many pages.
        $scope.pageHTML = defaultPage;
        jQuery.grep($scope.pageObjects, function(x) {
            console.log(x.name);
            console.log(page);
            if(x.name === page) {
                $scope.pageHTML = x.html;
            };
        });
    }

    $scope.pageObjects = [  // Add pages here.
        {
            name: 'Student Information',
            html: `
                <h3 class="centered">Student Information</h3>
                <hr>
                <p>
                    Welcome to the Student Information center! From here you have the chance to check your grades on Infinite Campus, search for teachers, or just see what is going on within your student community. <br>
                    Students at Castle View High School are active, engaging, and eager to grow. The majority of our students are members of our many clubs, activities, and athletic programs, and their creativity and determination is expressed inside as well as outside the classroom. There is a strong sense of community inside the walls of Castle View High School, where relationships, relevance, and rigor are demonstrated every day.
                </p>
            `
        },
        {
            name: 'Parent Community',
            html: `
                <h3 class="centered">Parent Community</h3>
                <hr>
                <p>
                    Welcome to the Parent Community page, where parents have access to Parent Portal, teacher pages, and important documents and accounts.  <br> <br>
                    Parents provide much of the support needed for a successful school community.  From their presence at school functions to their patience through those late homework nights, they are there through the obstacles as well as the triumphs. We at Castle View encourage parents to be active members of our team.
                    <br> <br>
                    <h4 class='centered'> Useful Links </h4>
                    <div class="centered">
                        <a href="academics.html?page=counseling">Counseling</a> <br>
                        <a href="academics.html?page=grad">Graduation</a> <br>
                        <a href="http://klstevenson.wixsite.com/castleviewlibrary">Library</a> <br>
                        <a href="https://www.myschoolbucks.com/ver2/login/getmain?requestAction=home">Lunch Accounts</a> <br>
                        <a href="https://campus.dcsdk12.org/icprod/portal/icprod.jsp">Parent Portal</a> <br>
                        <a href="academics.html?page=pg">Post Grad</a> <br>
                        <a href="http://www.continentalleague.org/g5-bin/client.cgi?G5genie=474&school_id=1">Sports Calendar</a> <br>
                        <a href="academics.html?page=sd">Staff Directory</a> <br>
                    </div>
                </p>
            `
        }
    ];

    var defaultPage = `
    <h2 class='centered'>Welcome to Castle View!</h2> <br> <br>
    we're cool <br>
    so cool <br>
    look at us <br>
    wow`;

    $scope.setPageBody("");
});
