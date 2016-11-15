// Created by Nate St. George 2016

// Angular that controls the Academics page.

function getTimeRemaining(endDate){         // For grad page. Sets clock for seniors. https://www.sitepoint.com/build-javascript-countdown-timer-no-dependencies/
  var t = endDate - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
};

var app = angular.module("academics", ['ngSanitize', 'angular-bind-html-compile'])
app.controller("academicsCtrl", function($scope) {

    // Graduation date variables. CHANGING THESE WILL CHANGE THE COUNTDOWN AND THE DATE DISPLAYED.
    $scope.gradDate = new Date(2017, 4, 17, 9, 00); // Note that months are zero-indexed. May is 4.

    $scope.months = ["January", "February", "March", "April",
                    "May", "June", "July", "August",
                    "September", "October", "November", "December"];

    $scope.countdownValue = 0;

    function initCountdown() {
        var timer = setInterval(function() {
            var t = getTimeRemaining($scope.gradDate);

            $scope.$apply(function() {
                if(t.days == 0) {
                    $scope.countdownValue = "Seniors, you have "+t.hours+" hours, "+t.minutes+" minutes, and "+t.seconds+" seconds left!";
                } else if (t.hours == 0) {
                    $scope.countdownValue = "Seniors, you have "+t.days+" days, "+t.minutes+" minutes, and "+t.seconds+" seconds left!";
                } else if(t.minutes == 0) {
                    $scope.countdownValue = "Seniors, you have "+t.days+" days, "+t.hours+" hours, and "+t.seconds+" seconds left!";
                } else if(t.seconds == 0) {
                    $scope.countdownValue = "Seniors, you have "+t.days+" days, "+t.hours+" hours, and "+t.minutes+" minutes left!";
                } else {
                    $scope.countdownValue = "Seniors, you have "+t.days+" days, "+t.hours+" hours, "+t.minutes+" minutes, and "+t.seconds+" seconds left!";
                }

            });
        }, 1000);
    };

    initCountdown();

    $scope.pageObjects = [     // Array of objects with all basic page data
        { name: "Advanced Placement", shorter: "AP", page: "ap" },
        { name: "Career and Tech Ed", shorter: "Career", page: "cte" },
        { name: "Concurrent Enrollment", shorter: "C. Enrollment", page: "ce" },
        { name: "Counseling", shorter: "Counseling", page: "counseling" },
        { name: "Gifted and Talented", shorter: "G&T", page: "gt" },
        { name: "Graduation", shorter: "Graduation", page: "grad" },
        // { name: "Internships", shorter: "Internships", page: "intern" },
        // { name: "Library", shorter: "Library", page: "lib" },
        // { name: "Naviance", shorter: "Naviance", page: "navi" },    // IT'S A FAIRY
        { name: "NCAA", shorter: "NCAA", page: "ncaa" },
        // { name: "Infinite Campus", shorter: "IC", page: "ic" },
        { name: "Post Grad", shorter: "Post Grad", page: "pg" },
        { name: "Summer School", shorter: "Summer School", page: "ss" },
        { name: "Staff Directory", shorter: "Staff", page: "sd" },
        { name: "Testing", shorter: "Testing", page: "t" }
    ];

    $scope.pageHTML;
    $scope.currentPage;

    $scope.setPageBody = function(page) {   // Sets page body on new selection or on load.
        $scope.pageHTML = `<h2 class="centered"> Academics </h2> <hr>
        Castle View High School offers more than 200 courses in fourteen content areas of study. Our outstanding academic content areas include Art, Business, Communications, Engineering, English, Humanities, Mathematics, Music, Physical Education, Science, Social Studies, Special Courses, Theatre, and World Languages. <br> <br>
        Students at Castle View will choose an Academy based on their individual interests. Each academy has a unique instructional focus. Each of the academies -- Leadership, Global Studies and Communication; Science, Technology, Engineering &amp; Math; Visual and Performing Arts; and Biotechnology and Health Sciences -- are designed to provide smaller learning communities where students can develop significant relationships with teachers assigned to that academy. In essence, our academy model reduces a typical high school of 2000 students into one of roughly 350 to 400 students “A place where everybody knows your name.” <br> <br>
        Once an academy has been selected, students can choose a more specific course of study within that academy. This specific course of study is called a Pathway. There are eighteen established pathways from which a CV student can choose, or they can design their own. The purpose of choosing a pathway is to create a course of study both relevant and interesting to individual students and their educational and career goals. We hope that by giving students a choice they will self select a pathway that most closely aligns with their individual educational interests. <br> <br>`;

        console.log(page);
        jQuery.grep(pageContentObjects, function(x) {
            if(x.name === page) {
                $scope.pageHTML = x.html;
                $scope.currentPage = page;
            };
        });
    };
    $scope.setPageBody(""); // Run on load

    if(window.location.href.includes("?") && window.location.href.includes("page=")) {
        var pageBegin = window.location.href.indexOf("page=")+5;
        var pageEnd = window.location.href.indexOf("&");
        if(pageEnd == -1) {
            console.log(window.location.href.substr(pageBegin));
            $scope.setPageBody(window.location.href.substr(pageBegin));
        } else {
            console.log(pageEnd);
            console.log(window.location.href.substr(pageBegin, pageEnd));
            $scope.setPageBody(window.location.href.substr(pageBegin, pageEnd));
        }
    }
});

pageContentObjects = [  // All the pages in academics. The HTML is all in here. This is what you're looking for if you want to make changes to any pages.
    { name: "ap", html: `
        <h3 class="centered"> Welcome, AP students and parents! </h3> <hr>
        <table>
            <tr>
                <td>
                    Registration for Advanced Placement Exams will take place in the Spring! <br> <br>

                    Please direct any questions to Katie Winsor at 303-387-9015. <br> <br>
                    <p> Advanced Placement (AP) is a program of college-level courses and exams that gives high school students the opportunity to earn credit, advanced placement, or both, for college while still in high school. AP classes will be the most rigorous courses offered at Castle View High School and will receive a weighted grade. <br> </p>
                    <p> AP exams are an essential part of the AP experience, enabling students to demonstrate their mastery of college level course work.  Depending on your score and on the college or university you will attend, you may either receive college credit or advanced placement in courses. This is a great opportunity to practice the skills necessary to prepare for and take a college level cumulative exam. <br> </p>
                    All related AP information will be available online.  It is extremely important that you become aware of this process. <br>
                    Visit the links at the left for information regarding, supplies you will need, testing dates and times and location. <br> <br>

                    Thank you!
                </td>
                <td class="centered left-border">
                    AP Coordinator <br>
                    Katie Winsor <br>
                    katie.winsor@dcsdk12.org <br>
                    (303)387-9015 <br> <br>

                    AP Secretary <br>
                    Val Peoples <br>
                    val.peoples@dcsdk12.org <br>
                    303-387-9014 <br> <br>

                    <hr>

                    <a href="http://www.castleviewhs.com/academics/ap/2014-Supplies.pdf" class="btn btn-primary"> Supplies Needed </a> <br>
                    <a href="http://www.castleviewhs.com/academics/ap/2014-Directions.pdf" class="btn btn-default"> Driving Directions </a> <br>

                </td>

    `},
    { name: 'cte', html: `
        <h3 class="centered"> Career &amp; Tech Ed </h3> <hr>
        Career and Technical Education programs teach employment skills which prepare high school students to start a career, or continue to post-secondary educational opportunities. There are many different CTE programs available; each program addresses life skills in certain areas as well as general employment skills.
        In our district students can take courses offered in: <br> <br>

        Business & Public Administration <br>
        Agricultural & Natural Resources <br>
        STEM, Arts, Design & Info. Technology <br>
        Hospitality, Human Services & Education <br>
        Health Sciences & Public Safety <br>
        Skilled Trades & Technical Sciences <br> <br>
        How to Enroll: <br> <br>
        <ol>
            <li> Please download the DCSD CTE Catalog to see current district CTE course offerings. </li>

            <li> Complete Program Application and turn it into your Counselor by FEB. 15th. </li>
        </ol>
    `},
    { name: 'ce', html: `
        <h3 class="centered"> Concurrent Enrollment </h3> <hr>
        <center> <span class="centered gray-text"> POST SECONDARY ENROLLMENT/DUAL CREDIT OPTION <br>
        Through a partnership with Arapahoe Community College <br>
        Available to Douglas County School District Students <br> <br> </span>

        <span class="centered"> CONCURRENT ENROLLMENT PROGRAM </span> <br>

        2016-2017 Course Offerings at CVHS:
        <ul>
            <li> Customer Service </li>
            <li> Consumer Behavior </li>
            <li> Personal Finance </li>
            <li> Intro/PC Applications </li>
            <li> Net I: Net+ </li>
            <li> Public Speaking </li>
            <li> Interpersonal Communication </li>
            <li> Introduction to Literature </li>
            <li> English Composition I </li>
            <li> College Algebra </li>
            <li> CISCO I </li>
            <li> CISCO II </li>
            <li> Calculus III </li>
            <li> Solidworks/Mechanical </li>
        </ul>
        <span class="smaller"> * Courses are subject to change </span> <br> <br>
        </center>
        <hr>

        Ask your counselor for an ACC Concurrent Enrollment Brochure for complete course descriptions or visit
        <a class="gray-text" href="http://www.arapahoe.edu/departments-and-programs/concurrent-enrollment">ACC's Website</a> <br> <br>

        CONCURRENT ENROLLMENT HIGHLIGHTS. . . <br>

        Courses taught by Douglas County teachers <br>
        Courses taught during regular school day hours <br>
        Earn dual credit (DCSD and Arapahoe Community College college credit) <br>
        A minimal registration fee to be determined <br> <br>

        (additional fees may apply to some courses and are subject to change) <br>
        Students will purchase required textbook(s) <br> <br>

        <b> Check with your specific Colorado college for credit transferability of courses. </b> <br> <br>

        Still have questions? <br>
        See your counselor for detailed information and a Concurrent Enrollment Brochure.
    `},
    { name: "counseling", html: `
        <h3 class="centered"> Counseling </h3> <hr>
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <img class="img img-responsive centered" src="img/academics/counseling.jpg">
                </div>
                <div class="col-md-6">
                    Important Documents <br> <hr class="lighter">
                    <a href="http://www.castleviewhs.com/academics/counseling/newsletters/aug2016.pdf">Counseling Newsletter</a> <br>
                    <a href="http://www.castleviewhs.com/files/counseling2016-seniors-college-app-flow-chart.pdf">College Application Naviance Process</a> <br>
                    <a href="https://drive.google.com/file/d/0B_Oiw7rSyESqTXJQUWwxWmZIaDA/view?usp=sharing">College Information Presentation</a> <br>
                    <a href="http://www.castleviewhs.com/files/counseling-community-service_2013-14.pdf">Community Service Forms</a> <br>
                    <a href="http://www.castleviewhs.com/files/counseling-community-service-resource-list.pdf">Community Service Resource List</a> <br>
                    <a href="http://www.volunteerconnectdc.org/">Community Service Opportunities</a> <br>
                    <a href="http://www.castleviewhs.com/files/counseling-graduation-requirements.pdf">Credit Information</a> <br>
                    <a href="http://www.castleviewhs.com/files/2016-2017CourseGuideR.pdf">Course Guide</a> <br>
                    <a href="http://www.castleviewhs.com/files/counseling-drop-add-form-2014.pdf">Drop/Add Course Form</a> <br>
                    <a href="http://www.castleviewhs.com/files/counseling-homework-request-policy.pdf">Homework Request Policy</a> <br>
                    <a href="https://drive.google.com/file/d/0B_Oiw7rSyESqcDhVSnJYNVo3dW8/view?usp=sharing">Internet Safety Presentation</a> <br>
                    <a href="https://drive.google.com/file/d/0B_Oiw7rSyESqOEJIbVNFMi02SXM/view?usp=sharing">Blocking on Social Media</a> <br>
                    <a href="http://www.castleviewhs.com/files/counseling-life-after-hs.pdf">Life After High School</a> <br>
                    <a href="http://www.castleviewhs.com/files/2016_17Profile.pdf">Student Profile Brochure</a> <br>
                    <a href="https://www.consumeraffairs.com/education/online-colleges/">Online College Reviews</a> <br>
                </div>
            </div>
            <div class="row">
                <div class="col-md-10">
                    <hr>
                    <p>
                        The counseling program provides a comprehensive and sequential approach that promotes the formation of productive, conscientious and responsible students by addressing their academic, career and personal/social development.
                    </p>
                </div>
            </div>
        </div>
    `},
    { name: 'gt', html: `
        <h3 class="centered">Gifted and Talented</h3> <hr>
        Honors, Advanced Placement, and Dual enrollment courses are offered in many areas to meet the needs of our high/potential gifted students.  Please refer to our current high school course catalog for a complete listing of opportunities and requirements for enrollment eligibility.  In addition to academic programing options all students create a personalized pathway to ensure post-secondary readiness through the Individual Career and Academic Plan (ICAP) process. <br> <br>
        Please contact Kari Bartos, kari.bartos@dcsdk12.org, if you have questions about GT programming or supports.
    `},
    { name: 'grad', html: `
        <h3 class="centered"> Graduation </h3> <hr>
        <div class="red-rocks">
            <div class='red-rocks-text' ng-bind="countdownValue"></div>
        </div> <br>
        <center> Graduation is at {{ gradDate.getHours() + ":" + (gradDate.getMinutes() < 10?"0":"") + gradDate.getMinutes() }} AM on {{ months[gradDate.getMonth()]+" "+gradDate.getDate()+", "+gradDate.getFullYear() }} at Red Rocks Ampitheater. </center>
        <hr>
        <div class='centered'>
            Helpful Files:
            <ul>
                <li> <a href="https://castleviewhs.com/files/graduation-alternate-route-to-red-rocks-from-south.pdf"> Alternate Route to Red Rocks </a> </li>
                <li> <a href="https://castleviewhs.com/files/graduation-elderly_seating.pdf">Elderly Seating</a> </li>
                <li> <a href="https://castleviewhs.com/files/graduation-preferred-seating-2017.pdf">Preferred Seating Form</a> </li>
                <li> <a href="https://castleviewhs.com/files/graduation-red-rocks-map.pdf">Map of Red Rocks </a> </li>
            </ul>
        </div>
    `},
    { name: 'ncaa', html:  `
        <h3 class='centered'> NCAA </h3> <hr>
        <h4 class='centered'> NCAA Freshmen Eligibility Standards </h4> <br>

        The NCAA recently released the new SAT/ACT sliding scale that corresponds with the increased GPA requirements for the class of 2016 and beyond. Any student-athlete beginning high school in the fall of 2012 and after who is even remotely considering the possibility of playing a sport collegiately needs to understand these changes. The wiggle room to correct academic shortcomings has been greatly reduced.
        Here is a summary of the new D1 academic requirements for a Full Qualifier that take affect for the class of 2016 and beyond: <br> <br>
        <ul>
            <li> The minimum core course GPA has increased from 2.00 to 2.30 </li>
            <li> 10 of the 16 core course requirements must be satisfied prior to the start of the senior year </li>
            <li> 7 of those 10 core courses must be from the English, Math and Science subsections </li>
            <li> Grades earned in the 10 core courses are "locked in" for the purpose of calculating the final core course GPA </li>
            <li> Any retakes of the first 10 core courses must be completed prior to senior year </li>
        </ul>
        <br>
        The NCAA has also introduced a new status for the class of 2016 - the "Academic Redshirt." An “Academic Redshirt” may receive a scholarship and practice with their team, but may not participate in game competition as a college freshman. Students with a GPA of 2.30 or above may achieve either “Academic Redshirt” or “Full Qualifier” status, depending on their SAT/ACT test scores. Students with a core course GPA between 2.00 and 2.29 cannot attain “Full Qualifier” status but may achieve “Academic Redshirt” status by meeting minimum sliding scale test score requirements.
        <br> <br>
        The new <a href="https://castleviewhs.com/files/counseling-ncaa.pdf">sliding SAT/ACT scale</a> results in significant changes in minimum test score requirements. The minimum SAT score required to compete as a college freshman increased by 180 points while the minimum ACT score increased by an average of 14 points (sum score). <br> <br>
        Here are two examples of the changes to the new sliding scale: <br> <br>
        <ul>
            <li> Prior to 2016: 2.00 core course GPA + 1010 SAT or 86 ACT = Full Qualifier </li>
            <li> 2016 and after: 2.00 core course GPA + 1020 SAT or 86 ACT = Academic Redshirt </li>
            <li> Prior to 2016: 2.50 core course GPA + 820 SAT or 68 ACT = Full Qualifier </li>
            <li> 2016 and after: 2.50 core course GPA + 1000 SAT or 85 ACT = Full Qualifier </li>
        </ul>
        <br> <br>

        Remember, the NCAA does not include the writing component of the SAT or ACT and the ACT score is a sum score (not average) of the English, math, reading and science sections. <br> <br>

        Finally, just because a student-athlete meets the minimum NCAA academic standards, it doesn't mean they will be admitted to play sports at the college of their choice. Many universities have academic standards for incoming freshman athletes that are much higher than the NCAA minimum requirements. <br> <br>

        So what does this all mean? Student-athletes must start tracking courses early. A student-athlete should calculate their initial core course GPA at the conclusion of their first semester in high school and continue to do so each semester thereafter.
        Now more than ever, every semester counts. <br> <br>

        Castle View High School has teamed up with CoreCourseGPA.com to provide custom online software to all student-athletes to assist in tracking their progress towards meeting NCAA initial eligibility requirements. <a href="http://www.sabercatsports.org/Ncaa/ncaa.html"> Click here to register with CoreCourseGPA.com now.</a> <br> <br>

        Please note, Division II will require 16 core courses beginning August 1, 2013. <br> <br>

        <table>
            <tr>
                <td>
                    DIVISION I -- 16 CORE-COURSE RULE <br>
                    16 Core Courses: <br>
                    <div class='small'>
                        English--4 years <br>
                        Mathematics (Algebra I or higher)--3 years <br>
                        Natural/physical science--2 years <br>
                        (1 year of lab if offered by high school) <br>
                        Additional English, mathematics or natural/physical science--1 year <br>
                        Social science--2 years <br>
                        Additional courses (from any area above, foreign language or nondoctrinal religion/philosophy)--4 years
                    </div>
                </td>
                <td>
                    DIVISION II -- 14 CORE COURSE RULE <br>
                    14 Core Courses: <br>
                    <div class='small'>
                        English--3 years <br>
                        Mathematics (Algebra I or higher)--2 years <br>
                        Natural/physical science--2 years <br>
                        (1 year of lab if offered by high school. <br>
                        Additional English, mathematics or natural/physical science--2 years <br>
                        Social science--2 years <br>
                        Additional courses (from any area above, foreign language or nondoctrinal religion/philosophy)--3 years
                    </div>
                </td>
            </tr>
        </table>

        PLEASE NOTE: Beginning August 1, 2012, students planning to attend an NCAA Division II institution will be required to complete 16 core courses. <br> <br>

        OTHER IMPORTANT INFORMATION
        Division II has no sliding scale. The minimum core grade-point average is 2.000. The minimum SAT score is 820 (verbal and math sections only) and the minimum ACT sum score is 68. <br> <br>

        14 core courses are currently required for Division II. However, beginning 2012, students will be required to complete 16 core courses. <br> <br>

        16 core course are required for Division I. The SAT combined score is based on the verbal and math sections only. The new writing section will not be used. <br> <br>

        SAT and ACT scores must be reported directly to the Eligibility Center from the testing agency. Scores on transcripts will not be used. <br> <br>

        Students enrolling at an NCAA Division I or II institution for the first time need to also complete the amateurism questionnaire through the Eligibility Center Web site. Students need to request final amateurism certification prior to enrollment. <br> <br>

        For more information regarding the rules, please go to <a href="http://www.ncaa.org/">www.NCAA.org.</a> Click on “Academics and Athletes” then “Eligibility and Recruiting.” Or visit the Eligibility Center Web site at <a href="http://web1.ncaa.org/ECWR2/NCAA_EMS/NCAA.jsp">www.eligibilitycenter.org.</a> <br> <br>

        <a href="https://castleviewhs.com/files/ncaa-quick-ref-guide.pdf">NCAA Eligibility Center Quick Reference Post</a> <br> <br>
        <a href="http://content.ncaa.org/vo/?FileID=ef10eb36-3e41-4168-ae3b-8bbb3e8859b7&m=16b873f8-1a49-4bea-ae8f-f9b86e9caa35&MailID=29579013&listid=27544">NCAA Newsletter</a> <br> <br>

        Please call the NCAA Eligibility Center if you have questions: <br>
        Toll-free number 877/262-1492.
    `},
    { name: 'pg', html: `
        <h3 class='centered'> Post Grad </h3>
        <h4> Useful Links </h4>
        <ul>
            <li> <a data-toggle="collapse" aria-expanded="false" aria-controls="faq" href="#faq"> Show FAQ </a> </li>
            <div class="collapse" id="faq">
                <div class='card'>
                    Former Student / Alumni - NEW ORDERING PROCESS <br> <br>
                    In an effort to provide better and more secure service to our alumni and former students, all transcripts requests, records requests, background verifications, corporate verifications, corporate information requests and government agencies (this does not include Subpoenas), must be made online using our automated student record / information request system. <br> <br>
                    <i>Fax, phone calls and mail requests will no longer be accepted.</i> <hr>
                    <a href="https://douglasco.scriborder.com/">Order Records</a> <br>
                    <a href="http://www.collegeboard.org/">Order Official SAT Scores</a> <br>
                    <a href="http://www.act.org/">Order Official ACT Scores</a> <br> <br>

                    <a href="https://www.dcsdk12.org/student-data-and-information-services#sthash.lSqfwta7.dpuf">More Information</a>

                </div>
            </div>

    `}
];

$('faq').collapse();
