// Created by Nate St. George 2016

// Angular that controls the Academies page. (I'm beginning to realize that having two pages with names only one letter different might have been a mistake.)

var app = angular.module("academies", ['ngSanitize', 'angular-bind-html-compile'])
app.controller("academiesCtrl", function($scope) {
    $scope.pageObjects = [
        { name:"BHS", page:"bhs" },
        { name:"STEM", page:"stem" },
        { name:"VPA", page:"vpa" },
        { name:"LGC", page:"lgc"}
    ];

    $scope.pageHTML;
    $scope.currentPage;

    $scope.setPageBody = function(page) {   // Sets page body on new selection or on load.
        $scope.pageHTML = `<h2 class="centered"> The Academies </h2> <hr>
        The academy model at Castle View High School is designed to support the three R’s: Relationships, Relevance and Rigor. Each of the four academies -- Leadership, Global Studies and Communication (LGC); Science, Technology, Math and Engineering (STEM); Visual and Performing Arts (VPA); and Biotechnology and Health Sciences (BHS)-- are designed to provide smaller learning communities where students can develop significant relationships with teachers assigned to that academy. <br> <br>
        In essence, our academy model reduces a typical high school of 2000 students into one of roughly 350 to 400 students, “A place where everyone knows your name.” If a student has an interest in engineering they might choose the Science, Technology, Engineering, & Math Academy. These academies are not necessarily tied to careers, but to an overall educational experience focused around an academic area. All students receive a quality education that meets all DCSD graduation requirements, regardless of the academy they select or the pathway they choose. <br> <br>
        The second difference among the academies is in the elective credits students can choose throughout their time in high school. A full range of AP courses and a full complement of electives are available for all students, regardless of their chosen academy. To connect the academies to the community, Castle View High School pursues partnerships and internships. In this way, students can apply what they learn outside of the school, and can begin learning some of the specific skills they will need as they move beyond high school. Through inter-disciplinary organization, our model places core subject teachers with elective teachers into academy teams who work to provide relevant learning experiences for each student who has chosen that particular academy. Our vision is to provide a collaborative environment for teachers to present curriculum, facilitate learning and ensure each student has the skills and aptitude to either enter the work force or continue educational pursuits beyond the walls of Castle View High School. <br> <br>
        Individual student interest and relevance is critical to academic success at Castle View. During the initial registration, every student will complete the “Choices” survey at the collegeincolorado.org website. The “Choices” program will assist students and parents in selecting an academy that meets each student’s individual interests. It also provides insight into the selection of each student’s individual educational pathway. We believe students and parents will find this information interesting, compelling and vital to an appropriate selection of the academy each student attends.`;

        console.log(page);
        jQuery.grep(pageContentObjects, function(x) {
            if(x.name === page) {
                $scope.pageHTML = x.html;
                $scope.currentPage = page;
            };
        });
    };
    $scope.setPageBody(""); // Run on load

});

pageContentObjects = [
    {name: 'bhs', html: `
        <div class="bhs academyHeader noselect">BHS</div>
    `},
    {name: 'stem', html: `
        <div class="stem academyHeader noselect">STEM</div>
    `},
    {name: 'vpa', html: `
        <div class="vpa academyHeader noselect">VPA</div>
    `},
    {name: 'lgc', html: `
        <div class="lgc academyHeader noselect">LGC</div>
    `}
];
