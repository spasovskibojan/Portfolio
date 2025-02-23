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

function goToWorkPage() {
    location.reload()
}