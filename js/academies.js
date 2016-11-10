// Created by Nate St. George 2016

// I HACKED INTO THE MAINFRAME

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
        <div class="bhs academyHeader noselect">BHS</div> <br>
        The Biotechnology/Health Sciences Academy is designed to help students become: problem solvers, critical thinkers, self-directed learners, excellent communicators and effective team members. Assuring their success in a rigorous curriculum designed to prepare students for work or future study. The BHS Academy emphasizes team-based learning focused on relevant situations. Students gain skills necessary to perform duties in many biotechnical and health science settings. <br> <br>
        The Biotechnology/Health Science Academy was created to meet interest demands of students and the labor needs of the community. Projections from the U.S. Department of Labor indicate that health care careers will experience the greatest growth in the next ten years. Biotechnology will also experience a high demand for qualified professionals as this science expands. <br> <br>
        Biotechnology Pathway This pathway provides three in-depth courses in biotechnology or the science of DNA. Students at the sophomore level will begin their study of Biotechnology I and progress to Biotechnology III in their senior year. From this point, they will enter internship opportunities with cooperating nearby institutions. Students learn the basics of gel electrophoresis, PCR, micro pipetting, solution preparation, aseptic technique and other procedures used in biotechnology. Students learn patterns of Inheritance, Protein Synthesis, epigenesis, mutations, the molecular biology of cancer, knowledge and use of adult and embryonic stem cells, biomarkers, evolutionary genomics and other knowledge basic to the understanding of genomes. Students also explore the ethics of using stem cells, gene testing, gene therapy, etc., using models for ethical decisions developed by the medical community. <br> <br>

    `},
    {name: 'stem', html: `
        <div class="stem academyHeader noselect">STEM</div> <br>
        The Science, Technology, Math & Engineering Academy offers innovative courses in science, technology, engineering, and mathematics with a supportive staff helping all students achieve their potential while acknowledging each individual’s learning style. <br> <br>
        Envisioning education as a partnership among students, parents, staff, and community, the STEM Academy offers a program with diversified educational opportunities including engaging classroom instruction, field trips, guest speakers, and internship opportunities. <br> <br>
        Students in the STEM Academy can take advantage of Castle View’s innovative schedule to study science, technology, math, and engineering concepts at a deep level with teachers dedicated to help them gain and apply skills leading to a variety of higher education and career opportunities in engineering, computer science, research, and related fields.
    `},
    {name: 'vpa', html: `
        <div class="vpa academyHeader noselect">VPA</div> <br>
        CVHS students in the Visual and Performing Arts Academy receive rigorous preparation in core subject areas with instruction based on awareness of these students’ primary learning styles – visual, auditory and kinesthetic. <br> <br>
        Study of the arts encourages students to develop the tools of thinking itself: careful observation of the world, mental representation of what is observed or imagined, abstraction from complexity, symbolic representation and qualitative judgment. <br> <br>
        Study of the arts helps students connect intellectual academic accomplishments with creative expression and experience a truly balanced education by linking cognitive growth to social and emotional development focused on skills and interests. <br> <br>
        Study of the arts empowers students to strengthen problem-solving and critical thinking skills, to develop a sense of craftsmanship and appreciation and fosters opportunities for development of a positive work ethic with pride in a job sell done. <br> <br>
        Study of the arts provides students a supportive environment that celebrates personal talents with opportunities to excel in areas of giftedness such as art, dance, drama, instrumental music and voice.
    `},
    {name: 'lgc', html: `
        <div class="lgc academyHeader noselect">LGC</div> <br>
        In the Leadership, Global Studies, and Communication Academy, students are prepared to enter the global economy with the necessary skills to understand the world around them, communicate effectively, and take action in local, national, and global issues. Benefiting from a wide range of community and professional relationships, LGC students will gain real world experience working alongside professionals including journalists, business leaders, professors, lawyers, and politicians. <br> <br>
        All students in the LGC Academy will receive a solid fundamental education in core areas such as English, Math, Social Studies, the sciences and the arts. From there, students may choose to follow a pathway offering experiences in Leadership, Law and Government, Communication, or Global Studies. <br> <br>
        Leadership Pathway - Discover and hone your potential. Leadership is a theme that will be woven throughout the academy. Students will explore what it means to lead, and will be given ample opportunities to exercise their skills. Specific courses will be offered in each pathway providing opportunities to formally study leadership and to participate in selected projects. Leadership is action, not position, and the LGC Academy will prepare students to take action in a variety of ways. Students will be equipped and encouraged to lead on campus as peer tutors and counselors or members of student government. Others may champion a charitable cause, captain an athletic team, or lead an activity or club. Leadership skills learned and practiced in academy activities may be applied anywhere in the school and community. Learn to lead then see where your vision takes you! <br> <br>
        Law and Government Pathway - Students enrolling in the Law and Government pathway will study the foundations of our legal and political systems and have the ability to actively engage with other students in programs such as Colorado Close-Up, Model UN, Mock Trial and Competitive Debate. Those who have a desire to build their logical thinking, reasoning, and persuasive skills as well as those interested in learning about how our society functions as a democracy on many levels will find this pathway fascinating and rewarding. Contacts with lawyers, law enforcement officials, and area political leaders will offer Law and Government students' opportunities to gain first hand knowledge in the field as well as develop mentoring relationships to help chart future academic and career paths. <br> <br>
        Global Studies Pathway - Our world is becoming more interconnected everyday. Today’s generation needs to understand events in Asia, Europe, and around the world. Those who are well prepared to grasp international opportunities will be well positioned to enter the global marketplace. Students in the global studies pathway will receive an excellent foundation in World language and culture. From there, students may also choose courses focusing on international law, business, environmental science, or other specific applications related to our world. <br> <br>
        Communications Pathway - Students following the Communication pathway are the eyes, ears and mouthpiece of CVHS. Beginning with a strong foundation in mass media, communication skills, and production techniques, students choose to specialize in a particular media type. Some may follow the journalism path and work to produce Castle View’s print or online newspaper. Others may work on the official Castle View print or video yearbook. TV production courses allow students to explore all aspects of television while creating cable TV broadcasts viewed throughout the school and surrounding community. Coming soon will be Castle View’s own radio station, directed and staffed completely by CVHS students.
    `}
];
