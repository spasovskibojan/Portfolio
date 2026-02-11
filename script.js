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
function loadEmailAuto() {
    var firstStatePage = document.getElementById('workPageContainer');
    firstStatePage.innerHTML = "";
    window.scrollTo(0, 0);

    var singleProject = document.getElementById('singleProjectPart');
    singleProject.innerHTML = `
        <div class="portfolio-container">
            <div id="goBackBtn" onclick="goToWorkPage()">< Work</div>
            <section class="project-overview">
                <h1>EmailAuto - Enterprise AI Multi-Agent Email Automation</h1>
                <p>I architected and developed a <strong>production-grade enterprise AI system</strong> featuring a sophisticated multi-agent cognitive architecture built entirely from scratch. This system goes far beyond basic automation—it implements intelligent decision-making through coordinated AI agents that analyze sender context, reason about organizational involvement, and generate context-aware responses with automatic CC/BCC suggestions based on employee roles and criticality assessment.</p>
                <img src="images/projects/emailauto/personal_dashboard.png" alt="EmailAuto Personal Dashboard">
                <p><span style="color: #007bff; font-weight: bold;">🏢 Industry Project - Finqup Internship (Summer 2025)</span></p>
                <h2>System Architecture</h2>
                <p>EmailAuto implements a <strong>distributed microservices architecture</strong> with <strong>Thread-Aware Routing</strong> and <strong>Customer History Tracking</strong>. Specialized AI agents work in a coordinated pipeline with <strong>department-based isolation</strong>. The system supports multi-tenant operation with role-based access control (Manager/Employee roles), multi-account email management, and three automation modes: Manual, Semi-Automatic (AI drafts, human approves), and Full-Automatic (AI responds autonomously for non-critical emails).</p>
                <p>The backend consists of six core Python microservices orchestrating complex workflows: <strong>GeminiService</strong> (AI gateway with Gemini 2.5 Flash), <strong>MultiAgentService</strong> (3-agent pipeline orchestrator), <strong>AgentService</strong> (agent lifecycle & configuration), <strong>EmailService</strong> (IMAP/SMTP integration with thread tracking), <strong>SchedulerService</strong> (background task workers), and <strong>AuthService</strong> (JWT-based multi-tenant authentication).</p>
            </section>
            
            <section class="page-overview">
                <h2>Advanced AI Engineering & Multi-Agent Workflow</h2>
                
                <div class="page">
                    <h3>Three-Agent Cognitive Pipeline with External Intelligence</h3>
                    <img src="images/projects/emailauto/company_reasoner_1.png" alt="Department-Based Multi-Agent Architecture" class="page-image">
                    <p>The system's intelligence comes from a <strong>coordinated three-agent workflow</strong> I designed from scratch, enhanced with external data enrichment:</p>
                    <ul>
                        <li><strong>Classifier Agent (The Router):</strong> First point of contact that analyzes incoming emails with <strong>Gemini API</strong> to research sender companies (e.g., identifies "@ibm.com" as IBM Corporation with business context). Routes emails to appropriate departments based on content classification (Sales, Support, Finance, Technical, etc.) and maintains thread continuity—subsequent replies on the same thread bypass classification and route directly to the original handling department.</li>
                        <li><strong>Reasoner Agent (The Strategist):</strong> Department-specific AI that performs <strong>advanced reasoning</strong> about response strategy. Analyzes email threads, accesses department-specific knowledge bases, and crucially, performs <strong>intelligent CC/BCC reasoning</strong>—evaluates employee job descriptions and custom "when to include" rules to suggest colleagues with >80% confidence threshold. Generates structured decision summaries (who to involve, what information to include, which documents to attach) via JSON outputs.</li>
                        <li><strong>Writer Agent (The Editor):</strong> Takes the Reasoner's strategic plan and generates the final email with department-specific tone, mandatory compliance footers, and selected attachments from the knowledge base. Each department has unique Writer configurations (e.g., "Empathetic" for Support, "Persuasive" for Sales).</li>
                    </ul>
                    <p>This <strong>chain-of-thought distributed reasoning</strong> enables sophisticated decision-making impossible with single-prompt systems, including organizational awareness and context-rich response generation.</p>
                </div>

                <div class="page">
                    <h3>Intelligent CC/BCC Reasoning System</h3>
                    <img src="images/projects/emailauto/personal_generation_of_response_3.png" alt="AI Agent Configuration Interface" class="page-image">
                    <p>One of the most advanced features is the <strong>AI-powered CC/BCC suggestion system</strong> I engineered:</p>
                    <ul>
                        <li><strong>Employee Profile Analysis:</strong> Each department maintains a list of employees with job descriptions and custom rules defining "when to CC" and "when to BCC" this person</li>
                        <li><strong>Confidence-Based Inclusion:</strong> The Reasoner agent analyzes the email context, planned response, and employee profiles, then suggests CC/BCC only when confidence exceeds 80%—preventing unnecessary email noise</li>
                        <li><strong>Contextual Understanding:</strong> The AI understands organizational hierarchies and decides intelligently (e.g., "CC the sales manager on high-value leads," "BCC finance on pricing discussions")</li>
                        <li><strong>Manual Override:</strong> Users can configure automatic CC/BCC for specific roles or override AI suggestions</li>
                    </ul>
                    <p>This demonstrates my ability to design <strong>AI systems that understand organizational dynamics</strong>, not just email content.</p>
                </div>
                
                <div class="page">
                    <h3>Multi-Mode Automation with Severity Detection</h3>
                    <img src="images/projects/emailauto/personal_permissions.png" alt="AI Response Generation with Automation Modes" class="page-image">
                    <p>The system implements <strong>three automation modes</strong> configurable per department, with intelligent criticality assessment:</p>
                    <ul>
                        <li><strong>Manual Mode:</strong> Traditional email client—user writes all responses</li>
                        <li><strong>Semi-Automatic Mode:</strong> AI generates complete responses with CC/BCC suggestions and attachments, but requires human approval before sending. Ideal for maintaining oversight while leveraging AI efficiency.</li>
                        <li><strong>Full-Automatic Mode:</strong> The system autonomously responds to emails <em>unless</em> a dedicated AI agent assesses the email's <strong>criticality score >70%</strong>. Critical emails automatically fall back to Semi-Automatic mode for human review.</li>
                    </ul>
                    <p><strong>Criticality Detection:</strong> A specialized AI agent analyzes email threads and company context to determine severity using factors like urgency indicators, financial implications, complaint sentiment, and legal keywords. This showcases my understanding of <strong>AI-driven decision gates</strong> in production systems.</p>
                </div>

                <div class="page">
                    <h3>RAG Implementation with Department-Specific Knowledge Bases</h3>
                    <img src="images/projects/emailauto/company_classifier_1.png" alt="System Analytics & Department Intelligence" class="page-image">
                    <p>Implemented <strong>Retrieval-Augmented Generation (RAG)</strong> with a department-isolated architecture:</p>
                    <ul>
                        <li><strong>File-Based Knowledge Storage:</strong> Each department has an <code>/uploads</code> directory containing PDFs, text files, and documents (pricing lists, product specs, policies, templates)</li>
                        <li><strong>Dynamic Context Injection:</strong> When the Reasoner identifies questions requiring specific knowledge (e.g., "What's the pricing for Enterprise plan?"), relevant documents are retrieved and their content injected into the Writer's prompt</li>
                        <li><strong>Department Isolation:</strong> Sales agents can't access Support documents and vice versa, ensuring knowledge base security and relevance</li>
                        <li><strong>Semantic Matching:</strong> The system analyzes document descriptions to determine relevance, then extracts and injects pertinent sections</li>
                    </ul>
                    <p>This ensures AI responses contain <strong>accurate, company-specific information</strong> without hallucination—critical for enterprise use.</p>
                </div>

                <div class="page">
                    <h3>AI Response Generation Workflow</h3>
                    <img src="images/projects/emailauto/generating_emails_collage.jpg" alt="AI Response Generation Workflow Collage" class="page-image">
                    <p>A visual breakdown of how the agents analyze context, reason about the strategy, and generate the final email response. Also there is an option to review the generated email and edit it before sending.</p>
                </div>
                
                <div class="code-look page">
                    <h3>Technical Architecture & Engineering Achievements</h3>
                    <ul>
                        <li><strong>AI Engineering:</strong> Google Gemini 2.5 Flash API (google-genai SDK), Company research via Gemini, Custom multi-agent orchestration with 3-agent pipeline, Advanced prompt engineering (role-playing, structured JSON outputs, chain-of-thought), RAG with department-isolated knowledge bases, Confidence-based CC/BCC reasoning (>80% threshold), Severity detection for automation gating</li>
                        <li><strong>Backend Architecture:</strong> Python 3.9+, FastAPI microservices, Service-oriented design (6 core services), Department-based data isolation, Multi-tenant support with role-based access control (Manager/Employee)</li>
                        <li><strong>Data Architecture:</strong> File-based JSON storage with hierarchical structure (<code>companies/departments/agents/uploads</code>), Thread tracking with unique IDs, Customer history and CRM-like profiling, Designed for PostgreSQL migration with relational schema</li>
                        <li><strong>Email Infrastructure:</strong> IMAP/SMTP protocol integration, Background scheduler for real-time email fetching, Thread analysis and duplicate detection, Multi-account email management</li>
                        <li><strong>Authentication & Authorization:</strong> JWT-based authentication, Multi-level access control (Personal/Company/Admin/Manager/Employee roles), Department-specific permissions</li>
                        <li><strong>Frontend:</strong> Angular 17, TypeScript, Responsive UI with real-time updates, Role-based interface adaptation</li>
                    </ul>
                    <h3>Key Engineering Achievements</h3>
                    <ul>
                        <li>Designed and implemented <strong>enterprise multi-agent AI architecture</strong> with three specialized agents working in a coordinated cognitive pipeline</li>
                        <li>Engineered <strong>intelligent CC/BCC reasoning system</strong> that analyzes employee roles and suggests inclusions with confidence-based thresholds</li>
                        <li>Built <strong>multi-mode automation</strong> with AI-driven severity detection to gate fully autonomous responses</li>
                        <li>Leveraged <strong>Gemini API</strong> for real-time company research and sender context enrichment</li>
                        <li>Implemented <strong>production-grade RAG system</strong> with department-isolated knowledge bases and dynamic context injection</li>
                        <li>Created <strong>thread-aware routing</strong> with conversation continuity and CRM-like customer history tracking</li>
                        <li>Developed <strong>modular microservices backend</strong> supporting enterprise workflows with department routing, role-based access, and multi-tenant architecture</li>
                        <li>Designed <strong>hierarchical data architecture</strong> with department isolation ensuring security and scalability</li>
                    </ul>
                    <p style="margin-top: 20px;"><em>Note: This project was developed during my Finqup internship as a production-intended AI product (I have approval to include it in my portfolio). The system demonstrates enterprise-grade AI agent development with real-world complexity like organizational reasoning, multi-mode automation, and role-based orchestration. Contact me for a live demo of the multi-agent system in action.</em></p>
                </div>
            </section>
        </div>
    `;
}

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
                    <div class="deployment-notice">
                        <i class="fas fa-info-circle"></i>
                        <strong>Note:</strong> First load may take up to 1 minute while the server starts.
                    </div>
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
                <img src="images/projects/ministry/ministry1.png" alt="">
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
                    <img src="images/projects/ministry/m1.png" alt="Home Page Screenshot" class="page-image">
                    <p>The Home page provides a comprehensive introduction to the Ministry of Finance of the Republic of Macedonia. It features essential information about the ministry, including its mission, vision, and services. The page is designed to engage users with quick access to key resources and the latest news.</p>
                </div>
                <div class="page">
                    <h3>News Page</h3>
                    <img src="images/projects/ministry/ministry2.png" alt="News Page Screenshot" class="page-image">
                    <p>The News page displays the latest updates and important news articles related to the Ministry of Finance. It is dynamically updated via Firebase, ensuring that users always have access to the most current information.</p>
                </div>
                <div class="page">
                    <h3>Services Page</h3>
                    <img src="images/projects/ministry/ministry3.png" alt="Services Page Screenshot" class="page-image">
                    <p>The Services page provides a detailed overview of the various services offered by the Ministry of Finance. Users can explore a wide range of financial services available to citizens and businesses, helping them navigate important processes more easily.</p>
                </div>
                <div class="page">
                    <h3>Job Listings Page</h3>
                    <img src="images/projects/ministry/ministry4.png" alt="Job Listings Page Screenshot" class="page-image">
                    <p>The Job Listings page showcases available job opportunities within the Ministry of Finance. Authenticated users can view, add, and manage job listings, streamlining the recruitment process. The integration of Firebase ensures real-time updates to the job listings.</p>
                </div>
                <div class="page">
                    <h3>Login Page</h3>
                    <img src="images/projects/ministry/ministry5.png" alt="Login Page Screenshot" class="page-image">
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
                <p>An AI-powered platform using Python and Streamlit for resume analysis and career guidance. Integrates Meta's Llama 3.3 70B via Groq API for fast AI-powered insights and recommendations.</p>
                <img src="images/projects/AI_Resume_Platform/2.png" alt="AI Resume Platform Main Interface" style="width:50%; height:40%;">
                <h2>Key Features</h2>
                <ul>
                    <li><strong>Resume Analysis:</strong> AI-powered resume-to-job matching with detailed scoring and keyword analysis.</li>
                    <li><strong>Career Coaching:</strong> Personalized career path recommendations and skills development guidance.</li>
                    <li><strong>Interview Preparation:</strong> Auto-generated technical and behavioral interview questions tailored to your profile.</li>
                </ul>
                <p>This project demonstrates AI API integration, NLP techniques, PDF parsing with PyPDF2, and building production Streamlit applications with resource management and rate limiting.</p>
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
                    <div class="deployment-notice">
                        <i class="fas fa-info-circle"></i>
                        <strong>Note:</strong> App may be sleeping. Click "Yes, get this app back up!" if prompted.
                    </div>
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
                <img src="images/projects/quiz/q1.png" alt="Quiz Image">
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
                    <img src="images/projects/quiz/quiz1.png" alt="Quiz Page Screenshot" class="page-image">
                    <p>The Quiz page presents users with multiple-choice questions, allowing them to select answers and track their scores dynamically.</p>
                </div>
                <div class="page">
                    <h3>Results Page</h3>
                    <img src="images/projects/quiz/quiz2.png" alt="Results Page Screenshot" class="page-image">
                    <p>The Results page displays the user's final score, encouraging them to improve and retake quizzes for better learning outcomes. Also there is an option to see the correct answers on each question,</p>
                </div>
                <a target="_blank" href="https://spasovskibojan.github.io/Edukativen-Kviz/">Live Demo of the project</a>
            </section>
        </div>
    `;
}

function loadBioSecure() {
    var firstStatePage = document.getElementById('workPageContainer');
    firstStatePage.innerHTML = "";
    window.scrollTo(0, 0);

    var singleProject = document.getElementById('singleProjectPart');
    singleProject.innerHTML = `
        <div class="portfolio-container">
            <div id="goBackBtn" onclick="goToWorkPage()">< Work</div>
            <section class="project-overview">
                <h1>BioSecure - Iris Recognition System</h1>
                <p>BioSecure is an advanced iris recognition system built with Python and OpenCV that performs high-accuracy biometric authentication. The system uses a multi-stage pipeline involving CLAHE preprocessing, Hough Circle segmentation, and a hybrid feature extraction method (Gabor Filters, LBP, SURF). Deployed on Hugging Face Spaces via Docker, the Flask backend calculates real-time cosine similarity scores for precise identity matching. The application includes a responsive web interface and generates automated PDF analysis reports, offering a complete solution for secure identity verification.</p>
                <img src="images/projects/BioSecure/1.png" alt="BioSecure Main Interface" style="background-color: #ccc; min-height: 300px; width: 100%; display: flex; align-items: center; justify-content: center; object-fit: cover;">
                <h2>Key Technical Highlights</h2>
                <ul>
                    <li><strong>Advanced Computer Vision:</strong> Utilizes Hough Transform, CLAHE, and Canny Edge Detection for precise iris segmentation and enhancement.</li>
                    <li><strong>Hybrid Feature Extraction:</strong> Combines Gabor Filters, LBP, and CNN-style convolutions to capture unique biometric signatures.</li>
                    <li><strong>Mathematical Modeling:</strong> Implements Polar coordinate normalization (Daugman's Rubber Sheet model) and Cosine Similarity for accurate matching.</li>
                    <li><strong>Modern Tech Stack:</strong> Built with Python 3.9, OpenCV, NumPy/SciPy, and Flask, deployed via Docker containers on Hugging Face Spaces.</li>
                    <li><strong>Automated Reporting:</strong> Generates detailed PDF analysis reports for every authentication attempt.</li>
                </ul>
            </section>
            
            <section class="page-overview">
                <h2>System Overview</h2>
                <div class="page">
                    <h3>Matching & Verification</h3>
                    <img src="images/projects/BioSecure/3.png" alt="Matching Results" class="page-image" style="background-color: #eee; min-height: 200px;">
                    <p>The generated template is compared against a database of known identities using Cosine Similarity and Euclidean Distance metrics to determine a match with a high confidence score.</p>
                </div>

                <div class="page">
                    <h3>Advanced Image Processing & Feature Extraction</h3>
                    <img src="images/projects/BioSecure/4.png" alt="Processing Pipeline" class="page-image" style="background-color: #eee; min-height: 200px;">
                    <p>The system implements a robust pipeline starting with CLAHE and bilateral filtering for noise reduction, followed by Hough Circle Transforms to precisely isolate the iris. It then extracts unique biometric features from the unwrapped iris (normalized via Daugman's method) using a hybrid approach of Gabor Filters and Local Binary Patterns (LBP) to create a distinct biometric template.</p>
                </div>
                
                <div class="code-look page">
                    <h3>Technology Stack</h3>
                    <ul>
                        <li><strong>Core Tech:</strong> Python 3.9, OpenCV, NumPy, SciPy</li>
                        <li><strong>Web Framework:</strong> Flask (Backend), HTML5/CSS3/Bootstrap (Frontend)</li>
                        <li><strong>Algorithms:</strong> Hough Transform, CLAHE, Gabor Filters, LBP, CNN-style convolutions</li>
                        <li><strong>Deployment:</strong> Docker, Hugging Face Spaces, CI/CD with Git</li>
                        <li><strong>Mathematics:</strong> Polar Normalization, Cosine Similarity, Euclidean Distance</li>
                    </ul>
                    <a target="_blank" href="https://huggingface.co/spaces/bojan-spasovski/biosecure-iris-demo">Live Demo of the project</a>
                </div>
            </section>
        </div>
    `;
}

function loadCryptoAnalysis() {
    var firstStatePage = document.getElementById('workPageContainer');
    firstStatePage.innerHTML = "";
    window.scrollTo(0, 0);

    var singleProject = document.getElementById('singleProjectPart');
    singleProject.innerHTML = `
        <div class="portfolio-container">
            <div id="goBackBtn" onclick="goToWorkPage()">< Work</div>
            <section class="project-overview">
                <h1>CryptoAnalysis Platform</h1>
                <p>I designed and developed a production-ready cryptocurrency market intelligence platform that combines technical analysis, fundamental analysis, and machine learning to provide comprehensive market insights. Built with a microservices architecture, this full-stack application demonstrates advanced software engineering practices including distributed systems design, AI/ML integration, and intelligent cloud resource management.</p>
                <img src="images/projects/crypto/1.png" alt="CryptoAnalysis Main Interface">
                <h2>Key Features</h2>
                <ul>
                    <li><strong>Real-Time Market Tracking:</strong> Monitor 10+ major cryptocurrencies with live price updates, interactive Chart.js visualizations, and historical data across multiple timeframes (1-minute to daily candles).</li>
                    <li><strong>Advanced Technical Analysis:</strong> Implements 9 technical indicators including SMA, EMA, RSI, MACD, Bollinger Bands, Stochastic Oscillator, Volume Analysis, and ADX for comprehensive market trend analysis.</li>
                    <li><strong>AI-Powered Predictions:</strong> LSTM neural network trained on historical market data provides time-series price predictions, deployed on HuggingFace Spaces for scalable inference.</li>
                    <li><strong>Sentiment Analysis:</strong> Aggregates latest cryptocurrency news with VADER NLP sentiment scoring to gauge market sentiment and potential price movements.</li>
                    <li><strong>On-Chain Metrics:</strong> Displays blockchain fundamentals including hash rates, transaction volumes, market dominance, NVT ratios, DeFi TVL, and whale activity patterns via multiple API integrations.</li>
                    <li><strong>Microservices Architecture:</strong> Distributed system with Django web app, two FastAPI microservices for technical/fundamental analysis, and intelligent service orchestration.</li>
                    <li><strong>Production-Grade Reliability:</strong> Implements graceful degradation, automated service wake-up with health checks, concurrent request handling, and comprehensive fallback mechanisms for API rate limits.</li>
                </ul>
                <p>This project showcases my ability to architect complex, scalable systems while operating within budget constraints—achieving enterprise-level functionality using only free-tier cloud resources through intelligent design patterns. The integration of machine learning, NLP, and distributed systems highlights my cross-domain expertise.</p>
            </section>
            
            <section class="page-overview">
                <h2>Features Overview</h2>
                <div class="page">
                    <h3>Market Dashboard & Real-Time Data</h3>
                    <img src="images/projects/crypto/2.png" alt="Market Dashboard" class="page-image">
                    <p>Interactive dashboard displaying real-time cryptocurrency prices with percentage changes. Users can track multiple assets simultaneously and access detailed analysis for each coin with a single click.</p>
                </div>
                <div class="page">
                    <h3>Technical Analysis & Indicators</h3>
                    <img src="images/projects/crypto/3.png" alt="Technical Analysis" class="page-image">
                    <p>Comprehensive technical analysis featuring 9 industry-standard indicators.</p>
                </div>
                <div class="page">
                    <h3>AI Price Predictions</h3>
                    <img src="images/projects/crypto/4.png" alt="AI Predictions" class="page-image">
                    <p>LSTM neural network provides machine learning-powered price forecasts based on historical patterns. The model is trained on market data and deployed as a separate microservice for scalable predictions.</p>
                </div>
                <div class="page">
                    <h3>Fundamental Analysis & Sentiment</h3>
                    <img src="images/projects/crypto/5.png" alt="Fundamental Analysis" class="page-image">
                    <p>Aggregates news sentiment using VADER NLP, on-chain metrics like transaction volumes and hash rates, DeFi TVL data, and exchange flow analysis to provide comprehensive fundamental insights beyond just price action.</p>
                </div>
                
                <div class="code-look page">
                    <h3>Technology Stack & Architecture</h3>
                    <ul>
                        <li><strong>Frontend:</strong> Bootstrap, Chart.js for interactive visualizations</li>
                        <li><strong>Backend:</strong> Django (web app), FastAPI (microservices), Pandas/NumPy for data processing</li>
                        <li><strong>Machine Learning:</strong> LSTM neural network (TensorFlow/Keras), VADER NLP for sentiment analysis</li>
                        <li><strong>External APIs:</strong> CoinGecko, CryptoCompare, Blockchain.com, DeFiLlama</li>
                        <li><strong>Deployment:</strong> Render (Django + FastAPI services), HuggingFace Spaces (LSTM model)</li>
                        <li><strong>Advanced Features:</strong> Concurrent request handling with ThreadPoolExecutor, automated service orchestration, graceful degradation patterns</li>
                    </ul>
                    <a target="_blank" href="https://cryptoanalysis-web.onrender.com/">Live Demo of the project</a>
                    <div class="deployment-notice">
                        <i class="fas fa-info-circle"></i>
                        <strong>Note:</strong> First load may take 1-2 minutes as microservices initialize. The app automatically wakes dormant services.
                    </div>
                </div>
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

// Set current year in footer
const yearSpan = document.getElementById('currentYear');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}
