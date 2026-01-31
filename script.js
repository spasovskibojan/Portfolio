// Navbar dropdown
const navbar = document.getElementById('navbar');
const dropdown = document.querySelector('.dropdown');
const dropdownContent = document.querySelector('.dropdown-content');

function closeNavbarOnClickOutside(event) {
    // Check if the click was outside the navbar or dropdown
    if (!navbar.contains(event.target) && !dropdown.contains(event.target)) {
        dropdownContent.style.display = 'none';
    }
}

document.addEventListener('click', closeNavbarOnClickOutside);
const dropdownButton = dropdown.querySelector('.dropbtn');
dropdownButton.addEventListener('click', function (event) {
    event.stopPropagation();

    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
    } else {
        dropdownContent.style.display = 'block';
    }
});

// Navbar change active site
document.addEventListener('DOMContentLoaded', (event) => {
    const currentLocation = location.href
    const menuItem = document.querySelectorAll('.navbar .nav-right li a')
    console.log(menuItem)
    menuItem.forEach(item => {
        item.classList.remove('active')
        if (item.href == currentLocation) {
            item.classList.add('active')
        }
    })
})

// Contact form
if (location.href == 'contact.html') {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert('Thank you for reaching out! I will contact you soon.');
            document.getElementById('contact-form').reset();
        } else {
            alert('Please fill out all fields.');
        }
    });
}

// Work script
function loadSmartRoutingApp() {
    var firstStatePage = document.getElementById('workPageContainer');
    firstStatePage.innerHTML = "";
    window.scrollTo(0, 0);

    var singleProject = document.getElementById('singleProjectPart');
    singleProject.innerHTML = `
        <div class="portfolio-container">
            <div id="goBackBtn" onclick="goToWorkPage()">< Work</div>
            <section class="project-overview">
                <h1>Smart Routing App - Route Optimization Platform</h1>
                <p>I designed and developed a comprehensive route optimization web application that revolutionizes trip planning through intelligent algorithms and modern web technologies. This full-stack solution combines React, Django, and the Travelling Salesman Algorithm to provide users with the most efficient paths between multiple destinations, supporting various transportation modes and route types.</p>
                <img src="images/projects/Smart_Routing_App/1.png" alt="Smart Routing App Main Interface">
                <h2>Key Features</h2>
                <ul>
                    <li><strong>Advanced Route Optimization:</strong> Implements the Travelling Salesman Algorithm to calculate the shortest possible route visiting all destinations, supporting both round-trip and one-way journey types.</li>
                    <li><strong>Multi-Modal Transportation:</strong> Users can optimize routes for three different transportation modes - car, bicycle, or walking - each with tailored routing algorithms.</li>
                    <li><strong>Interactive Map Interface:</strong> Built on OpenStreetMap via React Leaflet, allowing users to add locations by clicking directly on the map or searching by name with autocomplete suggestions.</li>
                    <li><strong>Turn-by-Turn Navigation:</strong> Provides detailed step-by-step directions with distance and estimated time for each segment of the journey.</li>
                    <li><strong>User Authentication:</strong> Secure JWT-based authentication system enabling personalized experiences and saved routes per user account.</li>
                    <li><strong>Route Management:</strong> Save routes with custom names, load previously saved routes, and import locations from CSV files (format: title, lng, lat).</li>
                    <li><strong>Real-Time Route Visualization:</strong> Drag and drop waypoints to adjust routes dynamically, with real-time updates on the map.</li>
                </ul>
                <p>This project demonstrates my expertise in <strong>Django REST Framework</strong>, <strong>React</strong>, and <strong>external API integration</strong>. The seamless integration of OpenStreetMap, OpenCage Data, and OpenRouteService APIs showcases my ability to build complex, real-world applications that solve practical problems efficiently.</p>
            </section>
            
            <section class="page-overview">
                <h2>Features Overview</h2>
                <div class="page">
                    <h3>Interactive Map & Location Management</h3>
                    <img src="images/projects/Smart_Routing_App/1.png" alt="Map Interface Screenshot" class="page-image">
                    <p>Add destinations by clicking directly on the map or using the location search with autocomplete. Drag and drop markers to reorder waypoints, with the optimized route updating dynamically on the map interface.</p>
                </div>
                <div class="page">
                    <h3>Turn-by-Turn Navigation</h3>
                    <img src="images/projects/Smart_Routing_App/2.png" alt="Navigation Directions Screenshot" class="page-image">
                    <p>Detailed turn-by-turn navigation instructions with precise distance measurements and estimated travel time for each segment. The directions are dynamically generated based on the optimized route and selected transportation mode.</p>
                </div>
                <div class="page">
                    <h3>Route Optimization Modes</h3>
                    <img src="images/projects/Smart_Routing_App/modes.png" alt="Transportation Modes Screenshot" class="page-image">
                    <p>Choose between round-trip and one-way routes, and select your preferred transportation mode (car, bicycle, or walking). The TSP algorithm ensures the most efficient path is calculated for your specific needs.</p>
                </div>
                <div class="page">
                    <h3>Save & Load Routes</h3>
                    <img src="images/projects/Smart_Routing_App/save.png" alt="Save Routes Screenshot" class="page-image">
                    <p>Authenticated users can save their optimized routes with custom names and reload them anytime. The application also supports CSV import for bulk location additions, streamlining the route planning process.</p>
                </div>
                
                <div class="code-look page">
                    <h3>Technology Stack</h3>
                    <ul>
                        <li><strong>Frontend:</strong> React 19, Vite, React Leaflet, Bootstrap 5, React Router</li>
                        <li><strong>Backend:</strong> Django 5.2, Django REST Framework, Simple JWT, Gunicorn</li>
                        <li><strong>Database:</strong> PostgreSQL (Neon Cloud)</li>
                        <li><strong>External APIs:</strong> OpenStreetMap, OpenCage Data (Geocoding), OpenRouteService (Route Calculation)</li>
                        <li><strong>Deployment:</strong> Render (Frontend & Backend), Neon (Database)</li>
                        <li><strong>Key Algorithms:</strong> Travelling Salesman Problem (TSP) for route optimization</li>
                    </ul>
                    <a target="_blank" href="https://smart-routing-app-1.onrender.com/">Live Demo of the project</a>
                    <span style="display:block">(because of the deployment limits, you may need to wait up to 1 minute for the project to start)</span>
                </div>
            </section>
        </div>
    `;
}

function loadMinistryWebsite() {
    var firstStatePage = document.getElementById('workPageContainer');
    firstStatePage.innerHTML = "";
    window.scrollTo(0, 0);

    var singleProject = document.getElementById('singleProjectPart');
    singleProject.innerHTML = `
        <div class="portfolio-container">
            <div id="goBackBtn" onclick="goToWorkPage()">< Work</div>
            <section class="project-overview">
                <h1>Ministry of Finance of the Republic of Macedonia - Website Development</h1>
                <p>I designed and developed a fully responsive website for the Ministry of Finance of the Republic of Macedonia, leveraging React for the frontend and Firebase for hosting and authentication. The website offers a comprehensive user experience with multilingual support (Macedonian and English), enabling users to easily access critical information about the ministry, including news, services, and job opportunities.</p>
                <img src="images/projects/ministry1.png" alt="">
                <h2>Key Features</h2>
                <ul>
                    <li><strong>Fully Responsive Design:</strong> The website is designed to work seamlessly across devices of all sizes, ensuring an optimal experience for users on mobile, tablet, and desktop.</li>
                    <li><strong>Multilingual Support:</strong> The website supports both Macedonian and English, allowing users to switch languages for a more inclusive experience.</li>
                    <li><strong>Firebase Authentication:</strong> Users can sign up, sign in, and manage their profiles securely, utilizing Firebase Authentication for a smooth login experience.</li>
                    <li><strong>Dynamic Job Listings:</strong> Authenticated users have the ability to add new job listings and view listings posted by others, streamlining the process of job application and recruitment.</li>
                    <li><strong>Data Management with Firebase:</strong> The website integrates with Firebase for data storage and real-time updates, ensuring job listings and news content are consistently up-to-date.</li>
                </ul>
                <p>This project demonstrates my ability to implement full-stack solutions using modern web technologies, including React, Firebase, and responsive design principles. The integration of authentication and dynamic content showcases my expertise in creating interactive and scalable applications.</p>
            </section>
            
            <section class="page-overview">
                <h2>Pages Overview</h2>
                <div class="page">
                    <h3>Home Page</h3>
                    <img src="images/projects/m1.png" alt="Home Page Screenshot" class="page-image">
                    <p>The Home page provides a comprehensive introduction to the Ministry of Finance of the Republic of Macedonia. It features essential information about the ministry, including its mission, vision, and services. The page is designed to engage users with quick access to key resources and the latest news.</p>
                </div>
                <div class="page">
                    <h3>News Page</h3>
                    <img src="images/projects/ministry2.png" alt="News Page Screenshot" class="page-image">
                    <p>The News page displays the latest updates and important news articles related to the Ministry of Finance. It is dynamically updated via Firebase, ensuring that users always have access to the most current information.</p>
                </div>
                <div class="page">
                    <h3>Services Page</h3>
                    <img src="images/projects/ministry3.png" alt="Services Page Screenshot" class="page-image">
                    <p>The Services page provides a detailed overview of the various services offered by the Ministry of Finance. Users can explore a wide range of financial services available to citizens and businesses, helping them navigate important processes more easily.</p>
                </div>
                <div class="page">
                    <h3>Job Listings Page</h3>
                    <img src="images/projects/ministry4.png" alt="Job Listings Page Screenshot" class="page-image">
                    <p>The Job Listings page showcases available job opportunities within the Ministry of Finance. Authenticated users can view, add, and manage job listings, streamlining the recruitment process. The integration of Firebase ensures real-time updates to the job listings.</p>
                </div>
                <div class="page">
                    <h3>Login Page</h3>
                    <img src="images/projects/ministry5.png" alt="Login Page Screenshot" class="page-image">
                    <p>The Login page allows users to sign in or sign up using Firebase Authentication. This page ensures secure access to protected resources, including job listings and profile management.</p>
                </div>
                <a target="_blank" href="https://ministryoffinancemk.web.app/">Live Demo of the project</a>
            </section>
        </div>
    `;
}

function loadAIResumePlatform() {
    var firstStatePage = document.getElementById('workPageContainer');
    firstStatePage.innerHTML = "";
    window.scrollTo(0, 0);

    var singleProject = document.getElementById('singleProjectPart');
    singleProject.innerHTML = `
        <div class="portfolio-container">
            <div id="goBackBtn" onclick="goToWorkPage()">< Work</div>
            <section class="project-overview">
                <h1>AI Resume & Career Platform</h1>
                <p>An AI-powered platform using Python and Streamlit that revolutionizes job applications through intelligent automation. Combines Resume Analyzer and AI Career Coach features, leveraging Meta's Llama 3.3 70B via Groq API for ultra-fast inference.</p>
                <img src="images/projects/AI_Resume_Platform/2.png" alt="AI Resume Platform Main Interface" style="width:50%; height:40%;">
                <h2>Key Features</h2>
                <ul>
                    <li><strong>Resume Analysis:</strong> AI-powered resume-to-job matching with detailed scoring and keyword analysis.</li>
                    <li><strong>Career Coaching:</strong> Personalized career path recommendations and skills development guidance.</li>
                    <li><strong>Interview Preparation:</strong> Auto-generated technical and behavioral interview questions tailored to your profile.</li>
                </ul>
                <p>This project shows my expertise in AI integration, NLP, PDF parsing with PyPDF2, and building scalable Streamlit applications with production-ready resource management.</p>
            </section>
            
            <section class="page-overview">
                <h2>Features Overview</h2>
                <div class="page">
                    <h3>AI-Powered Match Score & Analysis</h3>
                    <img src="images/projects/AI_Resume_Platform/3.png" alt="Match Score Results" class="page-image" style="width:50%; height:40%;">
                    <p>Comprehensive match score with detailed AI feedback on strengths, weaknesses, and specific optimization recommendations.</p>
                </div>
                <div class="page">
                    <h3>Keyword Analysis</h3>
                    <img src="images/projects/AI_Resume_Platform/4.png" alt="Keyword Comparison" class="page-image" style="width:50%; height:40%;">
                    <p>Identifies found and missing skills from job descriptions, helping users optimize keyword incorporation.</p>
                </div>
                <div class="page">
                    <h3>Interview Preparation Questions</h3>
                    <img src="images/projects/AI_Resume_Platform/6.png" alt="Interview Questions" class="page-image" style="width:50%; height:40%;">
                    <p>Customized technical and behavioral interview questions based on resume and job description analysis.</p>
                </div>
                <div class="page">
                    <h3>AI Career Coach</h3>
                    <img src="images/projects/AI_Resume_Platform/8.png" alt="Career Suggestions" class="page-image" style="width:50%; height:60%;">
                    <p>Personalized career path suggestions with top marketable skills identification and actionable development steps.</p>
                </div>
                
                <div class="code-look page">
                    <h3>Technology Stack</h3>
                    <ul>
                        <li><strong>Frontend:</strong> Streamlit</li>
                        <li><strong>AI Model:</strong> Meta's Llama 3.3 70B via Groq API</li>
                        <li><strong>NLP & Processing:</strong> PyPDF2, custom prompt engineering</li>
                        <li><strong>Resource Management:</strong> Smart rate limiting with daily tracking</li>
                    </ul>
                    <a target="_blank" href="https://resume-career-platform.streamlit.app/">Live Demo of the project</a>
                </div>
            </section>
        </div>
    `;
}

function loadTeamToDo() {

    var firstStatePage = document.getElementById('workPageContainer');
    firstStatePage.innerHTML = "";
    window.scrollTo(0, 0);

    var singleProject = document.getElementById('singleProjectPart');
    singleProject.innerHTML = `
        <div class="portfolio-container">
            <div id="goBackBtn" onclick="goToWorkPage()">< Work</div>
            <section class="project-overview">
                <h1>Team ToDo - Task Management Solution</h1>
                <p>I developed a robust Team ToDo application using C# .NET Framework to streamline task management for teams. This project combines a user-friendly interface with powerful backend functionality, enabling efficient collaboration and task tracking in a professional environment.</p>
                <img src="images/projects/Team%20Todo/3.png" alt="Team ToDo Main Interface">
                <h2>Key Features</h2>
                <ul>
                    <li><strong>Task Management:</strong> Allows users to create, assign, and track tasks with customizable priorities and deadlines.</li>
                    <li><strong>User Authentication:</strong> Secure login system to ensure only authorized team members access the app.</li>
                    <li><strong>Real-Time Updates:</strong> Dynamic task status updates for seamless team coordination.</li>
                    <li><strong>Admin Dashboard:</strong> Comprehensive statistics and user management for administrators.</li>
                </ul>
                <p>This project highlights my skills in full-stack development, including C# .NET, database design, and UI/UX implementation. 
                There is multilevel hierarchy authorization and each role can do different things, such as task creation for employees, team management and task delegation for team leaders, and full administrative control for admins. 
                Also I have implemented Datatables to offer more options for tasks like searching, pagination, sorting and filtering the number of tasks in each page.
                It demonstrates my ability to build practical, scalable solutions for team productivity.</p>
            </section>
            
            <section class="page-overview">
                <div class="page">
                    <h3>User Guide/ Home Page</h3>
                    <img src="images/projects/Team%20Todo/1.png" alt="User Guide Screenshot" class="page-image">
                    <img src="images/projects/Team%20Todo/2.png" alt="User Guide Screenshot" class="page-image">
                    <p>The User Guide page provides instructions for both users and administrators to maximize app usage.</p>
                </div>
                <div class="page">
                    <h3>Teams Management</h3>
                    <img src="images/projects/Team%20Todo/4.png" alt="Teams Management Screenshot" class="page-image">
                    <p>The Teams Management page enables organization of tasks by teams, with options to view statistics and manage team-specific workflows.</p>
                </div>
                <div class="page">
                    <h3>Task Creation Page</h3>
                    <img src="images/projects/Team%20Todo/8.png" alt="Task Creation Screenshot" style="width: 300px !important; height: 330px !important;" class="page-image">
                    <p>The Task Creation page enables users to add new tasks with details like priority, deadline, and assignees.</p>
                </div>
                <div class="page">
                    <h3>Admin Dashboard</h3>
                    <img src="images/projects/Team%20Todo/6.png" alt="Admin Dashboard Screenshot" class="page-image">
                    <p>The Admin Dashboard offers statistics and controls for managing users and task progress.</p>
                </div>
                <div class="page">
                    <h3>User Role Management</h3>
                    <img src="images/projects/Team%20Todo/7.png" alt="Admin Role Assignment Screenshot" class="page-image">
                    <p>The User Roles page allows administrators to promote users to Administrator, Team Leader or Employee.</p>
                </div>
                
                <a target="_blank" href="http://team-todo.somee.com/">Live Demo of the project</a>
            </section>
        </div>
    `;
}

function loadQuizWebsite() {
    var firstStatePage = document.getElementById('workPageContainer');
    firstStatePage.innerHTML = "";
    window.scrollTo(0, 0);

    var singleProject = document.getElementById('singleProjectPart');
    singleProject.innerHTML = `
        <div class="portfolio-container">
            <div id="goBackBtn" onclick="goToWorkPage()">< Work</div>
            <section class="project-overview">
                <h1>Educational Quiz - Interactive Learning Platform</h1>
                <p>I designed and developed an interactive and engaging educational quiz application, aimed at providing users with a fun and effective way to test their knowledge. The project is built using modern web technologies to ensure a seamless user experience with a dynamic and visually appealing interface.</p>
                <img src="images/projects/q1.png" alt="Quiz Image">
                <h2>Key Features</h2>
                <ul>
                    <li><strong>Interactive Quiz System:</strong> Users can participate in multiple-choice quizzes across various subjects, enhancing their learning experience.</li>
                    <li><strong>Real-Time Score Tracking:</strong> The app dynamically updates scores, allowing users to monitor their progress instantly.</li>
                    <li><strong>Engaging UI and UX:</strong> Designed with a clean and modern interface to ensure a user-friendly experience.</li>
                    <li><strong>Category-Based Questions:</strong> Users can select from different categories, making it a customizable learning tool.</li>
                    <li><strong>Responsive Design:</strong> Optimized for all devices, ensuring smooth usability on desktop, tablet, and mobile screens.</li>
                </ul>
                <p>This project showcases my ability to create interactive and engaging web applications using JavaScript, HTML, and CSS. The quiz functionality, along with a visually appealing design, demonstrates my expertise in front-end development and user experience design.</p>
            </section>
            
            <section class="page-overview">
                <h2>Pages Overview</h2>
                <div class="page">
                    <h3>Home Page</h3>
                    <p>The Home page introduces users to the quiz platform, allowing them to choose categories and start their learning journey immediately.</p>
                </div>
                <div class="page">
                    <h3>Quiz Page</h3>
                    <img src="images/projects/quiz1.png" alt="Quiz Page Screenshot" class="page-image">
                    <p>The Quiz page presents users with multiple-choice questions, allowing them to select answers and track their scores dynamically.</p>
                </div>
                <div class="page">
                    <h3>Results Page</h3>
                    <img src="images/projects/quiz2.png" alt="Results Page Screenshot" class="page-image">
                    <p>The Results page displays the user's final score, encouraging them to improve and retake quizzes for better learning outcomes. Also there is an option to see the correct answers on each question,</p>
                </div>
                <a target="_blank" href="https://spasovskibojan.github.io/Edukativen-Kviz/">Live Demo of the project</a>
            </section>
        </div>
    `;
}


function goToWorkPage() {
    location.reload()
}

// Toggle Earlier Work Section
const toggleBtn = document.getElementById('toggleEarlierWork');
const toggleBtnBottom = document.getElementById('toggleEarlierWorkBottom');
const earlierWorkSection = document.getElementById('earlierWorkSection');
const toggleText = document.getElementById('toggleText');
const toggleIcon = document.getElementById('toggleIcon');

if (toggleBtn) {
    toggleBtn.addEventListener('click', function () {
        earlierWorkSection.classList.toggle('show');
        toggleBtn.classList.toggle('active');

        if (earlierWorkSection.classList.contains('show')) {
            toggleText.textContent = 'Show Less';
        } else {
            toggleText.textContent = 'Show Earlier Work';
        }
    });
}

// Bottom button also toggles the section
if (toggleBtnBottom) {
    toggleBtnBottom.addEventListener('click', function () {
        earlierWorkSection.classList.remove('show');
        toggleBtn.classList.remove('active');
        toggleText.textContent = 'Show Earlier Work';

        // Smooth scroll back to the top button
        toggleBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
}
